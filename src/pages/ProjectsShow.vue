<script>
import axios from 'axios';
import { store } from '../store';

export default {
    data() {
        return {
            project: null,
            store
        }
    },
    created() {
        axios.get(this.store.baseUrl + 'api/projects/' + this.$route.params.slug).then(response => {
            if (response.data.success) {
                console.log(response);
                this.project = response.data.results;
            } else {
                this.$router.push({
                    name: 'page404'
                });
            }
        });
    },
}
</script>

<template>
    <h2 class="text-center">Projects:</h2>
    <div class="container" v-if="project">
        <h1 class="text-center">{{ project.title }}</h1>
        <img :src="this.store.getImageUrl(project.image)" :alt="project.title">
        <p>{{ project.description }}</p>
    </div>
</template>
    
<style lang="scss" scoped></style>