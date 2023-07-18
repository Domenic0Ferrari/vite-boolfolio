<script>
import AppNav from './AppNav.vue';
export default {
    components: {
        AppNav,
    },
}
</script>

<template>
    <header>
        <AppNav />
    </header>
</template>

<style lang="scss" scoped>
header {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 10;
}
</style>