<script>
import ProjectList from './components/ProjectList.vue';
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
export default {

    components: {
        AppHeader,
        ProjectList,
        AppFooter,
    }
}
</script>

<template>
    <AppHeader />
    <ProjectList />
    <AppFooter />
</template>

<style lang="scss">
@import "bootstrap/scss/bootstrap";
</style>
