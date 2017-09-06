var dateCn = (value) => {
  // value为13位的时间戳
  function add0 (m) {
    return m < 10 ? '0' + m : m
  }
  var time = new Date(parseInt(value))
  var y = time.getFullYear()
  var m = time.getMonth() + 1
  var d = time.getDate()
  return y + '年' + add0(m) + '月' + add0(d) + '日'
}

var dateSlash = (value) => {
  // value为13位的时间戳
  var add0 = (m) => {
    return m < 10 ? '0' + m : m
  }
  var time = new Date(parseInt(value))
  var y = time.getFullYear()
  var m = time.getMonth() + 1
  var d = time.getDate()
  return y + '/' + add0(m) + '/' + add0(d)
}

export default {
  dateCn: dateCn,
  dateSlash: dateSlash
}
