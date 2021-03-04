<template>
    <div id="view-blogs">
        <h1>博客总览</h1>
        <div class="single-blog" v-for="blog in blogList" :key="blog" @click="click(blog)">
            <h2>{{ blog.msgTitle }}</h2>
            <article>
                <!-- 文章内容 -->
                <p :class="[{ text: true }, blog.openBox]">
                    {{ blog.msgContent }}
                </p>
                <!-- 文章标签 -->
                <p class="cate">
                    {{ blog.msgCate }}
                </p>
                <!-- 文章发布时间 -->
                <p class="show-time">
                    {{ blog.sendTime }}
                </p>
            </article>
            <!-- 删除按钮 -->
            <button class="deBtn" @click.stop="delBlog(blog)">删除博客</button>
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
    methods: {
        click(index) {
            // 发射博客点击事件
            this.$emit('blogClick', index)
            if (index.openBox === '') {
                index.openBox = 'openBox'
            } else if (index.openBox === 'openBox') {
                index.openBox = ''
            }
        },
        delBlog(index) {
            this.$emit('delBlog', index)
        },
    },
    mounted() {
        let url = 'http://127.0.0.1:5050/index/viewblog'
        fetch(url)
            .then((res) => {
                // 读取响应消息主体数据，转化为JSON格式对象
                return res.json()
            })
            .then((data) => {
                // data是消息主体转化为JSON数据后的对象
                this.blogList = data
            })
            .catch(() => {
                console.log('客户端请求数据失败')
            })
    },
}
</script>

<style scope>
#view-blogs {
    position: relative;
    top: 150px;
    left: 50%;
    transform: translateX(-50%);
    max-width: 800px;
}
.single-blog {
    position: relative;
    padding: 20px;
    margin: 20px auto;
    border-radius: 20px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    background: rgba(255, 255, 255, 0.7);
}
.single-blog h2 {
    margin: 15px auto;
    line-height: 16px;
}
/* 内容 */
.text {
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-all;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
}
.openBox {
    min-height: 300px;
    transition: all 2s;
}
/* 时间 */
.show-time {
    position: absolute;
    bottom: 0;
    right: 5%;
}
/* 标签 */
.cate {
    position: absolute;
    top: 0;
    right: 5%;
}
/* 删除按钮 */
.deBtn {
    background: rgba(255, 255, 255, 0.6);
    border: 1px solid #000;
    border-radius: 5px;
    width: 90px;
    height: 30px;
    cursor: pointer;
    box-shadow: 5px 6px 12px 0 rgba(0, 0, 0, 0.1);
}
</style>
