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
            <button @click.prevent="doSendMsg">添加博客</button>
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
        doSendMsg() {
            let url = 'http://127.0.0.1:5050/add-blog'
            let body = `title=${this.blog.title}&content=${this.blog.content}&categories=${this.blog.categories}` //请求的主体
            fetch(url, {
                method: 'POST',
                body,
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            })
                .then((res) => {
                    return res.json()
                })
                .then((data) => {
                    alert('添加成功！新博客在系统中的编号为：' + data.id)
                })
                .catch((e) => {
                    console.log(e)
                })
        },
    },
}
</script>

<style scoped>
#add-blog {
    margin: 20px auto;
    max-width: 600px;
    padding: 20px;
    background-color: rgba(255, 255, 255, 0.3);
}

label {
    display: block;
    margin: 20px 0 10px;
}
input[type='text'],
textarea,
select {
    border: 2px solid #ccccff;
    display: block;
    width: 100%;
    padding: 8px;
}

textarea {
    height: 250px;
}
#check-boxes {
    display: inline-block;
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
    outline: none;
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
