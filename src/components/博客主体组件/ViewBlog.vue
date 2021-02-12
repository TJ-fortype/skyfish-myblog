<template>
    <article id="preview" v-for="b in blogList" :key="b">
        <h3>博客总览</h3>
        <p>博客标题：{{b.title}}</p>
        <p>博客内容：</p>
        <p>{{b.content}}</p>
    </article>
</template>

<script>
export default {
    name:'view-blog',
    data(){
        return{
          blogList:[
            {
              id:'1',
              title:'Vue中样式绑定的几种方法',
              content:`1.以对象的形式绑定class属性<br>
					    2.以数组的形式绑定样式<br>
					    3.以对象的形式绑定内联样式`,
            }
          ]
        }
    }
}
</script>

<style>

</style>