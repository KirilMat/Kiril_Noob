<template>
    <div class="main_content">
        <p>{{title}}</p>
        <p><b>Kiril Matushok</b></p>
        <p class="about_me"><span>I study at the Kyiv National University of Trade and Economics in the 3rd year of the Faculty of Information Technology, majoring in Computer Science. Prior to that, he studied at the College of the Navy and River Fleet, majoring in Software Engineering.</span></p>
    </div>
</template>

<script>
    export default{
        name: "content-page",
        components: {},
        props: {},
        data() {
            return {
                title: 'About Me'
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
    .main_content{
        width: 80%;
        padding: 3% 5%;
        background-color: aquamarine;
        min-height: 600px;
    }
    .about_me{
        width: 40%;
    }
</style>