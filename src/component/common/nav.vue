<template>
  <div class="leftNav pa h">
    <ul class="listUl">
      <li v-for="(item,index) in navLi" :class="['firstLevel'+(index+1)]" class="pr firstLevel">
        <a class="firstLink db pr cursor" :href="item.url">{{ item.name }} <i class="pa  spriteMarker"></i></a>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    name: 'navList',
    data () {
      return {
        navLi: [
          {
            name: '首页',
            url: '',
            children: null
          },{
            name: 'Banner管理',
            url: '',
            children: null
          },{
            name: '信息管理',
            url: null
          },{
            name: '课程管理',
            url: null
          },{
            name: '语音作业',
            url: null
          },{
            name: '账号管理',
            url: null
          },{
            name: '系统设置',
            url: null
          }
        ]
      }
    },
    methods: {

    }
  }
</script>
<style scoped lang="scss">
  .leftNav {
    width: 180px;
    background-color: #fff;
    top: 0;
    left: 0;
    padding-top: 54px;
    z-index: 10;
    .listUl {
      font-size: 14px;
      .firstLevel {
        a.firstLink {
          height: 40px;
          line-height: 40px;
          color: #333;
          padding-left: 56px;
          -webkit-transition: all 0.3s;
          -moz-transition: all 0.3s;
          -ms-transition: all 0.3s;
          -o-transition: all 0.3s;
          transition: all 0.3s;
          .spriteMarker{
            background-image: url("/static/images/common/leftNav.png");
            background-repeat: no-repeat;
            width: 20px;
            height: 20px;
            top: 10px;
            left: 20px;
            -webkit-transition: all 0.3s;
            -moz-transition: all 0.3s;
            -ms-transition: all 0.3s;
            -o-transition: all 0.3s;
            transition: all 0.3s;
          }
          i {
            background-position: 0 3px;
          }
        }
        &.firstLevel1 a.firstLink i {
          background-position: 0 3px;
        }
        &.firstLevel1.active a.firstLink i,&.firstLevel1:hover a.firstLink i {
          background-position: -20px 3px;
        }
        &.firstLevel2 a.firstLink i {
          background-position: 0 -37px;
        }
        &.firstLevel2.active a.firstLink i,&.firstLevel2:hover a.firstLink i {
          background-position: -20px -37px;
        }
        &.firstLevel3 a.firstLink i {
          background-position: 0 -276px;
        }
        &.firstLevel3.active a.firstLink i, &.firstLevel3:hover a.firstLink i {
          background-position: -20px -276px;
        }
        &.firstLevel4 a.firstLink i {
          background-position: 0 -156px;
        }
        &.firstLevel4.active a.firstLink i,&.firstLevel4:hover a.firstLink i {
          background-position: -20px -156px;
        }
        &.firstLevel5 a.firstLink i {
          background-position: 0 -197px;
        }
        &.firstLevel5.active a.firstLink i,&.firstLevel5:hover a.firstLink i {
          background-position: -20px -197px;
        }
        &.firstLevel6 a.firstLink i {
          background-position: 0 -77px;
        }
        &.firstLevel6.active a.firstLink i,&.firstLevel6:hover a.firstLink i {
          background-position: -20px -77px;
        }
        &.firstLevel7 a.firstLink i {
          background-position: 0 -317px;
        }
        &.firstLevel7.active a.firstLink i,&.firstLevel7:hover a.firstLink i {
          background-position: -20px -317px;
        }

        .childIcon {
          width: 5px;
          height: 8px;
          background: url("/static/images/common/nav.png");
          top: 16px;
          right: 24px;
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
          z-index: 10;
        }
        &.cActive .childIcon {
          -webkit-transform: rotate(90deg);
          -moz-transform: rotate(90deg);
          -ms-transform: rotate(90deg);
          -o-transform: rotate(90deg);
          transform: rotate(90deg);
        }
        &.active a.firstLink,&:hover a.firstLink,& .hasChild.active {
          color: #5581f8;
          background-color: #ebf0ff;
        }

        .childNode a {
          height: 40px;
          line-height: 40px;
          padding-left: 68px;
          -webkit-transition: all 0.3s;
          -moz-transition: all 0.3s;
          -ms-transition: all 0.3s;
          -o-transition: all 0.3s;
          transition: all 0.3s;
          &:hover {
            background-color: #5581f8;
            color: #fff;
          }
        }

        .childNode li.childActive a {
          background-color: #5581f8;
          color: #fff;
        }
      }
    }
  }
</style>
