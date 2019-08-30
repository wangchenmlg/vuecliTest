<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <div>
      我的UA获取
      <a href="javascript:void(0)" @click="getData">click</a>
    </div>
    <div id="jqtst"></div>
  </div>
</template>

<script>
  import {getUaInf} from '../remote/getData'
  import {mapMutations} from 'vuex'
  import $ from 'jquery'
  export default {
    data(){
      return {

      }
    },
    mounted(){

    },
    methods:{
      getData : function(){
        getUaInf().then(function(data){
          $("#jqtst").html(data["User-agent"][0]);
        });
        this.add();
      },
      ...mapMutations({
        add: 'addNumTest' // 将 `this.add()` 映射为 `this.$store.commit('addNumTest')`
      })
    }
  }
</script>



