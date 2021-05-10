<style>
.left-nav{
    color: #fff;
    font-size: 10px;
    height: 100%;
    background-color: #1d8ce0;
    float: left;
    width: 7%;

}
.iconfont{
    font-size: 24px;
}
.left-nav ul {
    margin: 0;padding: 0;
}
.left-nav li{
    list-style: none;
    text-align: center;
    border-bottom: 1px solid #50a0ff;
    padding:10px;
}
</style>
<template>
    <div class="left-nav">
        <ul>
            <li>
                <i class="icon iconfont icon-rmb"></i>
                <div>收银</div>
            </li>
            <li>
                <i class="icon iconfont icon-direct-salestore"></i>
                <div>店铺</div>
            </li>
            <li>
                <i class="icon iconfont icon-canyin"></i>
                <div>商品</div>
            </li>
            <li>
                <i class="icon iconfont icon-huiyuan" ></i>
                <div>会员</div>
            </li>
            <li>
                <i class="icon iconfont icon-zhuanshi"></i>
                <div>统计</div>
            </li> 
            <li>
                <i class="icon iconfont icon-set"></i>
                <div>设置</div>
            </li>       
        </ul>
    </div>
</template>
<script>
export default {
    name:"leftNav",
   data() {
      return {
      }
   },
   activated() {
   }
}
</script>
