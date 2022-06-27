<template>
	<div id="app" class="main_of_main">
		<SideBar/>
        <Content/>
	</div>
</template>

<script>
	import SideBar from "./components/SideBar.vue";
	import Content from "./components/Content.vue";

	export default {
		name: "App",
		components: {
			SideBar,
			Content,
		},
	};
</script>

<style>
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
	}
    .main_of_main{
        width: 100%;
        max-width: 1440px;
        margin: 0 auto;
        border: solid 1px gray;
        padding: 0 5%;

        display: flex;
        flex-direction: row;
    }
</style>
