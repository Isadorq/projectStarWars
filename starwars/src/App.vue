<script setup lang="ts">
import { computed } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

// const buttonRouteLabel = computed(() => 
//   router.currentRoute.value.name === 'devices' ? 
//   'Dispositivos' : 'Gerenciamento');

// const changePage = () => {
//   if (router.currentRoute.value.name === 'devices') {
//     router.push('/management');
//   } else {
//     router.push('/');
//   }  
// }
</script>

<template>
  <div class="app-container">
    <header>
      <button @click="changePage" class="nav-button">
        Teste {{ buttonRouteLabel }}
      </button>
    </header>
    
    <main>
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
.app-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
}

header {
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
}

.nav-button {
  padding: 0.5rem 1rem;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.nav-button:hover {
  background-color: #3aa876;
}

main {
  min-height: 80vh;
}
</style>