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
    <div class="my-container">
        <div class="row row-cols-3 g-0 h-100">
            <div class="col" v-for="project in arrProjects" :key="project.id">
                <router-link class="d-block h-100 w-100" :to="{ name: 'projects.show', params: { slug: project.slug } }">
                    <img class="w-100 h-100" :src="store.getImageUrl(project.image)" :alt="project.title">
                </router-link>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.my-container {
    height: calc(100vh - 150px);
    margin-bottom: 150px;

    .col {
        height: calc(100% / 3);
    }

    img {
        object-fit: cover;
    }
}
</style>