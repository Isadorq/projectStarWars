<template>
    <div class="navBar">
      <p class="title">teste</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'MainPage',
  }
  </script>
  
  <style lang="scss">
  @import '@/assets/global.scss';

  body {
    background-color: #0B0C10;
  }

  .navBar{
    background-color: #3AA8F7;
    height: 100px;
    widht: auto;
    disply: flex;
    justify-items: center;
    border: 3B00020;
  }

  .title {
    display: flex;
    color: #F5F5F5;
  }

  </style>