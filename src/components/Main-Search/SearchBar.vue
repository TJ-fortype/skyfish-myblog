<template>
    <div class="searchBox">
        <input class="searchTxt" type="text" placeholder="Search Blogs..." />
        <a class="seachBtn" href="#">
            <i class="fa fa-search"></i>
        </a>
    </div>
</template>

<script>
export default {
    components: {},
}
</script>

<style>
.searchBox {
    height: 40px;
    border-radius: 40px;
    background: #ccccff;
}

.searchBox:hover > .searchTxt {
    width: 240px;
    padding: 0 6px;
}

.searchBox:hover > .searchBtn {
    background: #fff;
}

.seachBtn {
    color: #ff4700;
    float: right;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: #ccccff;
    display: flex;
    justify-content: center;
    align-items: center;
}

.searchTxt {
    border: none;
    background: none;
    outline: none;
    float: left;
    color: #000;
    font-size: 16px;
    transition: 0.3s;
    line-height: 40px;
    width: 0px;
}
</style>
