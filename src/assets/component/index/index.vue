<template>
  <div class="container_index">
    <my-headers title-size="myApp" :new-title="newTitle" :postFontSize="postFontSize" @testEvt="headerEvt"></my-headers>
    <my-navList></my-navList>

    <div class="wh">
      <transition>
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </transition>
    </div>
  </div>
</template>

<script>
  import headers from './../common/header';
  import navList from './../common/nav';
  export default {
    name: 'index',
    data() {
      return {
        newTitle: '搜索',
        postFontSize: 0
      }
    },
    components: {
      'my-headers': headers,
      'my-navList': navList
    },
    methods: {
      headerEvt() {
        let that = this;
        this.postFontSize += 1;
        this.$store.commit('login',{a:that.postFontSize,b:4});
      }
    }
  }
</script>
<style scoped>
  .container_index {
    width: 100%;
    height: 100%;
    padding: 0.54rem 0 0 180px;
  }
</style>
