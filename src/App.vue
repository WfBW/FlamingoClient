<template>
    <router-view>

    </router-view>
</template>

<script>
import io from 'socket.io-client';

export default {
  name: 'App',
  components: {
    
  },
  data(){
    return {
      socket: null
    }
  },
  methods: {
    
  },
  created(){
    this.socket = io.connect('http://192.168.1.127:3000');

  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Roboto|Roboto+Slab&display=swap');
  
  *{
    margin: 0px;
    padding: 0px;
    outline: none;

    font-family: 'Roboto';
  }
</style>
