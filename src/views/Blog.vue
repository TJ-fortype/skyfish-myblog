<template>
    <AddBlog></AddBlog>
</template>

<script>
import AddBlog from '../components/Main-Blog/AddBlog.vue'
import ViewBlog from '../components/Main-Blog/ViewBlog.vue'
export default {
    name: 'Blog',
    components: {
        AddBlog,
        ViewBlog,
    },
}
</script>

<style scoped></style>
