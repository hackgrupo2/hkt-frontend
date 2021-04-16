<template>
	<div class="container-fluid">
		<h1 class="h3 text-center">Lista de cursos</h1>
		<CourseList></CourseList>
	</div>
</template>

<script>
import CourseList from "@/components/CourseList";
export default {
  name: "CoursesLayout",
  components: {CourseList},
}
</script>

<style scoped>

</style>