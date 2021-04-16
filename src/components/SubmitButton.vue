<template>
	<button class="btn btn-success mr-1" type="submit">
		<span :class="fontAwesomeClass"></span> {{ buttonLabel }}
	</button>
</template>

<script>
export default {
  name: "SubmitButton",
  props: ['fontAwesomeClass', 'buttonLabel']
}
</script>

<style scoped>

</style>