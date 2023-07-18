import { reactive } from 'vue';

export const store = reactive({
    baseUrl: 'http://localhost:8000/',
    getImageUrl(image) {
        return image ? 'http://localhost:8000/' + 'storage/' : 'http://localhost:8000/' + 'storage/default.jpg';
    },
})