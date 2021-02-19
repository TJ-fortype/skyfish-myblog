<template>
    <AddBlog></AddBlog>
</template>

<script>
import AddBlog from '../components/Main-Blog/AddBlog.vue'
import ViewBlog from '../components/Main-Blog/ViewBlog.vue'

export default {
    name: 'Index',
    components: {
        AddBlog,
        ViewBlog,
    },
    data() {
        return {}
    },
    computed: {},
    methods: {},
}
</script>
