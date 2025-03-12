<script setup>
import { ref, onMounted } from "vue";
import { supabase } from "../supabase";
import { useRouter } from "vue-router"; // ✅ Vue Router 추가

const router = useRouter(); // ✅ Vue Router 사용

// 상태 변수
const students = ref([]);
const selectedStudent = ref("");
const studentFiles = ref([]);

// ✅ FileUpload 페이지(`/`)로 이동하는 함수
const goToFileUpload = () => {
  router.push("/"); // `/` 경로로 이동
};

// 1. 학생 목록 가져오기
const getStudents = async () => {
  const { data, error } = await supabase.from("fileupload").select("name");
  if (error) {
    console.error("학생 목록 가져오기 실패", error);
    return;
  }
  students.value = [...new Set(data.map((item) => item.name))];
};

// 2. 특정 학생의 파일 가져오기
const getStudentFiles = async () => {
  if (!selectedStudent.value) return;
  const { data, error } = await supabase
    .from("fileupload")
    .select("date, url, original_name, question")
    .eq("name", selectedStudent.value)
    .order("date", { ascending: true });

  if (error) {
    console.error("파일 목록 가져오기 실패", error);
    return;
  }
  studentFiles.value = data;
};

// 3. 페이지 로드 시 학생 목록 불러오기
onMounted(() => {
  getStudents();
});
</script>

<template>
  <div class="flex items-center justify-center min-h-screen bg-[#1A1B26]">
    <div class="w-full max-w-lg p-8 bg-[#16161E] rounded-xl shadow-lg relative">
      
      <!-- Mac 스타일 창 버튼 -->
      <div class="absolute flex space-x-2 top-3 left-4">
        <span class="w-3 h-3 bg-red-500 rounded-full"></span>
        <span class="w-3 h-3 bg-yellow-500 rounded-full"></span>
        <span class="w-3 h-3 bg-green-500 rounded-full"></span>
      </div>

      <!-- ✅ 클릭 시 FileUpload 페이지(`/`)로 이동 -->
      <h2 
        class="text-2xl font-bold text-center text-[#C792EA] pb-4 mt-6 cursor-pointer hover:text-[#AB69C6] transition duration-200"
        @click="goToFileUpload"
      >
        Admin Page
      </h2>

      <div class="space-y-4">
        <!-- 학생 선택 -->
        <label class="block text-[#A6ACCD] font-semibold">Selected Student:</label>
        <select 
          v-model="selectedStudent" 
          @change="getStudentFiles"
          class="w-full px-4 py-3 border border-[#2C2E40] rounded-xl bg-[#1E1E2E] text-[#A6ACCD] focus:ring-2 focus:ring-[#C792EA] focus:outline-none"
        >
          <option value="">학생을 선택하세요</option>
          <option v-for="student in students" :key="student" :value="student">
            {{ student }}
          </option>
        </select>

        <!-- 선택된 학생의 파일 목록 -->
        <div v-if="studentFiles.length > 0" class="mt-4">
          <div v-for="(file, index) in studentFiles" :key="file.url">
            <!-- 날짜별 그룹 구분 -->
            <div v-if="index === 0 || studentFiles[index - 1].date !== file.date" class="mt-6 pb-2 border-b border-[#2C2E40]">
              <h3 class="text-lg font-bold text-[#C792EA]">{{ file.date }}</h3>
            </div>

            <!-- 파일 다운로드 목록 -->
            <div class="flex justify-between items-center bg-[#1E1E2E] px-4 py-3 mt-2 rounded-xl">
              <span class="text-[#A6ACCD]">{{ file.original_name }}</span>
              <a 
                :href="file.url" 
                :download="file.original_name" 
                target="_blank" 
                class="px-3 py-1 bg-[#C792EA] text-white text-sm rounded-lg hover:bg-[#AB69C6] transition duration-200"
              >
                다운로드
              </a>
            </div>

            <!-- 질문 목록 -->
            <div v-if="file.question" class="mt-2 px-4 py-3 bg-[#2C2E40] text-[#A6ACCD] rounded-xl">
              <p class="font-semibold text-[#C792EA]">Qstn:</p>
              <p>{{ file.question }}</p>
            </div>
          </div>
        </div>

        <p v-else-if="selectedStudent" class="text-[#A6ACCD] text-center mt-4">
          📌 해당 학생의 업로드 파일이 없습니다.
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
select {
  cursor: pointer;
}
</style>
