<template>
    <div id="view-blogs">
        <h1>博客总览</h1>
        <div class="single-blog" v-for="blog in blogList" :key="blog">
            <h2 v-color>{{ blog.title }}</h2>
            <article>
                {{ blog.body }}
            </article>
        </div>
    </div>
</template>

<script>
export default {
    name: 'view-blog',
    data() {
        return {
            blogList: [],
        }
    },
}
</script>

<style>
#view-blogs {
    max-width: 800px;
    margin: 0 auto;
}

.single-blog {
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background: #eee;
}
</style>
