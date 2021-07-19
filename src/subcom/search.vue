<template>
    <div class="shopping">
        <div class="re">
            <div class="info">
                <div class="item">
                    <div class="left">开通您的企业专属打数据</div>
                    <div class="right">vip专属卡</div>
                </div>
            </div>
            <div class="seeYy">
                <div class="box" @click="dj">
                    <div class="right">
                        查看全部
                        <span>
                            >
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            name:"购物车页面"
        }
    },
    methods:{
        dj(){}
    }
}
</script>

<style lang="less">
    .shopping{
        width: 92vw;
        margin: 0 auto;
    }

.re{
    position: relative;
    height: 140px;
    background: #fff;
    border: 1px solid #000;
}
.re .info{
    position: absolute;
    width: 80vw;
    height: 90px;
    background: #ffffff;
    border-radius: 8px;
    left: 20px;
    bottom: -45px;
    box-sizing: border-box;
    padding: 20px;
    font-size: 7px;
    font-weight: bold;
    border: 1px solid rebeccapurple;
    z-index: 20;
}
.re .info .item{
    display: flex;
    align-items: center;
    margin-top: 10px;
    justify-content: space-between;
}
.item .left{
    font-size: 17px;
    color: #e2cd9f;
}
.item .right{
    height: 35px;
    width: 75px;
    line-height: 35px;
    background:#e2cd9f ;
    text-align: center;
    border-radius: 15px;
    color: #fff;
}
.seeYy {
    background: white;
    width: 33px;
    position: absolute;
    bottom: 30px;
}
.seeYy .box{
    display: flex;
    justify-content:space-between ;
    width: 65vw;
    margin-left: 20px;
    margin-bottom: 25px;
}
.seeYy .box .right{
    color: #979797;
}

</style>