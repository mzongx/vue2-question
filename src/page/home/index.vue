<template>
	<div class="home_container">
		<itemcontainer father-component="home"></itemcontainer>
	</div>
</template>
<script>
	import itemcontainer from '../../components/itemcontainer'
	import {
		mapActions
	} from 'vuex'
	export default {
		name: 'home',
		components: {
			itemcontainer
		},
		computed: {
			...mapActions['initializeData']
		},
		created() {
			this.$store.dispatch('initializeData');//初始化数据
		}
	}
</script>
<style>

</style>