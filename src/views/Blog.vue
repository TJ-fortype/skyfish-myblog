<template>
    <NavBar></NavBar>
    <AddBlog class="add-blog"></AddBlog>
</template>

<script>
import AddBlog from '../components/Main-Blog/AddBlog.vue'
import NavBar from '../components/Main-Nav/NavBar.vue'
export default {
    name: 'Blog',
    components: {
        AddBlog,
        NavBar,
    },
}
</script>

<style scoped>
.add-blog {
    position: relative;
    top: 120px;
    transition: all 0.3;
}
</style>
