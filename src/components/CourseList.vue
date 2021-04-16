<template>
	<div class="row">
		<div class="col-sm-3">
			<CourseItem name="PHP" description="Aprende PHP desde cero"></CourseItem>
		</div>
		<!--div class="col-sm-3">
			<CourseItem courseName="HTML" courseDescription="Aprende HTML desde cero" courseImage="https://via.placeholder.com/150/92c952"></CourseItem>
		</div>
		<div class="col-sm-3">
			<CourseItem courseName="Laravel" courseDescription="Aprende Laravel desde cero" courseImage="https://via.placeholder.com/150/92c952"></CourseItem>
		</div>
		<div class="col-sm-3">
			<CourseItem courseName="Vue.js" courseDescription="Aprende Vue.js desde cero" courseImage="https://via.placeholder.com/150/92c952"></CourseItem>
		</div-->
	</div>
</template>

<script>
import CourseItem from "@/components/CourseItem";
export default {
	name: "CourseList",
	components: {CourseItem}
}
</script>

<style scoped>

</style>