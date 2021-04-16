<template>
	<article class="card">
		<div class="row no-gutters">
			<div class="col-md-4">
				<img :src="image" :alt="name" class="img-fluid" />
			</div>
			<div class="col-md">
				<div class="card-body">
					<h1 class="h5 card-title">{{ name }}</h1>
					<p class="card-text">{{ description }}</p>
					<router-link class="btn btn-info" to="courses/1">
						<span class="fas fa-eye"></span> Ver detalle
					</router-link>
				</div>
			</div>
		</div>
	</article>
</template>

<script>
export default {
	name: "CourseItem",
	props: ['name', 'description', 'image'],
}
</script>

<style scoped>

</style>