import Mock from 'mockjs2'
import { builder, getQueryParameters } from '../util'

// 值列表
const lookupValue = (options) => {
  const parameters = getQueryParameters(options)

  switch (parameters.type) {
    // 收据类型
    case 'FIN_PAY_RECEIPT_TYPE':
      return builder(
        JSON.parse(
          '[{"receiptType":"STORAGE","receiptTypeMeaning":"仓储费"},{"receiptType":"PREPAID","receiptTypeMeaning":"预付款"},{"receiptType":"PICK","receiptTypeMeaning":"梯货款"},{"receiptType":"CARRY","receiptTypeMeaning":"搬运设备"},{"receiptType":"UNQUALIFIED","receiptTypeMeaning":"不合格品赔偿"},{"receiptType":"STAFF","receiptTypeMeaning":"员工付款"},{"receiptType":"FINE","receiptTypeMeaning":"罚款"},{"receiptType":"CUSTOMER_MEAL","receiptTypeMeaning":"客饭费"},{"receiptType":"CERTIFICATE","receiptTypeMeaning":"补合格证"},{"receiptType":"OTHER","receiptTypeMeaning":"其他"}]'
        )
      )
    // 付款方式
    case 'FIN_PAY_RECEIPT_PAY_TYPE':
      return builder(
        JSON.parse(
          '[{"payType":"WEIXIN","payTypeMeaning":"微信支付"},{"payType":"CASH","payTypeMeaning":"现金支付"},{"payType":"BANK","payTypeMeaning":"银行转账"}]'
        )
      )
    // 收据状态
    case 'FIN_PAY_RECEIPT_STATUS_CODE':
      return builder(
        JSON.parse(
          '[{"receiptStatus":"TO_APPROVE","receiptStatusMeaning":"待审核"},{"receiptStatus":"REJECTED","receiptStatusMeaning":"已退回"},{"receiptStatus":"CANCEL","receiptStatusMeaning":"已作废"},{"receiptStatus":"TO_PAY","receiptStatusMeaning":"待付款"},{"receiptStatus":"COMPLETED","receiptStatusMeaning":"已完成"},{"receiptStatus":"BOOKED","receiptStatusMeaning":"已记账"},{"receiptStatus":"NOT_TRANSFER","receiptStatusMeaning":"未转账"},{"receiptStatus":"TRANSFERRED","receiptStatusMeaning":"已转账"}]'
        )
      )
    default:
      return null
  }
}

Mock.mock(/\/lookup-values/, 'get', lookupValue)
