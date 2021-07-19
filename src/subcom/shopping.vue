<template>
  <div class="shopping">
    <div class="shangpin">
      <van-swipe-cell>
          <van-card
        num="2"
        price="15.00"
        desc="描述信息"
        title="商品标题"
        class="goods-card"
         thumb="https://img01.yzcdn.cn/vant/ipad.jpeg"
      />
      <template #right>
        <van-button square text="删除" type="danger" class="delete-button" />
      </template>
          <template #tags>
            <van-tag plain type="danger">标签</van-tag>
            <van-tag plain type="danger">标签</van-tag>
          </template>
          <template #footer>
            <van-button size="mini">按钮</van-button>
            <van-button size="mini">按钮</van-button>
          </template>
 
      </van-swipe-cell>
    </div>
    <van-swipe-cell>
      <van-card
        num="2"
        price="15.00"
        desc="描述信息"
        title="商品标题"
        class="goods-card"
        thumb="https://img01.yzcdn.cn/vant/cat.jpeg"
      />
      <template #right>
        <van-button square text="删除" type="danger" class="delete-button" />
      </template>
    </van-swipe-cell>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: "购物车页面",
    };
  },
  methods: {},
};
</script>

<style lang="less">
.shangpin {
  margin-top: 15vw;
  height: 100%;
}
.shopping {
  width: 92vw;
  margin: 0 auto;
}
.goods-card {
  margin: 0;
  background-color: white;
}

.delete-button {
  height: 100%;
}
</style>