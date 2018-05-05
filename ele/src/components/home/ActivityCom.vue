<template>
<swiper>
	<swiper-item v-for="(actItem, i) in activityList" :key="i">
		<div class="activity">
			<img  :src="actItem"/>
		</div>
	</swiper-item>
</swiper>
</template>

<script>
export default {
	name: 'activity-com',
	data(){
		return {
			activityList: [
				'http://fuss10.elemecdn.com/b/0a/5b1ab540506687c7b93e148704db1jpeg.jpeg?imageMogr/format/webp/',
				'http://fuss10.elemecdn.com/0/e7/64044fb6df771e9cb42196ae3eeeejpeg.jpeg?imageMogr/format/webp/'
			]
		}
	}
}
</script>