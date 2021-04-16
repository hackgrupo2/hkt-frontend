<template>
	<div class="container">
		<h1 class="h3">Iniciar sesión</h1>
		<form method="post" action="" id="form-login">
			<div class="form-row">
				<div class="form-group col-sm">
					<label for="email" class="sr-only">E-mail</label>
					<input class="form-control" type="email" id="email" name="email" placeholder="E-mail" required="required" />
				</div>
				<div class="form-group col-sm">
					<label for="password" class="sr-only">Contraseña</label>
					<input class="form-control" type="password" id="password" name="password" placeholder="Contraseña" required="required" />
				</div>
			</div>
			<div class="text-right col-sm">
				<SubmitButton font-awesome-class="fas fa-sign-in-alt" button-label="Ingresar"></SubmitButton>
				<GoToIndexButton></GoToIndexButton>
			</div>
		</form>
	</div>
</template>

<script>
import GoToIndexButton from "@/components/GoToIndexButton";
import SubmitButton from "@/components/SubmitButton";
export default {
  name: "LoginLayout",
  components: {SubmitButton, GoToIndexButton},
}
</script>

<style scoped>

</style>