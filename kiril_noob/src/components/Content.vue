<template>
    <div class="main_content">
        <p>{{title}}</p>
        <p>U can render ur components</p>
    </div>
</template>

<script>
    export default{
        name: "content-page",
        components: {},
        props: {},
        data() {
            return {
                title: 'Main Content'
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
        padding: 1%;
        background-color: aquamarine;
        min-height: 600px;
    }
</style>