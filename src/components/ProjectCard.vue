<script>
import { store } from '../store';
export default {
    data() {
        return {
            store,
        };
    },
    props: [
        'objProject'
    ],
    methods: {
        getImageUrl(image) {
            return image
                ? this.store.baseUrl + 'storage/' + image
                : this.store.baseUrl + 'storage/default.jpg';
        },
    }
}
</script>

<template>
    <div class="card h-100">
        <img :src="getImageUrl(objProject.image)" class="card-img-top" :alt="objProject.title">
        <div class="card-body d-flex flex-column align-items-center g-3 justify-content-end">
            <h5 class="card-title">{{ objProject.title }}</h5>
            <h6>{{ objProject.author }}</h6>
            <p class="card-text">text</p>
            <router-link :to="{ name: 'projects.show', params: { slug: objProject.slug } }" class="btn btn-primary">
                Show
            </router-link>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>