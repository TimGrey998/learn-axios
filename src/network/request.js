import axios from "axios";

export function request(config) {
  // 1.创建axios实例
  const instance = axios.create({
    baseURL: "http://123.207.32.32:8000",
    timeout: 5000
  });

  // 2.1请求拦截
  // 为什么要有请求拦截
  // 1.config中有些信息不符合服务器要求
  // 2.每次发送网络请求，希望在界面显示加载图案
  // 3.某些网络请求(比如登录-token)，必须携带一些特殊信息
  instance.interceptors.request.use(
    config => {
      console.log(config);
      return config;
    },
    err => {
      console.log(err);
    }
  );

  // 2.2响应拦截
  instance.interceptors.response.use(
    res => {
      console.log(res);
      return res
    },
    err => {
      console.log(err);
    }
  );

  // 3.发送网络请求
  // instance(config.baseConfig).then(res => {
  //     config.success(res)
  // }).catch(err => {
  //     config.failure(err)
  // })
  
  // 如下代码直接返回Promise
  return instance(config);
}
