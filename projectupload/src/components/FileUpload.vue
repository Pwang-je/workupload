<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router"; 
import { supabase } from "../supabase";
import { v4 as uuidv4 } from "uuid";
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";

// Vue Router 사용
const router = useRouter();

// 고정된 관리자 비밀번호
const ADMIN_PASSWORD = "2580"; // 원하는 비밀번호로 변경

// Admin 페이지 이동 함수 (비밀번호 확인)
const goToAdminPage = (event) => {
  const userInput = prompt("🔑: ");

  if (userInput === ADMIN_PASSWORD) {
    router.push("/adminpage"); // 비밀번호가 맞으면 이동
  } else {
    alert("❌");
    event.preventDefault(); // 비밀번호 틀리면 이동 차단
    router.push("/"); // 비밀번호 틀리면 홈으로 이동
  }
};


// 오늘 날짜를 YYYY-MM-DD 형식으로 반환하는 함수
const getTodayDate = () => {
  const today = new Date();
  return today.toLocaleDateString("ko-KR", { year: "numeric", month: "2-digit", day: "2-digit" }).replace(/\. /g, "-").replace(".", "");
};

// 상태 변수들
const file = ref(null);
const fileName = ref(""); 
const fileDate = ref(getTodayDate());
const question = ref("");
const selectedFileName = ref("No file selected"); 
const downloadURL = ref("");

// UUID 기반 안전한 파일명 생성
const generateSafeFileName = (originalName) => {
  const extension = originalName.split(".").pop();
  return `${uuidv4()}.${extension}`;
};

// 파일 선택 시 실행
const onFileChange = (event) => {
  if (event.target.files.length > 0) {
    file.value = event.target.files[0]; 
    selectedFileName.value = file.value.name;
  }
};


// 파일 업로드 실행
const uploadFile = async () => {
  if (!file.value || !fileName.value || !fileDate.value) {
    alert("이름, 날짜, 파일을 모두 입력해주세요.");
    return;
  }

  const safeFileName = generateSafeFileName(file.value.name);
  const originalName = file.value.name;

  // 1. Supabase Storage 업로드
  const { data, error } = await supabase.storage
    .from("minibox")
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

  downloadURL.value = urlData.publicUrl;

  // 3. Supabase DB에 파일 정보 + 질문 저장
  const { data: insertData, error: insertError } = await supabase
    .from("fileupload")
    .insert([
      {
        name: fileName.value,
        date: fileDate.value,
        question: question.value,
        url: downloadURL.value,
        original_name: originalName,
      }
    ])
    .select();

  if (insertError) {
    // console.error("파일 정보 저장 실패", insertError);
    alert("💦 업로드 실패");
    return;
  }

  // console.log("DB 저장 성공", insertData);
  alert("✔️ 저장 성공");

  // 입력값 초기화
  file.value = null;
  fileName.value = "";
  fileDate.value = getTodayDate();
  question.value = "";
  selectedFileName.value = "No file selected";
};
</script>

<template>
  <div class="flex items-center justify-center min-h-screen bg-[#1A1B26]">
    <div class="w-full max-w-md p-8 bg-[#16161E] rounded-xl shadow-lg relative">
      
      <!-- Mac 스타일 창 버튼 -->
      <div class="absolute flex space-x-2 top-3 left-4">
        <span class="w-3 h-3 bg-red-500 rounded-full"></span>
        <span class="w-3 h-3 bg-yellow-500 rounded-full"></span>
        <span class="w-3 h-3 bg-green-500 rounded-full"></span>
      </div>

      <!-- 숨겨진 Admin 페이지 이동 버튼 (router-link 사용) -->
      <router-link 
        to="/adminpage"
        @click="goToAdminPage"
        class="absolute text-white transition-opacity duration-300 top-3 right-4 opacity-10 hover:opacity-100"
      >
        ⚙️
      </router-link>

      <h2 class="text-2xl font-bold text-center text-[#C792EA] pb-4 mt-6">파일 제출용</h2>

      <div class="space-y-4">
        <!-- 이름 입력 필드 -->
        <input 
          type="text" 
          class="w-full px-4 py-3 border border-[#2C2E40] rounded-xl bg-[#1E1E2E] text-[#A6ACCD] focus:ring-2 focus:ring-[#C792EA] focus:outline-none" 
          v-model="fileName" 
          placeholder="이름을 입력해주세요." 
        />

        <!-- 질문 입력 필드 -->
        <textarea 
          class="w-full px-4 py-3 border border-[#2C2E40] rounded-xl bg-[#1E1E2E] text-[#A6ACCD] focus:ring-2 focus:ring-[#C792EA] focus:outline-none resize-none" 
          v-model="question"
          placeholder="질문이나 하고싶은 말을 적어주세요."
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
        <label class="flex items-center justify-center w-full px-4 py-3 border border-[#2C2E40] rounded-xl bg-[#C792EA] text-white cursor-pointer hover:bg-[#AB69C6] transition duration-200">
          <span>{{ selectedFileName }}</span>
          <input type="file" class="hidden" @change="onFileChange" />
        </label>

        <!-- 업로드 버튼 -->
        <button 
          @click="uploadFile" 
          class="w-full py-3 bg-[#C792EA] text-white font-semibold rounded-full hover:bg-[#AB69C6] transition duration-200">
          🍺업로드
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