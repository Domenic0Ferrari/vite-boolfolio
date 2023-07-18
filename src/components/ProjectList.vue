<script>
import axios from 'axios';
import ProjectCard from './ProjectCard.vue';
import { store } from '../store';

export default {
    data() {
        return {
            arrProjects: [],
            currentPage: 1,
            nPages: 0,
            store,
        };
    },
    components: {
        ProjectCard
    },
    methods: {
        changePage(page) {
            this.currentPage = page;
            this.getProjects();
        },
        getProjects() {
            axios.get(this.store.baseUrl + 'api/projects', {
                params: {
                    page: this.currentPage,
                    q: new URLSearchParams(window.location.search).get('q'),
                },
            }).then(response => {
                this.arrProjects = response.data.results.data;
                this.nPages = response.data.results.last_page;
            });
        },
    },
    created() {
        this.getProjects();
    },
    watch: {
        currentPage() {
            this.getProjects();
        },
    }
}
</script>

<template>
    <h2 class="text-center">Lista dei miei Progetti</h2>
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4 mb-5">
        <div class="col" v-for="project in arrProjects" :key="project.id">
            <ProjectCard :objProject="project" />
        </div>
    </div>

    <nav>
        <ul class="pagination">
            <li class="page-item" :class="{ disabled: currentPage == 1 }">
                <a class="page-link" href="#" @click="currentPage--">Previous</a>
            </li>
            <li v-for="page in nPages" :key="page" class="page-item" :class="{ active: page == currentPage }">
                <span class="page-link" @click="currentPage = page">{{ page }}</span>
            </li>
            <li class="page-item" :class="{ disabled: currentPage == nPages }">
                <a class="page-link" href="#" @click="currentPage++">Next</a>
            </li>
        </ul>
    </nav>
</template>

<style lang="scss" scoped></style>