<template>
    <article id="add-blog">
        <h2>添加博客</h2>
        <form>
            <label>博客标题</label>
            <input type="text" v-model="blog.title" required />

            <label>博客内容</label>
            <textarea v-model="blog.content"></textarea>

            <!-- 博客分类 categories数组作用是记录隶属于那个分类 -->
            <div id="check-boxes" v-for="check in checkList" :key="check">
                <label>{{ check.name }}</label>
                <input type="checkbox" :value="check.value" v-model="blog.categories" />
            </div>
            <button @click.prevent="post">添加博客</button>
        </form>
        <hr />
        <section id="preview">
            <h3>博客预览</h3>
            <p>博客标题：{{ blog.title }}</p>
            <p>博客内容：</p>
            <p>{{ blog.content }}</p>
            <p>博客分类：</p>
            <ul>
                <li v-for="category in blog.categories" :key="category">
                    {{ category }}
                </li>
            </ul>
        </section>
    </article>
</template>

<script>
import axios from 'axios'
export default {
    name: 'add-blog',
    components: {},
    data() {
        return {
            blog: {
                title: '',
                content: '',
                categories: [],
            },
            checkList: [
                { name: 'Vue.js', value: 'Vue.js' },
                { name: 'vscode', value: 'vscode' },
            ],
        }
    },
    methods: {
        post: function() {
            axios
                .post('http://jsonplaceholder.typicode.com/posts', {
                    title: this.blog.title,
                    body: this.blog.content,
                    userId: 1,
                })
                .then(function(data) {
                    console.log(data)
                })
        },
    },
}
</script>

<style scoped>
#add-blog * {
    box-sizing: border-box;
}
#add-blog {
    margin: 20px auto;
    max-width: 600px;
    padding: 20px;
}

label {
    display: block;
    margin: 20px 0 10px;
}
input[type='text'],
textarea,
select {
    display: block;
    width: 100%;
    padding: 8px;
}

textarea {
    height: 250px;
}

#check-boxes label {
    display: inline-block;
    margin-top: 0;
}

#check-boxes input {
    display: inline-block;
}

button {
    display: block;
    margin: 20px auto;
    background: #ccccff;
    color: #fff;
    border: 0;
    padding: 14px;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
}

#preview {
    padding: 10px 20px;
    border: 1px dotted #ccc;
    margin: 30px 0;
}

h3 {
    margin-top: 10px;
}
</style>
