<template>
    <div class="card">
        <h3>{{ project.title }}</h3>
        <h4>{{ project.client }}</h4>
        <p>{{ project.description }}</p>
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
</style>