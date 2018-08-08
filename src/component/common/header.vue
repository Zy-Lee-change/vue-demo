<template>
  <div class="wh header">
    <div class="logo fl fs16">{{ titleSize }}</div>

    <div class="avatarWrap fr pr h cursor">
      <div class="avatar fl">
        <img src="/static/images/common/avatar.png" alt="" class="w">
      </div>
      <div class="name fl fs14 h">管理员</div>
      <ul class="pa fs13 hide">
        <li @click="loginOut">退出登录</li>
      </ul>
      <i class="pa"></i>
    </div>

    <div @click="emitMethod" class="searchBtn fr">{{ newTitle }}( 已点{{ postFontSize }}次 )</div>

    <div class="searchBox fr h">
      <input type="text" id="mike" value="Mike" v-model="checkedNames">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'headers',
    props: ['titleSize','newTitle','postFontSize'],
    data () {
      return {
        loginStatus: false,
        checkedNames: ''
      }
    },
    created() {
      console.log(this.Random(0,10))
    },
    methods: {
      loginOut() {
        this.loginStatus =!this.loginStatus;
        console.log(this.loginStatus);
      },
      emitMethod() {
        this.$emit('testEvt');
      }
    }
  }
</script>
<style scoped lang="scss">
  .header {
    position: absolute;
    height: 0.54rem;
    background-color: #5581f8;
    top: 0;
    left: 0;
    z-index: 20;
    color: #fff;
    .searchBox {
      margin-right: 0.16rem;
      input {
        display: block;
        width: 1.8rem;
        height: 0.28rem;
        background-color: rgba(255,255,255,.3);
        color: #fff;
        padding-left: 0.1rem;
        margin-top: 0.13rem;
      }
    }
    .searchBtn {
      height: 0.28rem;
      line-height: 0.28rem;
      background-color: #34e458;
      padding: 0 0.12rem;
      margin-right: 0.5rem;
      margin-top: 0.13rem;
      border-radius: 6px;
      cursor: pointer;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
    }
    .logo {
      padding-left: 1rem;
      line-height: 0.54rem;
      white-space: nowrap;
      background: url("/static/images/common/home_logo.png") no-repeat 0.28rem center;
    }
    .avatarWrap {
      padding-right: 0.32rem;
      .avatar {
        width: 0.30rem;
        height: 0.30rem;
        border-radius: 50%;
        overflow: hidden;
        margin-top: 0.12rem;
      }
      .name {
        line-height: 0.54rem;
        white-space: nowrap;
        padding: 0 0.28rem 0 0.14rem;
      }
      i {
        width: 10px;
        height: 4px;
        background: url("/static/images/common/aDown.png") no-repeat;
        top: 0.25rem;
        right: 0.32rem;
        -webkit-transform: rotate(0deg);
        -moz-transform: rotate(0deg);
        -ms-transform: rotate(0deg);
        -o-transform: rotate(0deg);
        transform: rotate(0deg);
        -webkit-transition: all 0.3s;
        -moz-transition: all 0.3s;
        -ms-transition: all 0.3s;
        -o-transition: all 0.3s;
        transition: all 0.3s;
      }
      &:hover i {
        -webkit-transform: rotate(-180deg);
        -moz-transform: rotate(-180deg);
        -ms-transform: rotate(-180deg);
        -o-transform: rotate(-180deg);
        transform: rotate(-180deg);
      }
      ul {
        top: 0.54rem;
        left: 0;
        z-index: 100;
        padding: 0.08rem 0;
        -webkit-animation: avatar 0.3s forwards;
        -o-animation: avatar 0.3s forwards;
        animation: avatar 0.3s forwards;
        li {
          width: 1.24rem;
          height: 0.48rem;
          line-height: 0.48rem;
          border-radius: 0.06rem;
          padding-left: 0.46rem;
          font-size: 0.14rem;
          color: #333;
          background: #fff url("/static/images/common/loginOut.png") no-repeat 0.2rem center;
          box-shadow: 0 0 0.3rem 0.1rem rgba(85,129,248,.05);
        }
      }
      &:hover ul {
        display: block;
      }
    }
  }
  @keyframes avatar {
    0% {
      opacity: 0;
      margin-top: 1rem;
    }
    50% {
      opacity: 0;
      margin-top: -0.20rem;
    }
    100% {
      opacity: 1;
      margin-top: 0;
    }
  }
</style>
