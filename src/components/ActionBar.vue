<template>
	<nav id="actionbar" class="navbar sticky-top navbar-expand-lg navbar-dark shadow-sm mb-3 bg-primary" role="navigation">
	<div class="w-100">
		<div class="form-row">
		<div class="col navbar-brand text-truncate">
			<a class="navbar-text py-0 mr-2 text-decoration-none text-white" href="#sidebar">{{ title }}</a>
		</div>
		<div class="col-auto" role="toolbar" aria-label="Barra de herramientas">
			<a class="btn text-white" href="#">Entra</a>
			<a class="btn text-white" href="#">Regístrate</a>
		</div>
		</div>
	</div>
	</nav>
</template>

<script>
export default {
	name: "ActionBar",
	props: ['title'],
}
</script>

<style scoped>

</style>