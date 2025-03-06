<script setup>
import { ref } from "vue";
import { supabase } from "../supabase";
import { v4 as uuidv4 } from "uuid"; // UUID 패키지 import

// 파일 상태
const file = ref(null);
const fileName = ref("");
const fileDate = ref("");
const downloadURL = ref("");

// 파일 선택 시 실행
const onFileChange = (event) => {
  file.value = event.target.files[0];
};

// 파일명을 UUID로 변환하는 함수
const generateFileName = (originalName) => {
  const extension = originalName.split(".").pop(); // 확장자 추출
  return `${uuidv4()}.${extension}`; // UUID.확장자 형식으로 변경
};

// 파일 업로드 실행
const uploadFile = async () => {
  if (!file.value || !fileName.value || !fileDate.value) {
    alert("이름, 날짜, 파일을 모두 입력해주세요!");
    return;
  }

  // 🟢 파일명을 UUID로 변경
  const safeFileName = generateFileName(file.value.name);

  // Supabase Storage 업로드
  const { data, error } = await supabase.storage
    .from("minibox") // 🟢 버킷 이름 확인!
    .upload(safeFileName, file.value);

  if (error) {
    console.error("파일 업로드 실패", error);
    alert("파일 업로드에 실패하였습니다.");
    return;
  }

  // 🟢 업로드한 파일의 "Public URL" 가져오기
  const { data: urlData } = supabase.storage
    .from("minibox") // 🟢 여기서도 버킷 이름 확인!
    .getPublicUrl(safeFileName);

  downloadURL.value = urlData.publicUrl; // ✅ 올바른 파일 URL 저장

  // 🟢 Supabase 데이터베이스에 이름, 날짜, URL 저장하기 (fileupload 테이블에)
  const { data: insertData, error: insertError } = await supabase
    .from("fileupload") // 🟢 올바른 테이블 이름 "fileupload"
    .insert([{ name: fileName.value, date: fileDate.value, url: downloadURL.value }]); // `fileupload` 테이블에 이름, 날짜, URL 저장

  if (insertError) {
    console.error("파일 정보 저장 실패", insertError);
    alert("파일 정보 저장에 실패하였습니다.");
    return;
  }

  alert("파일 업로드 및 정보 저장 성공! ✅");
};
</script>

<template>
  <div>
    <h2>📂 과제 파일 업로드</h2>
    <input type="text" v-model="fileName" placeholder="이름" />
    <input type="date" v-model="fileDate" placeholder="날짜" />
    <input type="file" @change="onFileChange" />
    <button @click="uploadFile">업로드</button>

    <p v-if="downloadURL">
      ✅ 파일 다운로드: 
      <a :href="downloadURL" target="_blank" download>📥 여기 클릭</a>
    </p>
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
}
</style>
