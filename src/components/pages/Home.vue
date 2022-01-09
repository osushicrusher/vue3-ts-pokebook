<template>
    <div>
        <search-bar></search-bar>
        <div class="py-20 min-h-screen">
            <Pagination />
            <poke-cards></poke-cards>
        </div>
        <Pagination />
    </div>
</template>

<script setup lang="ts">
import { usePokemonStore } from "../../store/pokemon";
import PokeCards from "../PokeCards.vue"
import SearchBar from "../SearchBar.vue"
import Chart from "../Chart.vue"
import Pagination from "../Pagination.vue"

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