<template>
  <div class="container">
    <Vue3Lottie :animationData="CogWheelsJSON" :height="150" :width="150"/>
    <h1 id="title">
      Work In Progress...
    </h1>
  </div>
</template>

<style scoped>
  .container {
    display: flex;
    padding: 0 2rem;
    justify-content: center;
    align-items: center;
    max-height: 100vh;
    max-width: 100vw;
  }

  #title {
    font-family: 'Megrim', cursive;
    font-weight: 500;
  }
  @media screen and (min-width: 0px) {
    .container {
      flex-direction: column;
    }

    #title {
      text-align: center;
      font-size: 2.2rem;
    }
  }

  @media screen and (min-width: 540px) and (max-width: 767px) {
    .container {
      flex-direction: column;
    }

    #title {
      font-size: 2.2rem;
    }
  }

  @media screen and (min-width: 768px) {
    .container {
      flex-direction: row;
    }

    #title {
      font-size: 2.4rem;
    }
  }

  @media screen and (min-width: 1024px) {
    .container {
      flex-direction: row;
    }

    #title {
      font-size: 2.4rem;
    }
  }

  @media screen and (min-width: 1300px) {
    .container {
      flex-direction: row;
    }

    #title {
      font-size: 2.4rem;
    }
  }
  </style>

<script lang="ts">
  import { defineComponent } from 'vue'
  import { Vue3Lottie } from 'vue3-lottie'
  import 'vue3-lottie/dist/style.css'
  import CogWheelsJSON from '../assets/lottie/cogwheels.json'

  export default defineComponent({
  components: {
    Vue3Lottie,
  },
  data() {
    return {
      CogWheelsJSON,
    }
  },
})

</script>

