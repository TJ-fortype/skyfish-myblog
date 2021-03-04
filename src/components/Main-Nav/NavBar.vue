<template>
    <div :class="navBoxs">
        <div class="logo">青山不改·绿水长流</div>
        <div class="navItems">
            <div class="navItem" v-for="nav in navList" :key="nav">
                <router-link :to="nav.navLink">{{ nav.navName }}</router-link>
            </div>
        </div>
        <SearchBar class="search-bar"></SearchBar>
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
            navBoxs: { navBox: true, sticky: false },
        }
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll)
    },
    methods: {
        handleScroll() {
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
            if (scrollTop > 50) {
                this.navBoxs.sticky = true
            } else {
                this.navBoxs.sticky = false
            }
        },
    },
    computed: {},
}
</script>

<style lang="css" scoped>
/* 导航大盒子 */
.navBox {
    position: fixed;
    background: rgba(0, 0, 0, 0.4);
    width: 100%;
    top: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: 0.6s;
    padding: 15px 100px;
    z-index: 100;
}
/* 导航LOGO */
.navBox .logo {
    position: relative;
    font-weight: 700;
    font-size: 2em;
    font-family: STXingkai;
    color: #ccccff;
    transition: 0.6s;
}
/* 导航元素盒子 */
.navBox .navItems {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
}
/* 导航元素 */
.navBox .navItems .navItem {
    position: relative;
    padding-left: 10px;
    font-size: 16px;
}
.navBox .navItems .navItem a {
    position: relative;
    margin: 0 15px;
    letter-spacing: 2px;
    font-weight: 500px;
    transition: 0.6s;
}
/* 滚动事件监听固定导航栏 */
.navBox.sticky {
    padding: 5px 100px;
    background: rgba(0, 0, 0, 0.8);
}
.navBox.sticky .logo,
.navBox.sticky .navItems .navItem a {
    color: #fff;
}
.navBox.sticky .navItems .navItem a:hover {
    color: #ff4700;
}
</style>
