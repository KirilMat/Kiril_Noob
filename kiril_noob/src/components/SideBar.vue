<template>
    <div class="main_sidebar">
        <p>{{title}}</p>
        <div class="sidebar_header">
            <img class="photo" src="@/assets/img/im.jpg" alt="img">
        </div>
        <div class="sidebar_navbar">
            <ul>
                <li class="nav">Contacts
                    <ul>
                        <li>+38 066 944 74 85</li>
                        <li>matushok12@gmail.com</li>
                    </ul>
                </li>

                <li class="nav">Portfolio
                    <ul>
                        <li>Trained in Cyber Police</li>
                    </ul>
                </li>

                <li class="nav">Skils
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
                </li>
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
    .photo{
        width: 275px;
    }
    .nav{
        padding-bottom: 15%;
        list-style-type: none;
    }
</style>