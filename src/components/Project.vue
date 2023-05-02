<template>
    <div class="container">
        <ProjectCard  v-for="project in projects" :project="project"/>
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
        }
    },

    methods: {
        fetchProjects(){
            axios.get('http://127.0.0.1:8000/api/projects')
            .then(res => {
                console.log(res)
                this.projects = res.data.results
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
    }
</style>