<template>
	<div class="container">
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
				<button class="btn btn-success mr-1" type="submit" form="form-login">
					<span class="fas fa-sign-in-alt"></span> Ingresar
				</button>
				<GoToIndexButton></GoToIndexButton>
			</div>
		</form>
	</div>
</template>

<script>
import GoToIndexButton from "@/components/GoToIndexButton";
export default {
  name: "LoginLayout",
  components: {GoToIndexButton}
}
</script>

<style scoped>

</style>