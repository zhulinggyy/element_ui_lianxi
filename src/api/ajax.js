/*
能发送ajax请求的函数模块
包装axios
函数的返回值是promise对象
axios.get()/post()返回的就是promise对象
 */
import axios from 'axios'

export default function ajax(url, data = {}, method = 'GET') {
  return new Promise(function(resolve, reject) {
    let promise
    // 执行异步ajax请求
    if (method === 'GET') {
      promise = axios.get(url, { params: data })
    } else {
      promise = axios.post(url, data)
    }
    promise.then(response => {
      // 如果成功了, 调用resolve(response.data)
      resolve(response.data)
    }).catch(error => {
      // 如果失败了, 提示请求后台出错
      alert('请求错误: ' + error.message)
    })
  })
}

