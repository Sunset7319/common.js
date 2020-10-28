//过滤器：时间戳转年月日时分秒
export const timeFilter = value => {
  var date = new Date(value)// 时间戳为10位需*1000，时间戳为13位的话不需乘1000
  var Y = date.getFullYear() + '/'
  var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '/'
  var D = date.getDate() + '/'
  var h = date.getHours() + ':'
  var m = date.getMinutes() + ':'
  var s = date.getSeconds()
  return Y + M + D + h + m + s
}
//过滤器：根据某项值返回自定义的值
export const payStatusFilter = status => {
  const statusMap = {
    'NOT_PAY': '未支付',
    'PAID': '已支付'
  }
  return statusMap[status]
}
//过滤器：金钱为分转成元带两位小数
export const priceFilter = num =>{
  return "￥" + (num/100).toFixed(2)
}
//获取url某项的值：getParaValueFromUrl("code")
export const getParaValueFromUrlFilter = (value) => {
  var reg = new RegExp("(^|&)" + value + "=([^&]*)(&|$)");
  var r = window.location.search.substr(1).match(reg);
  if (r != null) {
      return decodeURI(r[2]);
  } else {
      return null;
  }
}


//判断数据是否为Null或者undefined或者为空字符串
export const checkIsNullOrEmpty = value => {
  //正则表达式用于判斷字符串是否全部由空格或换行符组成
  var reg = /^\s*$/
  //返回值为true表示不是空字符串
  return (value != null && value != undefined && !reg.test(value))
}
//判断电话号是否正确
export const checkIsPhone = value => {
  var reg = /^[1][3,4,5,7,8,9][0-9]{9}$/;
  if (!reg.test(value)) {
    return false;
  } else {
    return true;
  }
}
//判断是否为电话号码
export const CheckIsTel = value => {
  var reg = /^(([0\+]\d{2,3}-)?(0\d{2,3})-)(\d{7,8})(-(\d{3,}))?$/;
  if (!reg.test(value)) {
    return false;
  } else {
    return true;
  }
}
//判断是否为身份证
export const CheckIsCard = value => {
  var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
  if (!reg.test(value)) {
    return false;
  } else {
    return true;
  }
}
//判断是否为邮箱
export const CheckIsEmail = value => {
  var reg = /^[0-9a-zA-Z_.-]+[@][0-9a-zA-Z_.-]+([.][a-zA-Z]+){1,2}$/;
  if (!reg.test(value)) {
    return false;
  } else {
    return true;
  }
}
//判断是否为数字
export const CheckIsNumber = value => {
  var reg = new RegExp("^[0-9]*$");
  if (!reg.test(value)) {
    return false;
  } else {
    return true;
  }
}
//判断是否为金钱(最多可有两位小数)
export const CheckIsMoney = value => {
  var reg = /(^[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)/;
  if (!reg.test(value)) {
    return false;
  } else {
    return true;
  }
}
//判断是否为车牌号
export const CheckIsMoney = value => {
  var reg = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1}$/;
  if (!reg.test(value)) {
    return false;
  } else {
    return true;
  }
}