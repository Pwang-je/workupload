<script setup>
import { ref } from "vue";
import { supabase } from "../supabase"; // Supabase 설정 import
import { v4 as uuidv4 } from "uuid"; // UUID 패키지 import
import VueDatePicker from "@vuepic/vue-datepicker"; // vue date picker
import "@vuepic/vue-datepicker/dist/main.css"; // vue date picker css

// 오늘 날짜를 YYYY-MM-DD 형식으로 반환하는 함수
const getTodayDate = () => {
  const today = new Date();
  return today.toISOString().split("T")[0]; // "YYYY-MM-DD" 형식 변환
};

// 상태 변수들
const file = ref(null);
const fileName = ref(""); // 학생 이름
const fileDate = ref(getTodayDate()); // 오늘 날짜를 기본값으로 설정
const question = ref(""); // 질문 추가
const selectedFileName = ref("No file selected"); // 파일 선택 버튼의 텍스트
const downloadURL = ref(""); // 업로드 후 다운로드 URL

// 파일 선택 시 실행
const onFileChange = (event) => {
  if (event.target.files.length > 0) {
    file.value = event.target.files[0]; // 선택한 파일 저장
    selectedFileName.value = file.value.name; // 버튼 텍스트를 선택한 파일명으로 변경
  }
};

// 파일 업로드 실행
const uploadFile = async () => {
  if (!file.value || !fileName.value || !fileDate.value || !question.value) {
    alert("이름, 날짜, 질문, 파일을 모두 입력해주세요.");
    return;
  }

  const safeFileName = generateSafeFileName(file.value.name); // 안전한 파일명
  const originalName = file.value.name; // 사용자가 업로드한 원본 파일명

  // 1. Supabase Storage 업로드
  const { data, error } = await supabase.storage
    .from("minibox") // Storage 버킷 이름
    .upload(safeFileName, file.value);

  if (error) {
    console.error("파일 업로드 실패", error);
    alert("파일 업로드에 실패하였습니다.");
    return;
  }

  // 2. 업로드된 파일의 Public URL 가져오기
  const { data: urlData } = supabase.storage
    .from("minibox")
    .getPublicUrl(safeFileName);

  downloadURL.value = urlData.publicUrl; // URL 저장

  // console.log("✅ 업로드된 파일 URL:", downloadURL.value);

  // 3. Supabase DB에 파일 정보 + 질문 저장
  const { data: insertData, error: insertError } = await supabase
    .from("fileupload") // 테이블 이름
    .insert([
      {
        name: fileName.value,  // 학생 이름
        date: fileDate.value,  // 제출 날짜
        question: question.value, // 질문 추가
        url: downloadURL.value,  // 업로드된 파일의 URL
        original_name: originalName, // DB에 원본 파일명 저장
      }
    ])
    .select(); // select() 추가해서 데이터가 잘 저장되는지 확인

  if (insertError) {
    console.error("파일 정보 저장 실패", insertError);
    alert("파일 정보 저장에 실패하였습니다.");
    return;
  }

  console.log("✅ DB 저장 성공", insertData);
  alert("파일 업로드 및 정보 저장 성공!");

  // 📌 업로드 완료 후 모든 입력값 초기화
  file.value = null; // 파일 초기화
  fileName.value = "";
  fileDate.value = getTodayDate(); // 오늘 날짜로 초기화
  question.value = ""; // 질문 초기화
  selectedFileName.value = "No file selected"; // 파일 선택 버튼 초기화
};
</script>

<template>
  <div class="flex items-center justify-center min-h-screen bg-[#1A1B26]">
    <div class="w-full max-w-md p-8 bg-[#16161E] rounded-xl shadow-lg">
      <h2 class="text-2xl font-bold text-center text-[#C792EA] pb-4">Submission status</h2>

      <div class="space-y-4">
        <!-- 이름 입력 필드 -->
        <input 
          type="text" 
          class="w-full px-4 py-3 border border-[#2C2E40] rounded-xl bg-[#1E1E2E] text-[#A6ACCD] focus:ring-2 focus:ring-[#C792EA] focus:outline-none" 
          v-model="fileName" 
          placeholder="Your name" 
        />

        <!-- 질문 입력 필드 -->
        <textarea 
          class="w-full px-4 py-3 border border-[#2C2E40] rounded-xl bg-[#1E1E2E] text-[#A6ACCD] focus:ring-2 focus:ring-[#C792EA] focus:outline-none resize-none" 
          v-model="question"
          placeholder="Enter your question"
          rows="3"
        ></textarea>

        <!-- 날짜 선택기 -->
        <vue-date-picker 
          v-model="fileDate" 
          :format="'yyyy-MM-dd'" 
          :enable-time-picker="false" 
          class="w-full px-4 py-3 border border-[#2C2E40] rounded-xl bg-[#1E1E2E] text-[#A6ACCD]"
        />

        <!-- 파일 선택 버튼 (커스텀) -->
        <label class="flex items-center justify-between w-full px-4 py-3 border border-[#2C2E40] rounded-xl bg-[#C792EA] text-white cursor-pointer hover:bg-[#AB69C6] transition duration-200">
          <span>{{ selectedFileName }}</span>
          <input type="file" class="hidden" @change="onFileChange" />
        </label>

        <!-- 업로드 버튼 -->
        <button 
          @click="uploadFile" 
          class="w-full py-3 bg-[#C792EA] text-white font-semibold rounded-full hover:bg-[#AB69C6] transition duration-200">
          Upload
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
button {
  margin-top: 10px;
  padding: 8px 12px;
  background: #3b82f6;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 5px;
}
button:hover {
  background: #2563eb;
}
</style>