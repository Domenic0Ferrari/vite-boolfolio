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
        <router-view></router-view>
    </div>
    <AppFooter />
</template>

<style lang="scss">
.my-main {
    margin: 80px 0;
}

@import "bootstrap/scss/bootstrap";
</style>
