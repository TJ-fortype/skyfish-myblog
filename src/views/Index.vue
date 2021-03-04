<template>
    <NavBar></NavBar>
    <!-- 浏览博客 单击展开和删除博客事件 -->
    <ViewBlog @blogClick="vbClick" @delBlog="delBlog"></ViewBlog>
    <MusicBox></MusicBox>
    <!-- 模态组件 props：isShow msg // emit确定按钮 取消按钮-->
    <Modal :isShow="this.showModal" :msg="this.modalMsg" @okBtn="okBtn" @quitBtn="quitBtn"></Modal>
</template>

<script>
import NavBar from '../components/Main-Nav/NavBar.vue'
import ViewBlog from '../components/Main-Blog/ViewBlog.vue'
import MusicBox from '../components/others/MusicBox.vue'
import Modal from '../components/others/Modal.vue'
export default {
    name: 'Index',
    components: {
        NavBar,
        ViewBlog,
        MusicBox,
        Modal,
    },
    data() {
        return {
            modalMsg: '',
            showModal: false,
            blogJson: {},
        }
    },
    methods: {
        vbClick(blog) {
            console.log('vbClick', blog)
        },
        delBlog(index) {
            this.showModal = true
            this.modalMsg = '真的要删除这篇博客吗?'
            this.blogJson = index
        },
        okBtn() {
            let url = 'http://127.0.0.1:5050/del-blog'
            let body = `id=${this.blogJson.cid}` //请求的主体
            fetch(url, {
                method: 'POST',
                body,
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            })
                .then((res) => {
                    return res.json()
                })
                .then((data) => {
                    alert('删除成功')
                })
                .catch((e) => {
                    console.log(e)
                })
            this.showModal = false
        },
        quitBtn() {
            this.showModal = false
        },
    },
}
</script>

<style lang="css" scope>
.test {
    width: 20px;
    height: 2000px;
    background: #fff;
}
</style>
