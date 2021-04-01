<template>
 <div class="hearder">
    <div class="a">
      <div class="a1">
        <p>收据</p>
        <p class="a2">——————————————
        </p>
        <div>
          <span>NQ</span><span class="span1">2020207199900001</span>
        </div>
      </div>
      <div class="b1">
        <a-row>
          <a-col :span="12">单位：xxxx有限公司</a-col>
          <a-col :span="12">2020年7月19日</a-col>
        </a-row>
      </div>
      <div class="c1">
        <div class="c2">
          <a-row>
            <a-col :span="12">付款单位：财务测试付款人
              <div class="fukuan">———————————————————————————————————————————</div>
            </a-col>
            <a-col :span="10">付款方式 微信支付
            </a-col>
          </a-row>
        </div>
        <div class="c2">
          <a-row>
            <a-col :span="20">人民币（大写）：壹拾元整
              <div class="ren">—————————————————————————————————————————</div>
            </a-col>
            <a-col>
              <div class="kehu">
                客户联
              </div>
            </a-col>
          </a-row>
        </div>
        <div class="c2">
          <a-row>
            <a-col :span="24">系付：梯货款，财务部收据描述
              <div class="xifu">————————————————————————————————————————————</div>
            </a-col>
          </a-row>
        </div>
      </div>
      <div class="d1">
        <a-row :gutter="16">
          <a-col class="gutter-row" :span="6">
            <div class="gutter-box">单位公章：</div>
          </a-col>
          <a-col class="gutter-row" :span="6">
            <div class="gutter-box">复核人：</div>
          </a-col>
          <a-col class="gutter-row" :span="6">
            <div class="gutter-box">收款人：</div>
          </a-col>
          <a-col class="gutter-row" :span="6">
            <div class="gutter-box">制单：李</div>
          </a-col>
        </a-row>
      </div>
    </div>
    <div class="b">
      <div class="a">
        <div class="a1">
          <p>收据</p>
          <p class="a2">——————————————
          </p>
          <div>
            <span>NQ</span><span class="span1">2020207199900001</span>
          </div>
        </div>
        <div class="b1">
          <a-row>
            <a-col :span="12">单位：xxxx有限公司</a-col>
            <a-col :span="12">2020年7月19日</a-col>
          </a-row>
        </div>
        <div class="c1">
          <div class="c2">
            <a-row>
              <a-col :span="12">付款单位：财务测试付款人
                <div class="fukuan">———————————————————————————————————————</div>
              </a-col>
              <a-col :span="10">付款方式 微信支付
              </a-col>
            </a-row>
          </div>
          <div class="c2">
            <a-row>
              <a-col :span="12">人民币（大写）：壹拾元整
                <div class="ren">——————————————————————————————————————</div>
              </a-col>
              <div class="kehu2">
                记账联
              </div>
            </a-row>
          </div>
          <div class="c2">
            <a-row>
              <a-col :span="24">系付：梯货款，财务部收据描述
                <div class="xifu">————————————————————————————————————————</div>
              </a-col>
            </a-row>
          </div>
        </div>
        <div class="d1">
          <a-row :gutter="16">
            <a-col class="gutter-row" :span="6">
              <div class="gutter-box">单位公章：</div>
            </a-col>
            <a-col class="gutter-row" :span="6">
              <div class="gutter-box">复核人：</div>
            </a-col>
            <a-col class="gutter-row" :span="6">
              <div class="gutter-box">收款人：</div>
            </a-col>
            <a-col class="gutter-row" :span="6">
              <div class="gutter-box">制单：李</div>
            </a-col>
          </a-row>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.hearder{
  width: 1000px;
  height: 800px;
  margin: 0px auto;
}
.a1{
  height: 20%;
}
.a,.b{
  width: 90%;
  height: 350px;
  margin: 100px auto;
  background-color: palevioletred;
}
.a1 p{
  text-align: center;
  font-size: 30px;
}
.a1 .a2{
  margin-top: -50px;
}
.a1 span{
position: relative;
 top: -80px;
 left: 75%;
font-size: 20px;
}
.span1{
  color: blue;
}
.c1{
  width: 98%;
  border: 3px solid #000000;
  margin: 0px auto;
}
.c1 .c2{
  margin: 20px;
}
.b1,.c1,.d1{
  font-size: 18px;
}
.b1,.d1{
  margin: 15px 20px;
}
.xifu{
position: absolute;
 top: 12px;
 left: 5%;
}
.ren{
  position: absolute;
 top: 12px;
 left: 15%;
}
.fukuan{
   position: absolute;
 top: 12px;
 left: 15%;
}
.kehu{
  margin: 0 auto;
  width: 20px;
  line-height: 20px;
  position: absolute;
 top: 0px;
 left: 830px;
}
.kehu2{
  margin: 0 auto;
  width: 20px;
  line-height: 20px;
  position: absolute;
 top: 0px;
 left: 750px;
}
</style>
