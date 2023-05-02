<template>
    <div class="card">
        <h3>{{ project.title }}</h3>
        <h4>{{ project.client }}</h4>
        <p>{{ project.description }}</p>
            <ul v-if="project.technologies">
                <li v-for="technologies in project.technologies">{{ technologies.name }}</li>
            </ul>
        <p v-if="project.type">{{ project.type.type }} </p>
    </div>
</template>

<script>

export default{
    props:{
        project: {
            type: Object,
            required: true,
        }
    }
}

</script>

<style>
    .card{
        flex-basis: 30%;
        text-align: center;
        border: 1px solid black;
        padding: 5px;
    }

    ul{
        list-style: none;
        padding: 0;
    }

</style>