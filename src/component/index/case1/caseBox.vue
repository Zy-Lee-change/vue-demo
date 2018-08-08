<template>
  <div class="container w">
    <div class="caseDetails w pr">
      <img src="./../../../assets/images/index/bg.png" alt="" class="w">
      <ul class="clear pa solution">
        <li class="fl">
          数据信息孤立，<span>多渠道数据无法统筹与合理协同！</span>
        </li>
        <li class="fl">
          数据可视化体验  <span>形式单一，效果差，体验差 ?</span>
        </li>
        <li class="fl">
          <span>缺乏统一、实时的数据分析</span>  展示平台。
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'caseBox',
    data() {
      return {

      }
    },
    components: {

    },
    methods: {

    }
  }
</script>
<style lang="scss" scoped>
  .solution {
    color: #333;
    li {
      height: 80px;
      line-height: 80px;
      padding-left: 46px;
      /*background: url("../../../images/index/");*/
    }
  }
</style>
