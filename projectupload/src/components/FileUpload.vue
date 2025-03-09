<script setup>
import { ref } from "vue";
import { supabase } from "../supabase"; // Supabase 설정 import
import { v4 as uuidv4 } from "uuid"; // UUID 패키지 import

// 🔹 상태 변수들
const file = ref(null);
const fileName = ref(""); // 학생 이름
const fileDate = ref(""); // 제출 날짜
const downloadURL = ref(""); // 업로드 후 다운로드 URL

// 🔹 파일 선택 시 실행
const onFileChange = (event) => {
  file.value = event.target.files[0]; // 선택한 파일 저장
};

// 🔹 UUID 기반 안전한 파일명 생성 (원본 확장자 유지)
const generateSafeFileName = (originalName) => {
  const extension = originalName.split(".").pop(); // 확장자 추출
  return `${uuidv4()}.${extension}`; // 안전한 파일명 생성
};

// 🔹 파일 업로드 실행
const uploadFile = async () => {
  if (!file.value || !fileName.value || !fileDate.value) {
    alert("이름, 날짜, 파일을 모두 입력해주세요!");
    return;
  }

  const safeFileName = generateSafeFileName(file.value.name); // 안전한 파일명
  const originalName = file.value.name; // 사용자가 업로드한 원본 파일명

  // 🟢 1. Supabase Storage 업로드
  const { data, error } = await supabase.storage
    .from("minibox") // 🟢 Storage 버킷 이름
    .upload(safeFileName, file.value);

  if (error) {
    console.error("파일 업로드 실패", error);
    alert("파일 업로드에 실패하였습니다.");
    return;
  }

  // 🟢 2. 업로드된 파일의 Public URL 가져오기
  const { data: urlData } = supabase.storage
    .from("minibox")
    .getPublicUrl(safeFileName);

  downloadURL.value = urlData.publicUrl; // URL 저장

  console.log("✅ 업로드된 파일 URL:", downloadURL.value);

  // 🟢 3. Supabase DB에 파일 정보 저장
  const { data: insertData, error: insertError } = await supabase
    .from("fileupload") // 🟢 올바른 테이블 이름
    .insert([
      {
        name: fileName.value,  // 학생 이름
        date: fileDate.value,  // 제출 날짜
        url: downloadURL.value,  // 업로드된 파일의 URL
        original_name: originalName, // 🟢 DB에 원본 파일명 저장!
      }
    ])
    .select(); // ✅ select() 추가해서 데이터가 잘 저장되는지 확인

  if (insertError) {
    console.error("파일 정보 저장 실패", insertError);
    alert("파일 정보 저장에 실패하였습니다.");
    return;
  }

  console.log("✅ DB 저장 성공", insertData);
  alert("파일 업로드 및 정보 저장 성공! ✅");

  // 🔹 업로드 완료 후 초기화
  file.value = null;
  fileName.value = "";
  fileDate.value = "";
};
</script>

<template>
  <div>
    <h2>📂 과제 파일 업로드</h2>
    <input type="text" v-model="fileName" placeholder="이름 입력" />
    <input type="date" v-model="fileDate" />
    <input type="file" @change="onFileChange" />
    <button @click="uploadFile">업로드</button>

    <!-- <p v-if="downloadURL">
      ✅ 파일 다운로드: 
      <a :href="downloadURL" target="_blank" download>📥 여기 클릭</a>
    </p> -->
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