<template>
  <div>
    Graph
    <div id="container">

    </div>
  </div>  
</template>

<script>
import { D3ForceGraph } from 'd3-force-graph'

export default {
  methods:{
    paintChart(){
      let $container = document.getElementById('container')
      // let testData = {
      //   nodes:[
      //     {
      //       id:'TestNodeA'
      //     },{
      //       id:'TestNodeB'
      //     }
      //   ],
      //   links:[{
      //     source:'TestNodeA',
      //     target:'TestNodeB'
      //   }]
      // }

      // let $container = document.getElementById('container')
      $container.innerText = '数据拉取中，请稍候……'
      this.$http.get('https://api.myjson.com/bins/pqc3q').then(data => {
        console.log(data)
          $container.innerText = ''
          let chart = new D3ForceGraph($container,data, {
              width: 1000,
              height: 1000,
              nodeSize: 1800,
              arrowSize: 600
          })
      })
      // this.$http.get('https://api.myjson.com/bins/pqc3q').then(res=>{
      //   console.log(res)
      // }).catch(err=>{
      //   console.log(err)
      // })
    }
  },
  mounted(){
    this.paintChart()
  }
}

</script>

<style>

</style>