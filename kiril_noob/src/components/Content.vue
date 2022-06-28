<template>
	<div class="main_content">
		<!-- <p>{{ title }}</p> -->
        <TransitionGroup name="bounce">
		<About v-if="showContent === 0" />
		<Contacts v-if="showContent === 1"/>
		<Skils v-if="showContent === 2"/>
        <Portfolio v-if="showContent ===3"/>
        </TransitionGroup>
	</div>
</template>

<script>
	import About from "./itemOfContent/About.vue";
	import Contacts from "./itemOfContent/Contacts.vue";
	import Skils from "./itemOfContent/Skils.vue";
    import Portfolio from "./itemOfContent/Portfolio.vue";

	import store from "@/store";
	export default {
		name: "content-page",
		components: {
			About,
			Contacts,
			Skils,
            Portfolio
		},
		props: {},
		data() {
			return {
				title: "About Me",
			};
		},
		computed: {
			showContent: {
				set: (payload) => store.commit("setShowContent", payload),
				get: () => store.getters.getShowContent,
			},
		},
		methods: {},
		watch: {},
		mounted() {
			console.log("Hello i am alive!");
		},
	};
</script>

<style scoped>
	.main_content {
		width: 80%;
		padding: 3% 5%;
		background-color: rgb(219, 219, 219);
		min-height: 600px;
	}
	.about_me {
		width: 40%;
	}

.bounce-enter-active {
  animation: bounce-in 0.5s;
}
/* .bounce-leave-active {
  animation: bounce-in 0.5s reverse;
} */
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}

</style>
