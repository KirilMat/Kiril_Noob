<template>
	<div class="main_sidebar">
		<p>{{ title }}</p>
		<div class="sidebar_header">
			<img class="photo" src="@/assets/img/im.jpg" alt="img" />
		</div>
		<div class="sidebar_navbar">
			<ul>
				<!-- <li class="nav">
					Contacts
					<ul>
						<li>+38 066 944 74 85</li>
						<li>matushok12@gmail.com</li>
					</ul>
				</li> -->

				<!-- <li class="nav">
					Portfolio
					<ul>
						<li>Trained in Cyber Police</li>
					</ul>
				</li> -->

				<!-- <li class="nav">
					Skils
					<ul>
						<li>Python</li>
						<li>HTML</li>
						<li>CSS</li>
						<li>JavaScript</li>
						<li>GIT</li>
						<li>C++</li>
						<li>C#</li>
						<li>PHP</li>
					</ul>
				</li> -->
			</ul>
			<ul class="realNav">
                <li @click="showContent = 0" :class="{active:showContent === 0}">About</li>
				<li @click="byContacts" :class="{active:showContent === 1}">Contacts</li>
				<li @click="bySkils" :class="{active:showContent === 2}">Skils</li>
                <li @click="byPortfolio" :class="{active:showContent === 3}">Portfolio</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import store from "@/store";
	export default {
		name: "SideBar",
		components: {},
		props: {},
		data() {
			return {
				title: "SideBar",
			};
		},
		computed: {
			showContent: {
				set: (payload) => store.commit("setShowContent", payload),
				get: () => store.getters.getShowContent,
			},
		},
		methods: {
			byContacts() {
				this.showContent = 1;
                console.log(this.showContent);
			},
			bySkils() {
				this.showContent = 2;
			},
            byPortfolio() {
				this.showContent = 3;
			},
		},
		watch: {},
		mounted() {
			console.log("Hello i am alive!");
		},
	};
</script>

<style scoped>
	.main_sidebar {
		width: 20%;
		background: linear-gradient(180deg, rgba(0,212,255,1) 0%, rgba(15,15,177,1) 85%, rgba(2,0,36,1) 95%);
		height: auto;
		display: flex;
		flex-direction: column;
		padding: 1%;
	}
	.photo {
		width: 275px;
	}
	/* .nav {
		padding-bottom: 15%;
		list-style-type: none;
	} */
    .realNav{
        list-style-type: none;
		padding-inline-start: 0px;
    }
    .realNav li{
        font-size: 24px;
        line-height: 48px;
        border: solid 1px aquamarine;
        margin-bottom: 5px;
        border-radius: 15px;
        text-align: center;
        font-weight: bolder;
        cursor: pointer;
        color: white;
    }
    .realNav li:hover{
        background-color: rgb(228, 228, 0);
        color: white;
    }
    .active{
        background-color: rgb(228, 228, 0);
        color: white;
    }
</style>
