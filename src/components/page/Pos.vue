<style>
.pos-order {
  background-color: #f9fafc;
  border-right: 1px solid #72aaeb;
}
#order-list {
  text-align: center;
  height: 100%;
  width: 30%;
  overflow: auto;
  padding-bottom: 40PX;
}
#often-list {
  height: 100%;
  width: 63%;
}
/* .el-tabs__item.is-active,.el-tabs__item.is-active,.el-tabs__active-bar{
   width: 80px;
} */
.el-tabs__item {
  padding: 0px;
  width: 80px;
  text-align: center;
}
.div-btn {
  margin-top: 30px;
}
.title {
  height: 20px;
  border-bottom: 1px solid #d3dce6;
  background-color: #f9fafc;
  padding: 10px;
}
.often-goods-lsit ul li {
  list-style: none;
  float: left;
  border: 1px solid #e5e9f2;
  padding: 10px;
  margin: 10px;
  background-color: #fff;
  cursor: pointer;
}
.o-price {
  color: #58b7ff;
}
.goods-type {
  clear: both;
}
.cookList li {
  list-style: none;
  width: 23%;
  border: 1px solid #e5e9f2;
  height: auot;
  height: 70px;
  overflow: hidden;
  background-color: #fff;
  padding: 2px;
  float: left;
  margin: 2px;
  cursor: pointer;
}
.cookList li span {
  display: block;
  float: left;
}
.foodImg {
  width: 40%;
  float: left;
}
.foodName {
  font-size: 14px;
  padding-left: 10px;
  color: brown;
  float: left;
}
.foodPrice {
  font-size: 16px;
  padding-left: 10px;
  padding-top: 10px;
}
.totaDiv {
  background-color: #fff;
  border-bottom: 1px solid #e7e7e7;
  padding: 10px;
}
</style>
<template>
  <div>
    <el-row>
      <el-col class="pos-order" id="order-list">
        <el-tabs>
          <el-tab-pane label="点餐">
            <el-table border style="width: 100%" :data="tableData">
              <el-table-column prop="goodsName" label="商品名称">
              </el-table-column>
              <el-table-column prop="count" label="数量"> </el-table-column>
              <el-table-column label="金额">
                <template slot-scope="scope">
                  {{ scope.row.price * scope.row.count }}
                </template>
              </el-table-column>
              <!-- <el-table-column prop="price" label="金额"></el-table-column> -->
              <el-table-column label="操作" fixed="right" width="100px">
                <template slot-scope="scope">
                  <el-button type="text" @click="subCount(scope.row)"
                    >删除</el-button
                  >
                  <el-button type="text" @click="addOrderList(scope.row)"
                    >添加</el-button
                  >
                </template>
              </el-table-column>
            </el-table>
            <div class="totaDiv">
              <small>数量：</small>{{ totalCount }} <small>金额：</small
              >{{ totalMoney }}元
            </div>
            <div class="div-btn">
              <el-button type="warning">挂单</el-button>
              <el-button type="danger" @click="delAllGoods">删除</el-button>
              <el-button type="success" @click="checkout">结账</el-button>
            </div>
          </el-tab-pane>
          <el-tab-pane label="挂单" name="second">挂单</el-tab-pane>
          <el-tab-pane label="外卖" name="third">外卖</el-tab-pane>
        </el-tabs>
      </el-col>
      <el-col id="often-list">
        <div class="often-goods">
          <div class="title">常用商品</div>
          <div class="often-goods-lsit">
            <ul>
              <li v-for="goods in oftenGoods" @click="addOrderList(goods)">
                <span>{{ goods.goodsName }}</span>
                <span class="o-price">￥{{ goods.price }}元</span>
              </li>
            </ul>
          </div>
        </div>

        <div class="goods-type">
          <el-tabs>
            <el-tab-pane label="汉堡">
              <div>
                <ul class="cookList">
                  <!-- <li>
                    <span class="foodImg"
                      ><img
                        src="http://7xjyw1.com1.z0.glb.clouddn.com/pos001.jpg"
                        width="100%"
                    /></span>
                    <span class="foodName">香辣鸡腿堡</span>
                    <span class="foodPrice">￥20.00元</span>
                  </li> -->
                  <li v-for="goods in type0Goods" @click="addOrderList(goods)">
                    <span class="foodImg"
                      ><img :src="goods.goodsImg" width="100%"
                    /></span>
                    <span class="foodName">{{ goods.goodsName }}</span>
                    <span class="foodPrice">￥{{ goods.price }}元</span>
                  </li>
                </ul>
              </div>
            </el-tab-pane>
            <el-tab-pane label="小食">
              <ul class="cookList">
                <li v-for="goods in type1Goods" @click="addOrderList(goods)">
                  <span class="foodImg"
                    ><img :src="goods.goodsImg" width="100%"
                  /></span>
                  <span class="foodName">{{ goods.goodsName }}</span>
                  <span class="foodPrice">￥{{ goods.price }}元</span>
                </li>
              </ul>
            </el-tab-pane>
            <el-tab-pane label="饮料">
              <ul class="cookList">
                <li v-for="goods in type2Goods" @click="addOrderList(goods)">
                  <span class="foodImg"
                    ><img :src="goods.goodsImg" width="100%"
                  /></span>
                  <span class="foodName">{{ goods.goodsName }}</span>
                  <span class="foodPrice">￥{{ goods.price }}元</span>
                </li>
              </ul>
            </el-tab-pane>
            <el-tab-pane label="套餐">
              <ul class="cookList">
                <li v-for="goods in type3Goods" @click="addOrderList(goods)">
                  <span class="foodImg"
                    ><img :src="goods.goodsImg" width="100%"
                  /></span>
                  <span class="foodName">{{ goods.goodsName }}</span>
                  <span class="foodPrice">￥{{ goods.price }}元</span>
                </li>
              </ul>
            </el-tab-pane>
          </el-tabs>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "pos",
  data() {
    return {
      // tableData: [
      //   {
      //     goodsName: "可口可乐",
      //     price: 8,
      //     count: 1,
      //   },
      //   {
      //     goodsName: "香辣鸡腿堡",
      //     price: 15,
      //     count: 1,
      //   },
      //   {
      //     goodsName: "爱心薯条",
      //     price: 8,
      //     count: 1,
      //   },
      //   {
      //     goodsName: "甜筒",
      //     price: 8,
      //     count: 1,
      //   },
      // ],
      tableData: [],
      oftenGoods: [],
      type0Goods: [],
      type1Goods: [],
      type2Goods: [],
      type3Goods: [],
      totalCount: 0,
      totalMoney: 0,
      toTaAll: 0,
    };
  },
  activated() {},
  mounted() {
    var orderHight = document.body.clientHeight;
    // console.log(orderHight);
    var order_list = document.getElementById("order-list");
    order_list.style.height = orderHight + "px";
  },
  created() {
    //   服务端拉取常用商品数据
    axios
      .get(
        "https://www.fastmock.site/mock/653faed3b11ed4dd6f1925af3da3e870/pos/oftenGoods"
      )
      .then((response) => {
        // console.log(response.data.oftenGoods);
        this.oftenGoods = response.data.oftenGoods;
      })
      .catch((error) => {
        console.log(error);
        alert("网络错误，不能访问");
      });

    //拉取分类商品数据：
    axios
      .get(
        "https://www.fastmock.site/mock/653faed3b11ed4dd6f1925af3da3e870/pos/typeGoods"
      )
      .then((response) => {
          // console.log(response);
        //this.oftenGoods=response.data;
        this.type0Goods = response.data[0];
        this.type1Goods = response.data[1];
        this.type2Goods = response.data[2];
        this.type3Goods = response.data[3];
      })
      .catch((error) => {
        console.log(error);
        alert("网络错误，不能访问");
      });
  },
  methods: {
    addOrderList(goods) {
      let isHave = false;
      //判断是否这个商品已经存在于订单列表
      for (let i = 0; i < this.tableData.length; i++) {
        //   console.log(this.tableData[i].goodsId);
        if (this.tableData[i].goodsId == goods.goodsId) {
          isHave = true; //存在
        }
      }
      //根据isHave的值判断订单列表中是否已经有此商品
      if (isHave) {
        //存在就进行数量添加
        let arr = this.tableData.filter((o) => o.goodsId == goods.goodsId);
        arr[0].count++;

        console.log(arr);
        this.actualPrice = arr.count;
      } else {
        //不存在就推入数组
        let newGoods = {
          goodsId: goods.goodsId,
          goodsName: goods.goodsName,
          price: goods.price,
          count: 1,
        };
        this.tableData.push(newGoods);
      }

      this.getAllMoney();
    },

    subCount(goods) {
      let isHave = false;
      //判断是否这个商品已经存在于订单列表
      for (let i = 0; i < this.tableData.length; i++) {
        if (this.tableData[i].goodsId == goods.goodsId) {
          isHave = true; //存在
        }
      }
      // 
      if (isHave) {
        //存在就进行数量减
        let arr = this.tableData.filter((o) => o.goodsId == goods.goodsId);
        arr[0].count--;
        if (arr[0].count == 0) {
         //  console.log(this.tableData);
          this.tableData = this.tableData.filter(
            (o) => o.goodsId != goods.goodsId
          );
        }
        this.getAllMoney();
      } else {
      }
    },

    //汇总数量和金额
    getAllMoney() {
      this.totalCount = 0;
      this.totalMoney = 0;
      if (this.tableData) {
        this.tableData.forEach((element) => {
          this.totalCount += element.count;
          this.totalMoney = this.totalMoney + element.price * element.count;
        });
      }
    },

    // 清空
    delAllGoods() {
      this.tableData = [];
      this.totalCount = 0;
      this.totalMoney = 0;
    },
    //模拟结账
    checkout() {
      if (this.totalCount != 0) {
        this.tableData = [];
        this.totalCount = 0;
        this.totalMoney = 0;
        this.$message({
          message: "结账成功，感谢你又为店里出了一份力!",
          type: "success",
        });
      } else {
        this.$message.error("不能空结。老板了解你急切的心情！");
      }
    },
  },
};
</script>
