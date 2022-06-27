<template>
    <div class="main_sidebar">
        <p>{{title}}</p>
        <div class="sidebar_header">
            <img src="" alt="LOGO">
        </div>
        <div class="sidebar_navbar">
            <ul class="nav">
                <li>Portfolio</li>
                <li>Skils</li>
                <li>Contacts</li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default{
        name: "SideBar",
        components: {},
        props: {},
        data() {
            return {
                title: 'SideBar'
            }
        },
        computed: {},
        methods: {},
        watch: {},
        mounted() {
            console.log('Hello i am alive!')
        }
    }
</script>

<style scoped>
    .main_sidebar{
        width: 20%;
        background-color: pink;
        height: auto;
        display: flex;
        flex-direction: column;
        padding: 1%;
    }
</style>