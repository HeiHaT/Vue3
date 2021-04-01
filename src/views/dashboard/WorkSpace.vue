<template>
  <div style="padding: 20px">
    <a-switch v-model="checked" style="margin:10px"/>
    <a-row :gutter="24" v-show="checked">
      <a-col :span="6">
        <a-card :bordered="false">
          <div class="card">
            <div class="card-icon">
              <a-avatar shape="square" :size="56" :src="icon[0]" />
            </div>
            <div class="card-content">
              <div class="card-title">今日收据总数</div>
              <div class="card-label">48</div>
            </div>
          </div>
        </a-card>
      </a-col>
      <a-col :span="6">
        <a-card :bordered="false">
          <div class="card">
            <div class="card-icon">
              <a-avatar shape="square" :size="56" :src="icon[0]" />
            </div>
            <div class="card-content">
              <div class="card-title">近七天收据总数</div>
              <div class="card-label">599</div>
            </div>
          </div>
        </a-card>
      </a-col>
      <a-col :span="6">
        <a-card :bordered="false">
          <div class="card">
            <div class="card-icon">
              <a-avatar shape="square" :size="56" :src="icon[0]" />
            </div>
            <div class="card-content">
              <div class="card-title">今日收据总额</div>
              <div class="card-label">221,133</div>
            </div>
          </div>
        </a-card>
      </a-col>
      <a-col :span="6">
        <a-card :bordered="false">
          <div class="card">
            <div class="card-icon">
              <a-avatar shape="square" :size="56" :src="icon[0]" />
            </div>
            <div class="card-content">
              <div class="card-title">近七天收据总额</div>
              <div class="card-label">794,245</div>
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
          <div id="tmyChart" class="tmyChart" style="width: 500px; height: 330px"></div>
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
          </div>
          <div id="main2" class="twChart" style="width: 500px; height: 300px"></div>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>
<script>
import * as echarts from 'echarts'
import { getReceiptTotal, getReceiptTypePercentage, getlookup } from '@/api/api'
// import { getlookup } from '@/api/login'
export default {
  name: 'WorkSpace',
  data () {
    return {
      checked: true,
      icon: [require('@/assets/icons/logo.png'), require('@/assets/icons/logo.png')]
    }
  },
  mounted () {
    getReceiptTotal().then((res) => {
       console.log(res)
     })
     getReceiptTypePercentage().then((res) => {
      console.log(res)
     })

     // 测试数据
     getlookup({ type: 'FIN_PAY_RECEIPT_TYPE' })
      .then(res => {
        console.log(res)
      })
      .catch(() => {
        console.log(22222222)
      })

     console.log('=================')
    var colors = ['#5470C6', '#EE6666']
    var tmyChart = echarts.init(document.getElementById('tmyChart'))
    // 指定图表的配置项和数据
    var option = {
       color: colors,
     tooltip: {
        trigger: 'none',
        axisPointer: {
            type: 'cross'
        }
    },
    legend: {
        data: ['本月', '上月'],
        verticalAlign: 'bottom', // 垂直方向位置
        top: 280,
        bottom: 50
    },
    grid: {
        top: 70,
        bottom: 80
    },
      xAxis: [
        {
            type: 'category',
            axisTick: {
                alignWithLabel: true
            },
            axisLine: {
                onZero: false,
                lineStyle: {
                    // eslint-disable-next-line no-undef
                    color: colors[1]
                }
            },
            axisPointer: {
                label: {
                    formatter: function (params) {
                        return '上月  ' + params.value +
                            (params.seriesData.length ? '：' + params.seriesData[0].data : '')
                    }
                }
            },
            data: ['2016-1', '2016-2', '2016-3', '2016-4', '2016-5', '2016-6', '2016-7', '2016-8', '2016-9', '2016-10', '2016-11', '2016-12']
        },
        {
            type: 'category',
            axisTick: {
                alignWithLabel: true
            },
            axisPointer: {
                label: {
                    formatter: function (params) {
                        return '本月  ' + params.value +
                            (params.seriesData.length ? '：' + params.seriesData[0].data : '')
                    }
                }
            }
        }
    ],
      yAxis: {
            type: 'value'
        },
      series: [
        {
            name: '本月',
            type: 'line',
            xAxisIndex: 1,
            smooth: true,
            emphasis: {
                focus: 'series'
            },
            data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
        },
        {
            name: '上月',
            type: 'line',
            smooth: true,
            emphasis: {
                focus: 'series'
            },
            data: [3.9, 5.9, 11.1, 18.7, 48.3, 69.2, 231.6, 46.6, 55.4, 18.4, 10.3, 0.7]
        }
      ]
    }
    // 使用刚指定的配置项和数据显示图表。
  // tmyChart.clear()
  tmyChart.setOption(option)
    //  第二个
    var myChart2 = echarts.init(document.getElementById('main2'))
    // 指定图表的配置项和数据
    var option2 = {
      tooltip: {
        trigger: 'item'
      },
      legend: {
        align: 'right',
        verticalAlign: 'right', // 垂直方向位置
        top: 80,
        left: 400
      },
      label: {
        normal: {
                show: true,
                position: 'center',
                color: '#4c4a4a',
                formatter: '{total|' + this.total + '}' + '\n\r' + '{active|共发布活动}',
                rich: {
                    total: {
                        fontSize: 35,
                        fontFamily: '微软雅黑',
                        color: '#454c5c'
                    },
                    active: {
                        fontFamily: '微软雅黑',
                        fontSize: 16,
                        color: '#6c7a89',
                        lineHeight: 30
                    }
                }
            },
            emphasis: {
                show: true
            }
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
            { value: 908, name: '指最情应展' },
            { value: 735, name: '族指器将众' },
            { value: 580, name: '习变力好美' },
            { value: 484, name: '问律身然手' },
            { value: 300, name: '科叫断商厂' }
          ]
        }
      ]
    }
    // 使用刚指定的配置项和数据显示图表。
    myChart2.setOption(option2)
   window.addEventListener('resize', () => {
     tmyChart.resize()
     myChart2.resize()
   })
  }
}
</script>
<style >
.card {
  display: flex;
}
.card-label{
  font-size: 28px;
  font-weight:bolder;
}
.card div{
  margin-left: 10px;
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
