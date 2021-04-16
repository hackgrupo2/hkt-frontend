<template>
	<div class="container">
		<form method="post" action="" id="form-upload-course">
			<div class="form-group">
				<label for="name">Título</label>
				<input class="form-control" type="text" name="name" id="name" required="required" />
			</div>
			<div class="form-group">
				<label for="description">Descripción</label>
				<input class="form-control" type="text" name="description" id="description" required="required" />
			</div>
			<div class="form-group">
				<label for="category">Categoría</label>
				<select class="form-control" name="category" id="category" required="required">
					<option value="">Selecciona una categoría &rarr;</option>
					<option value="1">Niños</option>
					<option value="2">Escolar</option>
					<option value="3">Financiero</option>
				</select>
			</div>
			<div class="form-group">
				<label for="video">URL video</label>
				<input class="form-control" type="url" name="video" id="video" />
			</div>
			<div class="form-group">
				<label for="tags">Etiquetas</label>
				<input class="form-control" type="text" name="tags" id="tags" />
			</div>
			<div class="text-right">
				<SubmitButton font-awesome-class="fas fa-upload" button-label="Publicar"></SubmitButton>
				<GoToIndexButton></GoToIndexButton>
			</div>
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