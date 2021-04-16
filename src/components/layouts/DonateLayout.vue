<template>
	<div class="container-fluid">
		<h1 class="h3">Apoyar este curso</h1>
		<p class="text-muted">Con tu donación podrás apoyar a que más cursos como <strong>PHP</strong> pueden estar disponibles para más personas, y animas al profesor para elaborar más contenido de calidad.</p>
		<hr />
		<form method="post" action="" id="form-donate">
			<div class="form-group">
				<label for="amount">Tu donativo</label>
				<select class="form-control" id="amount" name="amount">
					<option value="">Selecciona un monto &rarr;</option>
					<option value="5">Donar $5.00</option>
					<option value="10">Donar $10.00</option>
					<option value="15">Donar $15.00</option>
					<option value="25">Donar $25.00</option>
				</select>
			</div>
			<div class="text-right">
				<button class="btn btn-success mr-1" type="submit">
					<span class="fas fa-thumbs-up"></span> Enviar donación
				</button>
				<router-link class="btn btn-secondary" to="courses/1">
					<span class="fas fa-arrow-left"></span> Regresar
				</router-link>
			</div>
		</form>
	</div>
</template>

<script>
export default {
  name: "DonateLayout"
}
</script>

<style scoped>

</style>