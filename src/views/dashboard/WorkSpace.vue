<template>
  <div style="padding: 20px">
    <a-row :gutter="24">
      <a-col :span="6">
        <a-card :bordered="false">
          <div class="card">
            <div class="card-icon">
              <a-avatar shape="square" :size="56" />
            </div>
            <div class="card-content">
              <div class="card-title">今日收据总数</div>
              <div class="card-label"></div>
            </div>
          </div>
        </a-card>
      </a-col>
      <a-col :span="6">
        <a-card :bordered="false">
          <div class="card">
            <div class="card-icon">
              <a-avatar shape="square" :size="56" />
            </div>
            <div class="card-content">
              <div class="card-title">近七天收据总数</div>
              <div class="card-label"></div>
            </div>
          </div>
        </a-card>
      </a-col>
      <a-col :span="6">
        <a-card :bordered="false">
          <div class="card">
            <div class="card-icon">
              <a-avatar shape="square" :size="56" />
            </div>
            <div class="card-content">
              <div class="card-title">今日收据总额</div>
              <div class="card-label"></div>
            </div>
          </div>
        </a-card>
      </a-col>
      <a-col :span="6">
        <a-card :bordered="false">
          <div class="card">
            <div class="card-icon">
              <a-avatar shape="square" :size="56" />
            </div>
            <div class="card-content">
              <div class="card-title">近七天收据总额</div>
              <div class="card-label"></div>
            </div>
          </div>
        </a-card>
      </a-col>
    </a-row>
    <!-- 常用功能 -->
    <a-row style="margin: 20px 0">
      <a-card :bordered="false" title="常用功能">
        <div class="flex-row-space-around commonly-used-functions">
          <div class="common-item" @click="toPage('receiptIssued')">收据开具</div>
          <div
            class="common-item"
            style="display: flex; justify-content: space-between"
            @click="toPage('receiptAudit')"
          >
            <span>收据审核</span>
            <a>(<span>88</span>)</a>
          </div>
          <div class="common-item">收据收款</div>
          <div class="common-item">收据查询</div>
          <div class="common-item">收据打印</div>
        </div>
      </a-card>
    </a-row>
    <a-row style="margin: 20px 0" :gutter="24">
      <a-col :span="12">
        <a-card title="收据类别占比" :bordered="false">
          <a-row>
            <a-col :span="12">
              <div>本月预付款收据总数</div>
              <div style="display: flex">
                <div>75</div>
                <div>0.00%</div>
              </div>
            </a-col>
            <a-col :span="12">
              <div>本月预付款收据总额</div>
              <div style="display: flex">
                <div>24</div>
                <div>0.00%</div>
              </div>
            </a-col>
          </a-row>
          <div id="main" class="twChart" style="width: 500px; height: 300px"></div>
        </a-card>
      </a-col>
      <a-col :span="12">
        <a-card title="收据统计" :bordered="false">
          <div class="flex-row-space-around commonly-used-functions">
            <a-radio-group default-value="LAST_SEVEN_DAY" style="margin-bottom: 16px">
              <a-radio-button value="LAST_SEVEN_DAY"> 近七天 </a-radio-button>
              <a-radio-button value="THIS_MOUTH"> 本月 </a-radio-button>
              <a-radio-button value="THIS_QUARTER"> 本季度 </a-radio-button>
            </a-radio-group>
            <div id="main2" class="twChart" style="width: 400px; height: 300px"></div>
          </div>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>
<script>
import * as echarts from 'echarts'
export default {
  name: 'WorkSpace',
  data () {
    return {}
  },
  mounted () {
    alert('我进来了')
    // 基于准备好的dom，初始化echarts实例
    // eslint-disable-next-line no-undef
    var myChart = echarts.init(document.getElementById('main'))
    // 指定图表的配置项和数据
    var option = {
      tooltip: {},
      legend: {
        data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
      },
      xAxis: {
        data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
      },
      yAxis: {},
      series: [
        {
          name: '销量',
          type: 'line',
          data: [5, 20, 36, 10, 10, 20]
        }
      ]
    }
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option)
    //  第二个
    var myChart2 = echarts.init(document.getElementById('main2'))
    // 指定图表的配置项和数据
    var option2 = {
      tooltip: {
        trigger: 'item'
      },
      legend: {
        top: '5%',
        left: 'center'
      },
      series: [
        {
          name: '访问来源',
          type: 'pie',
          radius: ['40%', '70%'],
          avoidLabelOverlap: false,
          label: {
            show: false,
            position: 'center'
          },
          emphasis: {
            label: {
              show: true,
              fontSize: '40',
              fontWeight: 'bold'
            }
          },
          labelLine: {
            show: false
          },
          data: [
            { value: 1048, name: '搜索引擎' },
            { value: 735, name: '直接访问' },
            { value: 580, name: '邮件营销' },
            { value: 484, name: '联盟广告' },
            { value: 300, name: '视频广告' }
          ]
        }
      ]
    }
    // 使用刚指定的配置项和数据显示图表。
    myChart2.setOption(option2)
  }
}
</script>
<style >
.card {
  display: flex;
}
.commonly-used-functions div {
  padding: 10px 20px;
  border-bottom: 1px solid rgba(235, 235, 235, 1);
  flex: 1;
  color: rgba(0, 0, 0, 0.647058823529412);
  font-size: 16px;
  font-weight: 500;
}
.flex-row-space-around {
  display: flex;
}
</style>
