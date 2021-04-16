<template>
	<!DOCTYPE html>
	<html lang="es">
	<head>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
		<title>Hackathon</title>
		<link href="assets/gen.css" rel="stylesheet" type="text/css">
		<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous" />
		<link rel="preconnect" href="https://fonts.gstatic.com">
		<link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap" rel="stylesheet">
	</head>
	<body>
	<div id="app">
		<ActionBar title="Apprende.pe"></ActionBar>
		<main>
			<router-view></router-view>
		</main>
	</div>
	</body>
	</html>
</template>

<script>

import ActionBar from "@/components/ActionBar";
export default {
	name: 'App',
	components: {
		ActionBar
	},
	created()
	{
		let scriptElement = document.createElement('script');
		scriptElement.setAttribute('src', "https://kit.fontawesome.com/17d60dca64.js");
		document.head.appendChild(scriptElement);
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
body
{
  background-color: #eef2f4 !important;
}
</style>
