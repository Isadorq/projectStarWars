<template>
  <div class="navBar">
    <div class="logo">
      <img :src="require('@/assets/bb8.png')" alt="Logo BB-8" />
    </div>
  </div>

  <div class="main">
    <div class="containerMain">
    <p class="test">Justin Bieber</p>
  </div>
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
  background-color: #F8F8F8;
  margin: 0;
  padding: 0;
}

.navBar {
  background-color: #F26522;
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.logo img {
  width: 70px;
  height: auto;
}

.main {
  display: flex;
  justify-content: center;
  padding: 100px;
}

.containerMain{
  background-color: #B0B0B0;
  display: flex;
  justify-content: center;
  height: 200px;
  width: 100px;
  border: 2px solid #585858;
  border-radius: 5px;
}

.test {
  color: white;
}

</style>
