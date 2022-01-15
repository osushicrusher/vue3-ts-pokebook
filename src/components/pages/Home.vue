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
import Pagination from "../Pagination.vue"

const store = usePokemonStore()
const toggleModal = () => {
  store.toggleModal()
}
</script>