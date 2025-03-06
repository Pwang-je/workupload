<script setup>
import { ref, onMounted } from "vue";
import { supabase } from "../supabase";

// 상태 관리 변수
const students = ref([]); // 학생 목록
const selectedStudent = ref(""); // 선택된 학생
const studentFiles = ref([]); // 선택한 학생의 파일 목록

// 📌 1️⃣ Supabase `fileupload` 테이블에서 학생 목록 가져오기
const getStudents = async () => {
  const { data, error } = await supabase
    .from("fileupload") // ✅ `fileupload` 테이블에서 가져옴
    .select("name"); // ✅ `name` 컬럼만 선택

  if (error) {
    console.error("학생 목록 가져오기 실패", error);
    return;
  }

  // 🔹 중복 제거 후 students 리스트 업데이트
  const uniqueNames = [...new Set(data.map((item) => item.name))];
  students.value = uniqueNames;
};

// 📌 2️⃣ `fileupload` 테이블에서 특정 학생의 파일 가져오기
const getStudentFiles = async () => {
  if (!selectedStudent.value) return;

  const { data, error } = await supabase
    .from("fileupload") // ✅ `fileupload` 테이블에서 데이터 조회
    .select("date, url") // ✅ `date`, `url` 컬럼만 선택
    .eq("name", selectedStudent.value) // ✅ 선택한 학생만 필터링
    .order("date", { ascending: true }); // ✅ 날짜순 정렬

  if (error) {
    console.error("파일 목록 가져오기 실패", error);
    return;
  }

  studentFiles.value = data; // ✅ 파일 목록 업데이트
};

// 📌 3️⃣ 페이지 로드 시 학생 목록 불러오기
onMounted(() => {
  getStudents();
});
</script>

<template>
  <div>
    <h2>📂 관리자 페이지 - 학생별 파일 조회</h2>

    <!-- 학생 선택 -->
    <label for="studentSelect">학생 선택:</label>
    <select v-model="selectedStudent" @change="getStudentFiles">
      <option value="">학생을 선택하세요</option>
      <option v-for="student in students" :key="student" :value="student">
        {{ student }}
      </option>
    </select>

    <!-- 선택된 학생의 파일 목록 -->
    <table v-if="studentFiles.length > 0">
      <thead>
        <tr>
          <th>📅 날짜</th>
          <th>📁 파일</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="file in studentFiles" :key="file.url">
          <td>{{ file.date }}</td>
          <td><a :href="file.url" target="_blank">📥 다운로드</a></td>
        </tr>
      </tbody>
    </table>

    <p v-else-if="selectedStudent">📌 해당 학생의 업로드 파일이 없습니다.</p>
  </div>
</template>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
}
th, td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: center;
}
th {
  background-color: #3b82f6;
  color: white;
}
</style>
