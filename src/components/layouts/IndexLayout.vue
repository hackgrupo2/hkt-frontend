<template>
	<div class="container">
		<h1 class="text-center">¡Bienvenido!</h1>
		<p class="text-center">Te presentamos <strong>Apprende.pe</strong>, donde encontrarás una enorme lista de cursos para ti y podrás apoyar a tus creadores de contenido favoritos.</p>
		<div class="row">
			<div class="col-sm mb-3">
				<router-link class="btn btn-lg btn-info btn-block" to="courses">
					<span class="fas fa-list"></span> Empieza a aprender
				</router-link>
			</div>
			<div class="col-sm mb-3">
				<router-link class="btn btn-lg btn-warning btn-block" to="upload-course">
					<span class="fas fa-upload"></span> Crea tu contenido
				</router-link>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "IndexLayout"
}
</script>

<style scoped>

</style>