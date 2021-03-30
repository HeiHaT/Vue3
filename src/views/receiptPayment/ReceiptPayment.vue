<template>
  <div>
    <a-card :bordered="false">
      <div class="table-page-search-wrapper">
        <a-form layout="inline">
          <a-row :gutter="48">
            <a-col :md="8" :sm="24">
              <a-form-item label="收据编号">
                <a-input placeholder="" v-model="queryParam.receiptNo" />
              </a-form-item>
            </a-col>
            <a-col :md="8" :sm="24">
              <a-form-item label="收据类型">
                <a-select placeholder="" mode="multiple" v-model="receiptType" :allowClear="true">
                  <a-select-option v-for="(item, index) in receiptTypeList" :value="item.receiptType" :key="index">{{
                    item.receiptTypeMeaning
                  }}</a-select-option>
                </a-select>
              </a-form-item>
            </a-col>
            <a-col :md="8" :sm="24">
              <a-form-item label="支付方式">
                <a-select placeholder="" v-model="queryParam.payType">
                  <a-select-option v-for="(item, index) in payTypeList" :value="item.payType" :key="index">{{
                    item.payTypeMeaning
                  }}</a-select-option>
                </a-select>
              </a-form-item>
            </a-col>
            <a-col :md="24" :sm="24">
              <span class="table-page-search-submitButtons" style="float: right; overflow: hidden">
                <a-button
                  @click="
                    () => {
                      receiptType = []
                      queryParam.receiptNo = null
                      queryParam.receiptType = null
                      queryParam.payType = null
                      $refs.table.refresh(true)
                    }
                  "
                >重置</a-button
                >
                <a-button type="primary" style="margin-left: 8px" @click="$refs.table.refresh(true)">查询</a-button>
              </span>
            </a-col>
          </a-row>
        </a-form>
      </div>
    </a-card>
    <a-card title="收据列表" style="margin-top: 24px" :bordered="false">
      <a-table :columns="columns" :data-source="data">
        <a slot="name" slot-scope="text">{{ text }}</a>
        <span slot="customTitle"><a-icon type="smile-o" /> Name</span>
        <span slot="tags" slot-scope="tags">
          <a-tag
            v-for="tag in tags"
            :key="tag"
            :color="tag === 'loser' ? 'volcano' : tag.length > 5 ? 'geekblue' : 'green'"
          >
            {{ tag.toUpperCase() }}
          </a-tag>
        </span>
        <span slot="action" slot-scope="text, record">
          <a>Invite 一 {{ record.name }}</a>
          <a-divider type="vertical" />
          <a>Delete</a>
          <a-divider type="vertical" />
          <a class="ant-dropdown-link"> More actions <a-icon type="down" /> </a>
        </span>
      </a-table>
    </a-card>
    <a-modal v-model="visible" title="选择微信支付方式" @ok="handleOk">
      <a-radio-group v-model="payType">
        <a-radio value="pay"> 扫码枪扫码付款 </a-radio>
        <a-radio value="native-pay"> 扫描二维码付款 </a-radio>
      </a-radio-group>
    </a-modal>
  </div>
</template>

<script>
import { STable, Ellipsis } from '@/components'
// import { getFinReceiptOrder, keyValueList } from '@/api/api'

export default {
  name: 'ReceiptPayment',
  components: {
    STable,
    Ellipsis
  },
  data () {
    return {
      receiptType: [],
      // 查询参数
      queryParam: {
        receiptNo: null, // 收据编号
        receiptType: null, // 收据类型
        payType: null, // 支付方式
        queryType: 'TO_PAY'
      },
      columns: [
  {
    dataIndex: 'name',
    key: 'name',
    slots: { title: 'customTitle' },
    scopedSlots: { customRender: 'name' }
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age'
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address'
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    scopedSlots: { customRender: 'tags' }
  },
  {
    title: 'Action',
    key: 'action',
    scopedSlots: { customRender: 'action' }
  }
],
data: [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer']
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser']
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher']
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher']
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher']
  }
],
      // loadData: (parameter) => {
      //   this.queryParam.receiptType = this.receiptType.length ? this.receiptType.join(',') : null
      //   return getFinReceiptOrder(Object.assign(this.queryParam, parameter)).then((res) => {
      //     return {
      //       data: res.result.data,
      //       pageNo: parameter.pageNo,
      //       pageSize: parameter.pageSize,
      //       totalCount: res.result.totalCount
      //     }
      //   })
      // },
      loadData: [{
           index: '1',
           receiptNo: '10001',
           receiptTypeMeaning: '不合格产品补偿',
           receiptMoney: '9300',
           payTypeMeaning: '现金支付',
           submitDate: '2021-03-21',
           receiptStatusMeaning: '代付款'
      }],
      receiptTypeList: [
          { 'receiptType': 'STORAGE', 'receiptTypeMeaning': '仓储费' },
          { 'receiptType': 'PREPAID', 'receiptTypeMeaning': '预付款' },
          // { 'receiptType': 'PICK', 'receiptTypeMeaning': '梯货款' },
          // { 'receiptType': 'CARRY', 'receiptTypeMeaning': '搬运设备' },
          // { 'receiptType': 'UNQUALIFIED', 'receiptTypeMeaning': '不合格品赔偿' },
          // { 'receiptType': 'STAFF', 'receiptTypeMeaning': '员工付款' },
          // { 'receiptType': 'FINE', 'receiptTypeMeaning': '罚款' },
          { 'receiptType': 'OTHER', 'receiptTypeMeaning': '其他' }], // 收据类型
      payTypeList: [{ 'payType': 'WEIXIN', 'payTypeMeaning': '微信支付' },
      { 'payType': 'CASH', 'payTypeMeaning': '现金支付' },
      { 'payType': 'BANK', 'payTypeMeaning': '银行转账' }],
      // receiptTypeList: [],
      receiptStatusList: [],
      // payTypeList: [],
      visible: false,
      payType: null,
      receiptInfo: null
    }
  },
  mounted () {
    console.log(this.loadData)
    // keyValueList({ type: 'FIN_PAY_RECEIPT_TYPE' }).then((res) => (this.receiptTypeList = res.result))

    // keyValueList({ type: 'FIN_PAY_RECEIPT_STATUS_CODE' }).then((res) => (this.receiptStatusList = res.result))

    // keyValueList({ type: 'FIN_PAY_RECEIPT_PAY_TYPE' }).then((res) => (this.payTypeList = res.result))
  },
  methods: {
    newPage (record) {
      const that = this
      if (record.payType === 'WEIXIN') {
        this.payType = 'pay'
        this.visible = true
        this.receiptInfo = record
      } else if (record.payType === 'CASH') {
        this.$confirm({
          title: '现金支付确认',
          content: '此收据为现金支付的支付方式，若已支付现金请点击确认操作，若现金仍为缴纳请取消确认。',
          onOk () {
            that.$notification.success({
              message: '成功',
              description: '操作成功'
            })
            that.$refs.table.refresh(true)
          },
          onCancel () {
            console.log('Cancel')
          }
        })
      }
    },
    toPage (record) {},
    confirm (record) {},
    handleOk () {
      this.visible = false
      const newPage = window.open(`/${this.payType}?receiptNo=${this.receiptInfo.receiptNo}`)
      const loop = setInterval(() => {
        if (newPage !== null && newPage.closed) {
          console.log('closed')
          this.$refs.table.refresh(true)
          clearInterval(loop)
        }
      }, 800)
    },
    onChange () {}
  }
}
</script>

<style scoped></style>
