// eslint-disable-next-line
import { getAction } from '@/api/manage'
// import request from '@/utils/request'

const getReceiptTotal = (params) => getAction('/receipt-total', params) // 工作台-数据
const getReceiptTypePercentage = (params) => getAction('/receipt-type-percentage', params) // 工作台-收据类别占比
const getReceiptMonthCount = (params) => getAction('/receipt-month-count', params) // 工作台-查询收据单本月统计数据
const getFinReceiptOrder = (params) => getAction('/fin-receipt-order', params) // 查询收据接口
const getFinReceiptOrderDetail = (params) => getAction('/fin-receipt-order', params) // 获取收据单详情postAction

// eslint-disable-next-line no-undef
// const getlookup = (params) => postAction('/lookup-values', params) // 获取收据单详情postAction
const getlookup = (params) => getAction('/lookup-values', params)

export { getReceiptTotal, getReceiptTypePercentage, getReceiptMonthCount, getFinReceiptOrder, getFinReceiptOrderDetail, getlookup }
