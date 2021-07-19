<template>
    <div>
    
    <!-- <mt-header fixed title="vue项目"></mt-header> -->
       
   
    <br>
 

<van-tabbar v-model="active">
  <van-tabbar-item to="/home" class="iconfont icon-shouye">首页</van-tabbar-item>
  <van-tabbar-item to="/huiyuan"  class="iconfont icon-ku">资讯</van-tabbar-item>
  <van-tabbar-item to="/shopping" class="iconfont icon-qicheqianlian-">购物车</van-tabbar-item>
  <van-tabbar-item to="/search" class="iconfont  icon-qq">我的</van-tabbar-item>

</van-tabbar>
<router-view></router-view>

    </div>

</template>
<script>
export default {
  data() {
    return {
      active: 0,
    };
  },
};
</script>

<style>
    .icon-shouye,.icon-ku,.icon-qq,.icon-qicheqianlian-{
        font-size:20px; 
    }
    .van-tabbar-item__text{
        font-size:15px;
    }
</style>