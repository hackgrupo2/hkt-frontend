<template>
	<div class="form-row">
		<div class="col-sm">
			<div class="form-row">
				<div class="col-md mb-3">
					<CourseItem name="PHP" description="Aprende PHP desde cero" image="assets/logo.png"></CourseItem>
				</div>
				<div class="col-md mb-3">
					<CourseItem name="Java" description="Aprende Java desde cero" image="assets/logo.png"></CourseItem>
				</div>
			</div>
		</div>
		<div class="col-sm">
			<div class="form-row">
				<div class="col-md mb-3">
					<CourseItem name="Marketing digital" description="Aprende Marketing digital desde cero" image="assets/logo.png"></CourseItem>
				</div>
				<div class="col-md mb-3">
					<CourseItem name="Finanzas personales" description="Aprende Finanzas personales desde cero" image="assets/logo.png"></CourseItem>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import CourseItem from "@/components/CourseItem";
//import axios from "axios";
export default {
	name: "CourseList",
	components: {CourseItem},
  data() {
	return {courses: []}
  },
  mounted() {
	console.log('Cargando lista de cursos...');
/*	axios.get('server.backend/courses').then((data) => {
	  console.log(data);
	  this.courses = data;
	});*/
  }
}
</script>

<style scoped>

</style>