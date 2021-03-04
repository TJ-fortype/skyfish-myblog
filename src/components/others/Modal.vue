<template>
    <!-- 模态对话框组件 -->
    <div class="wapper" v-if="isShow">
        <div class="container">
            <div class="content" v-text="msg"></div>
            {{ isShow }}
            {{ dmsg }}
            <div class="btn" @click="okBtn">确定</div>
            <div class="btn" @click="quitBtn">取消</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'modal',
    props: {
        isShow: {
            type: Boolean,
            default: false,
        },
        msg: {
            type: String,
            default: '么么哒',
        },
    },
    data() {
        return {}
    },

    methods: {
        okBtn() {
            this.$emit('okBtn')
        },
        quitBtn() {
            this.$emit('quitBtn')
        },
    },
}
</script>

<style scoped>
/* 模态背景 */
.wapper {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 1000;
}
/* 模态提示容器 */
.container {
    width: 400px;
    height: 260px;
    position: relative;
    top: 30%;
    left: 50%;
    transform: translateX(-50%);
    background: rgba(255, 255, 255, 0.6);
    border-radius: 10px;
}
/* 文字提示内容 */
.content {
    word-wrap: break-word;
    text-align: center;
    padding-top: 50px;
    font-size: 20px;
}
/* 两按钮 */
.btn {
    position: absolute;
    bottom: 15%;
    left: 20%;
    background: rgba(255, 255, 255, 0.6);
    color: black;
    border-radius: 5px;
    width: 80px;
    text-align: center;
    font-size: 18px;
    cursor: pointer;
    transition: all 0.8;
}
.btn:hover {
    color: #ff4700;
}
.btn:nth-child(3) {
    margin-left: 150px;
}
</style>
