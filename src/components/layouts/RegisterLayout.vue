<template>
	<div class="container">
		<h1 class="h3">Regístrate</h1>
		<form method="post" action="" id="form-login">
			<div class="form-group">
				<label for="name" class="sr-only">Tu nombre</label>
				<input class="form-control" type="text" id="name" name="name" placeholder="Tu nombre" required="required" />
			</div>
			<div class="form-group">
				<label for="email" class="sr-only">E-mail</label>
				<input class="form-control" type="email" id="email" name="email" placeholder="E-mail" required="required" />
			</div>
			<div class="form-group">
				<label for="password" class="sr-only">Contraseña</label>
				<input class="form-control" type="password" id="password" name="password" placeholder="Contraseña" required="required" />
			</div>
			<div class="form-group">
				<label for="password2" class="sr-only">Repite tu contraseña</label>
				<input class="form-control" type="password" id="password2" name="password2" placeholder="Repite tu contraseña" required="required" />
			</div>
			<div class="form-group">
				Selecciona tus categorías:
				<div class="form-check">
					<input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
					<label class="form-check-label" for="defaultCheck1"> Desarrollo web</label>
				</div>
				<div class="form-check">
					<input class="form-check-input" type="checkbox" value="" id="defaultCheck2">
					<label class="form-check-label" for="defaultCheck2"> Bases de datos</label>
				</div>
				<div class="form-check">
					<input class="form-check-input" type="checkbox" value="" id="defaultCheck3">
					<label class="form-check-label" for="defaultCheck3"> Ofimática</label>
				</div>
			</div>
			<div class="text-right">
				<router-link class="btn btn-success mr-1" to="/courses">
					<span class="fas fa-check"></span> Registrarte
				</router-link>
				<GoToIndexButton></GoToIndexButton>
			</div>
		</form>
	</div>
</template>

<script>
import GoToIndexButton from "@/components/GoToIndexButton";
import SubmitButton from "@/components/SubmitButton";
export default {
  name: "RegisterLayout",
  components: {SubmitButton, GoToIndexButton},
}
</script>

<style scoped>

</style>