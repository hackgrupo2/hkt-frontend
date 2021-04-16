<template>
	<div class="container">
		<form method="post" action="" id="form-upload-course">
			<div class="form-group">
				<label for="name">Título</label>
				<input class="form-control" type="text" name="name" id="name" />
			</div>
			<div class="form-group">
				<label for="description">Descripción</label>
				<input class="form-control" type="text" name="description" id="description" />
			</div>
			<div class="form-group">
				<label for="category">Categoría</label>
				<select class="form-control" name="category" id="category">
					<option value="">Selecciona una categoría &rarr;</option>
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
				<button class="btn btn-success" type="submit">
					<span class="fas fa-check"></span> Publicar
				</button>
				<GoToIndexButton></GoToIndexButton>
			</div>
		</form>
	</div>
</template>

<script>
import GoToIndexButton from "@/components/GoToIndexButton";
export default {
  name: "UploadCourseLayout",
  components: {GoToIndexButton}
}
</script>

<style scoped>

</style>