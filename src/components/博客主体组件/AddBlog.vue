<template>
  <article id="add-blog">
    <h2>添加博客</h2>
    <form>
      <label>博客标题</label>
      <input type="text" v-model="blog.title" required />

      <label>博客内容</label>
      <textarea v-model="blog.content"></textarea>

      <div id="check-boxes" v-for="check in checkList" :key="check">
        <label>{{check.name}}</label>
        <input type="checkbox" :value="check.value" v-model="blog.categories">
      </div>

    </form>
    <hr>
    <section id="preview">
        <h3>博客总览</h3>
        <p>博客标题：{{blog.title}}</p>
        <p>博客内容：</p>
        <p>{{blog.content}}</p>
    </section>
  </article>
</template>

<script>


export default {
  name: "add-blog",
  components:{

  },
  data() {
    return {
      blog: {
        title: "",
        content: "",
        categories:[]
      },
      checkList: [
        {name:'Vue.js',value:'Vue.js'},
        {name:'vscode',value:'vscode'},
      ],
    };
  },
};
</script>

<style>

</style>
