<template>
	<div class="container-fluid">
		<h1 class="h3"><small class="text-muted">Detalle del Curso:</small><br />PHP</h1>
		<hr />
		<p>Etiquetas:<br /><span class="badge badge-info mr-1">PHP</span> <span class="badge badge-info mr-1">Programación</span> <span class="badge badge-info mr-1">Desarrollo web</span></p>
		<hr />
		<div>
			<h2 class="h5">Descripción</h2>
			<p>Aprende PHP desde cero.</p>
		</div>
		<div>
			<h2 class="h5">Video</h2>
			<div class="embed-responsive embed-responsive-16by9">
			  <iframe width="560" height="315" src="https://www.youtube.com/embed/VYPfncvYW-Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
			</div>
		</div>
		<hr />
		<router-link class="btn btn-warning mr-1" to="/donate">
			<span class="fas fa-dollar-sign"></span> Apoya este curso
		</router-link>
		<router-link class="btn btn-secondary" to="/courses">
			<span class="fas fa-arrow-left"></span> Volver a la lista
		</router-link>
	</div>
</template>

<script>
export default {
  name: "CourseLayout",
/*  data() {
    const {id} = this.$route.params;
    return {
      id:
	}
  }*/
}
</script>

<style scoped>

</style>