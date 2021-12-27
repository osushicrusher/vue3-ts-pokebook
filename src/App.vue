<template>
  <div class="bg-gray-100 dark:bg-gray-800 dark:text-gray-50">
    <Header />
      <div id="main">
        <div id="first" :class="{'hidden': store.page !== 'first'}">
          <audio id="test" preload="auto">
            <source src="./assets/bgm/bgm002.wav" type="audio/wav">
          </audio>
          <button @click="play()">再生<fa icon="play" /></button>
          <div>
            <search-bar></search-bar>
            <poke-cards></poke-cards>
          </div>
          <Modal :class="{'hidden': store.isModalClosed}"/>
        </div>
        <div id="second" :class="{'hidden': store.page !== 'second'}">
          
        </div>
        <div id="third" :class="{'hidden': store.page !== 'third'}">
          
        </div>
      </div>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { onMounted, reactive, ref, computed } from "vue";
import { usePokemonStore } from "./store/pokemon";
import PokeCards from "./components/PokeCards.vue"
import SearchBar from "./components/SearchBar.vue"
import Modal from "./components/Modal.vue"
import Chart from "./components/Chart.vue"
import Header from "./components/Header.vue"
import Footer from "./components/Footer.vue"

const store = usePokemonStore()
// let isModalClosed = ref(false)
const toggleModal = () => {
  store.toggleModal()
}
const { findPokemon, addPokemon, selectedId } = storeToRefs(store)

const play = () => {
  const test = document.getElementById('test')
  test.play()
}

</script>