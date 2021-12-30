<template>
  <div class="bg-gray-100 dark:bg-gray-800 dark:text-gray-50">
    <Header />
      <div id="main">
        <div id="first" :class="{'hidden': store.page !== 'first'}">
          <div class="container px-5 py-24 mx-auto">
            <search-bar></search-bar>
            <!-- <div class="flex py-20">
              <div class="inline-block mr-3">
                <button class="z-10 block p-2 text-gray-700 bg-white border border-transparent rounded-md dark:text-white focus:border-blue-500 focus:ring-opacity-40 dark:focus:ring-opacity-40 focus:ring-blue-300 dark:focus:ring-blue-400 focus:ring dark:bg-gray-800 focus:outline-none">
                  <span class="mr-2">ステータス</span><fa icon="chevron-down" />
                </button>
                  <ul class="z-20 w-48 py-2 mt-2 bg-white rounded-md shadow-xl dark:bg-gray-800">
                    <li v-for="(s, i) in statuses" :key="i" @click="addStatus(s)" :class="{'bg-gray-500': store.selectedStatus === s }" class="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300">{{ s }}</li>
                  </ul>
              </div>
              <div class="inline-block">
                <button class="z-10 block p-2 text-gray-700 bg-white border border-transparent rounded-md dark:text-white focus:border-blue-500 focus:ring-opacity-40 dark:focus:ring-opacity-40 focus:ring-blue-300 dark:focus:ring-blue-400 focus:ring dark:bg-gray-800 focus:outline-none">
                  <span class="mr-2">並び順</span><fa icon="chevron-down" />
                </button>
                <ul class="z-20 w-48 py-2 mt-2 bg-white rounded-md shadow-xl dark:bg-gray-800">
                  <li v-for="t in SortTypes" @click="addSortType(t)" :class="{'bg-gray-500': t === store.sortType }" class="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300">{{ t }}</li>
                </ul>
              </div>
            </div> -->
            <div class="py-20 min-h-screen">
              <poke-cards></poke-cards>
            </div>
          </div>
          <Modal :class="{'hidden': store.isModalClosed}"/>
        </div>
        <div id="second" :class="{'hidden': store.page !== 'second'}">
          <div class="container px-5 py-24 mx-auto">
            <div class="py-20">
              <poke-cards></poke-cards>
            </div>
          </div>
        </div>
      </div>
    <Footer />
  </div>
</template>

<script setup lang="ts">
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
// const { selectedId } = storeToRefs(store)

// type Status = null | 'HP' | 'こうげき' | 'ぼうぎょ' | 'とくこう' | 'とくぼう' | 'すばやさ'
// const statuses = ['HP', 'こうげき', 'ぼうぎょ', 'とくこう', 'とくぼう', 'すばやさ']
// const addStatus = (status :Status) => {
//   store.addStatus(status)
// }

// type Sort = null | '降順' | '昇順'
// const SortTypes = ['降順', '昇順']
// const addSortType = (type :Sort) => {
//   store.addSortType(type)
// }

</script>