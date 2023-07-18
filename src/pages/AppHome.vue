<script>
import axios from 'axios';
import { store } from '../store';

export default {
    data() {
        return {
            arrProjects: [],
            store
        }
    },
    created() {
        axios.get(this.store.baseUrl + 'api/projects/random').then(response => {
            console.log(response.data.results);
            this.arrProjects = response.data.results;
        })
    }
}
</script>

<template>
    <h1 class="text-center">Homepage</h1>
    <div class="row row-cols-3 g-0">
        <div class="col" v-for="project in arrProjects" :key="project.id">
            <router-link class="d-block h-100 w-100" :to="{ name: 'projects.show', params: { slug: project.slug } }">
                <img :src="store.getImageUrl(project.image)" :alt="project.title">
            </router-link>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>