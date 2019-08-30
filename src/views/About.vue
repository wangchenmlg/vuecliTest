<template>
  <div class="about">
    <img alt="Vue logo" src="../assets/logo.png" />
    <div>This is an about page and {{showDat}} [{{showNum}}] [{{numTest1}}] [{{numTest}}] </div>
  </div>
</template>


<script>
  import {mapState} from 'vuex'
  // import gbObj from '../store'
  export default {
    data(){
      return {
        showDat : "for the num test is"
      }
    },
    computed:{
      showNum: function (){
        return "110";
      },
      numTest1 () {
        return this.$store.state.numTest;
      },
      ...mapState({
        numTest : "numTest"
      })
    },
    mounted(){
    },
    methods:{
    }
  }
</script>
