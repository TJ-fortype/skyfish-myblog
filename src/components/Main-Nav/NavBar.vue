<template>
    <div class="navBox">
        <div class="navItem" v-for="nav in navList" :key="nav">
            {{ nav.navName }}
        </div>
    </div>
</template>

<script>
import SearchBar from '../Main-Search/SearchBar.vue'
export default {
    name: 'NavBar',
    components: {
        SearchBar,
    },
    data() {
        return {
            navList: [
                {
                    navName: '首页',
                    navLink: '/',
                },
                {
                    navName: '管理博客',
                    navLink: '/blog',
                },
            ],
        }
    },
}
</script>

<style scoped>
.navBox {
    display: flex;
}
.navItem {
    flex: 1;
}
</style>
