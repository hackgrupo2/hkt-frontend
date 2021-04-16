<template>
	<div class="container">
		<h1 class="h3 text-center">Publica tu curso</h1>
		<form method="post" action="" id="form-upload-course">
			<div class="form-group">
				<label for="name">Título</label>
				<input class="form-control" type="text" name="name" id="name" required="required" />
			</div>
			<div class="form-group">
				<label for="description">Resumen</label>
				<input class="form-control" type="text" name="description" id="description" required="required" />
			</div>
			<div class="form-group">
				<label for="description">Contenido</label>
				<textarea class="form-control"></textarea>
				<small class="form-text text-muted">Máximo 1000 caracteres</small>
			</div>
			<div class="form-group">
				<label for="category">Categoría</label>
				<select class="form-control" name="category" id="category" required="required">
					<option value="">Selecciona una categoría &rarr;</option>
					<option value="1">Desarrollo web</option>
					<option value="2">Programación</option>
					<option value="3">Ofimática</option>
				</select>
			</div>
			<div class="form-group">
				<label for="video">URL video</label>
				<input class="form-control" type="url" name="video" id="video" />
				<small class="form-text text-muted">Ejemplo: https://www.youtube.com/watch?v=S-d4xrJA_Zs</small>
			</div>
			<div class="form-group">
				<label for="tags">Etiquetas</label>
				<input class="form-control" type="text" name="tags" id="tags" />
			</div>
			<div class="form-check">
				<input class="form-check-input" type="checkbox" value="" id="defaultCheck3">
				<label class="form-check-label" for="defaultCheck3"> Monetizar este curso</label>
			</div><br />
			<p class="text-right">
				<SubmitButton font-awesome-class="fas fa-upload" button-label="Publicar"></SubmitButton>
				<GoToIndexButton></GoToIndexButton>
			</p>
		</form>
	</div>
</template>

<script>
import GoToIndexButton from "@/components/GoToIndexButton";
import SubmitButton from "@/components/SubmitButton";
export default {
  name: "UploadCourseLayout",
  components: {SubmitButton, GoToIndexButton}
}
</script>

<style scoped>

</style>