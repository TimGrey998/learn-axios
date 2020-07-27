<template>
  <div>
    <button @click="getData">点击获得数据</button>
  </div>
</template>

<script>
import {request} from '../network/request'

export default {
  name: 'dataButton',
  data() {
      return {

      }
  },
  methods: {
    getData() {
       request({
           url: '/home/multidata'
       }).then(res => {
           console.log(res)
       }).catch(err => {
           console.log(err)
       })
    }
  },
};
</script>

<style>
</style>