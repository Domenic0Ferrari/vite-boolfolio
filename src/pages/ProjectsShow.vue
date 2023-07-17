<script>
import axios from 'axios';
import { store } from '../store';

export default {
    data() {
        return {
            store
        }
    },
    created() {
        // richiesta axios per i dati del project
        axios.get(this.store.baseUrl + 'api/projects/' + this.$route.params.slug).then(response => console.log(response));
        // $route -> variabile creata dalla libreria che abbiamo installato
    }
}
</script>

<template>
    <h2 class="text-center">Projects:</h2>
</template>
    
<style lang="scss" scoped></style>