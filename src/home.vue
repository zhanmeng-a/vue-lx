<template>
  <div>
      <van-cell title="选择日期区间" :value="date" @click="show = true" />
<van-calendar v-model="show" type="range" @confirm="onConfirm" />
    <div class="list">
      <div class="item" v-for="(list, index) in lists" :key="index">
        <img :src="list.src" alt="" />
        {{ list.text }}
      </div>
    </div>

    <div class="chanpin"><span>产品轮播</span> <a>更多选择</a></div>
    <div class="lunbo">
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <img :src="image" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <br>
<van-cell title="显示分享面板" @click="showShare = true" />
<van-share-sheet
  v-model="showShare"
  title="立即分享给好友"
  :options="options"
  @select="onSelect"
/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "首页",
       showShare: false,
      date: "",
      show: false,
      active: 0,
      options: [
        { name: '微信', icon: 'wechat' },
        { name: '微博', icon: 'weibo' },
        { name: '复制链接', icon: 'link' },
        { name: '分享海报', icon: 'poster' },
        { name: '二维码', icon: 'qrcode' },
      ],
      images: ["../images/2.jpg", "../images/3.jpg", "../images/4.jpg"],
      lists: [
        {
          src: "../images/list/1.png",
          text: "品牌故事",
        },
        {
          src: "../images/list/2.png",
          text: "品牌故事",
        },
        {
          src: "../images/list/3.png",
          text: "品牌故事",
        },
        {
          src: "../images/list/4.png",
          text: "品牌故事",
        },
      ],
      
    };
  },
  methods: {
    formatDate(date) {
      return `${date.getMonth() + 1}/${date.getDate()}`;
    },
    onSelect(option) {
      Toast(option.name);
      this.showShare = false;
    },
    onConfirm(date) {
      const [start, end] = date;
      this.show = false;
      this.date = `${this.formatDate(start)} - ${this.formatDate(end)}`;
    },
  },
};
</script>

<style lang="less">
.chanpin a {
  float: right;
}
.list {
  display: flex;
  justify-content: space-around;
  .item {
    display: flex;
    flex-direction: column;
    img {
      width: 50px;
      height: 50px;
      margin: 20px 0px 20px 10px;
      color: #1296d8;
    }
  }
}
.lunbo {
  img {
    width: 90vw;
    margin: 0 auto;
  }
}
</style>
