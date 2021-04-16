<template>
	<!DOCTYPE html>
	<html lang="es">
	<head>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
		<title>Hackathon</title>
		<link href="assets/gen.css" rel="stylesheet">
		<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous" />
		<link rel="preconnect" href="https://fonts.gstatic.com">
		<link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap" rel="stylesheet">
		<link rel="stylesheet" href="lib/fontawesome-free-5.15.3-web/css/all.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous" />
		</head>
	<body>
	<div id="app">
		<ActionBar title="Hackathon 2"></ActionBar>
		<main>
			<div class="container">
				<div class="row">
					<div class="col-sm">
						<a class="btn btn-light btn-block" href="#"><i class="fas fa-list"></i> Empieza a aprender</a>
					</div>
					<div class="col-sm">
						<a class="btn btn-light btn-block" href="#"><i class="fas fa-list"></i> Crea tu contenido</a>
					</div>
				</div>
			</div>
			<hr />
			<div class="container-fluid">
				<CourseList></CourseList>
			</div>
		</main>
	</div>
	</body>
	</html>
</template>

<script>

import ActionBar from "@/components/ActionBar";
import CourseList from "@/components/CourseList";
export default {
	name: 'App',
	components: {
		CourseList,
		ActionBar
	}
}
</script>

<style>
/*#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}*/
</style>
