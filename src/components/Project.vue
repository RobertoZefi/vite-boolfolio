<template>
    <div class="container">
        <ProjectCard  v-for="project in projects" :project="project"/>
    </div>

    <div class="container">
        <div class="pages" v-for="n in lastPage" @click="fetchProjects(n)">{{ n }}</div>
    </div>
    
</template>

<script>
import axios from 'axios';
import ProjectCard from './ProjectCard.vue';

export default{
    components:{
        ProjectCard,
    },

    data(){
        return{
            projects: [],
            currentPage: 0,
            lastPage: 0,
        }
    },

    methods: {
        fetchProjects(page){
            axios.get('http://127.0.0.1:8000/api/projects',{
                params:{
                    page:page
                }
            })
            .then(res => {
                console.log(res)
                this.projects = res.data.results.data
                this.currentPage = res.data.results.current_page
                this.lastPage = res.data.results.last_page
            })
        }
    },

    mounted(){
        this.fetchProjects()
    }

    
}
</script>

<style>
    .container{
        display: flex;
        flex-wrap: wrap;
        gap: 30px;
        max-width: 1200px;
        margin: 0 auto;
        justify-content: center;
    }

    .pages{
        border: 1px solid black;
        border-radius: 999px;
        width: 30px;
        aspect-ratio: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 20px;
        cursor: pointer;
    }
</style>