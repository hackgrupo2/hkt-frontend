<template>
	<div class="form-row">
		<div class="col-sm">
			<div class="form-row">
				<div class="col-md mb-3">
					<CourseItem name="PHP" description="Aprende PHP desde cero"></CourseItem>
				</div>
				<div class="col-md mb-3">
					<CourseItem name="PHP" description="Aprende PHP desde cero"></CourseItem>
				</div>
			</div>
		</div>
		<div class="col-sm">
			<div class="form-row">
				<div class="col-md mb-3">
					<CourseItem name="PHP" description="Aprende PHP desde cero"></CourseItem>
				</div>
				<div class="col-md mb-3">
					<CourseItem name="PHP" description="Aprende PHP desde cero"></CourseItem>
				</div>
			</div>
		</div>
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