<template>
  <div class="consult">
    <div class="data">
      {{ data }}
      <span>{{ nowAday }}</span>
      <span>{{ engnowAday }}</span>
    </div>
    <h1>{{ name }}</h1>
    <img src="../images/consult.png" alt="" />
    <van-dropdown-menu>
      <van-dropdown-item @change="dropC" v-model="value1" :options="option1" />
      <van-dropdown-item @change="dropC" v-model="value2" :options="option2" />
      <van-dropdown-item @change="dropC" v-model="value3" :options="option3" />
    </van-dropdown-menu>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: "资讯页面",
      data: "",
      nowAday: "",
      engnowAday: "",
      value1: 0,
      value2: "a",
      value3: "1",
      option1: [
        { text: "全部商品", value: 0 },
        { text: "新款商品", value: 1 },
        { text: "活动商品", value: 2 },
      ],
      option2: [
        { text: "资讯价格", value: "a" },
        { text: "好评排序", value: "b" },
        { text: "销量排序", value: "c" },
      ],
      option3: [
        { text: "岗位名称", value: "1" },
        { text: "好评排序", value: "2" },
        { text: "销量排序", value: "3" },
      ],
    };
  },
  created() {
    var data = new Date();
    const year = data.getFullYear();
    const month = data.getMonth() + 1;
    const day = data.getDate();
    var FullDay = year + "/" + month + "/" + day;
    // console.log(FullDay);
    this.data = FullDay;
    var a = ["日", "一", "二", "三", "四", "五", "六"];
    var b = new Array(
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    );
    var week = data.getDay();
    var nowAday = "星期" + a[week];
    // console.log(nowAday);
    this.nowAday = nowAday;
    var engnowAday = "" + b[week];
    this.engnowAday = engnowAday;
  },
  methods: {
    dropC(val) {
      console.log(val);
    },
  },
};
</script>

<style lang="less">
.consult {
  width: 92vw;
  margin: 0 auto;
  .data {
    color: #d8d8d8;
  }
  img {
      width: 100%;
  }
}
</style>