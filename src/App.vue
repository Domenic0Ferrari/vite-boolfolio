<script>
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
export default {

    components: {
        AppHeader,
        AppFooter,
    }
}
</script>

<template>
    <AppHeader />
    <div class="container my-main">
        <h1 class="text-center">BoolFolio</h1>
        <router-view></router-view>
    </div>
    <AppFooter />
</template>

<style lang="scss">
.my-main {
    margin-top: 80px
}

@import "bootstrap/scss/bootstrap";
</style>
