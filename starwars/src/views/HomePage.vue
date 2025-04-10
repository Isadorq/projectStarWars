<template>
    <div class="home-page">
      <h1>Bem-vindo à Página Inicial!</h1>
      <p>Esta é uma página de teste para verificar se o roteamento está funcionando</p>
      
      <div class="buttons">
        <button @click="showAlert" class="test-button">Testar Botão</button>
      </div>
  
      <div v-if="showMessage" class="message">
        ✅ Funcionou! O roteamento está configurado corretamente.
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'HomePage',
    data() {
      return {
        showMessage: false
      }
    },
    methods: {
      showAlert() {
        this.showMessage = true
        setTimeout(() => {
          this.showMessage = false
        }, 3000)
      }
    }
  }
  </script>
  
  <style scoped>
  .home-page {
    max-width: 800px;
    margin: 0 auto;
    padding: 2rem;
    text-align: center;
  }
  
  h1 {
    color: #2c3e50;
    margin-bottom: 1rem;
  }
  
  .test-button {
    background-color: #42b983;
    color: white;
    border: none;
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .test-button:hover {
    background-color: #3aa876;
  }
  
  .message {
    margin-top: 2rem;
    padding: 1rem;
    background-color: #f0f9eb;
    color: #67c23a;
    border-radius: 4px;
    animation: fadeIn 0.5s;
  }
  
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  </style>