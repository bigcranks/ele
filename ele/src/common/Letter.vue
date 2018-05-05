<template>
<span class="letter" :style="{background: '#'+color}">
	{{title}}
</span>
</template>

<script>
export default{
	name: 'app-letter',
	props: {
		color: String,
		title: String
	}
}
</script>

<style scoped>
.letter{
	color: #fff;
	font-size: .12rem;
	border-radius: 0.02rem;
}
</style>