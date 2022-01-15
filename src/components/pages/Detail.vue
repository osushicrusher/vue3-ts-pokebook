<template>
    <div class="dark:bg-gray-800 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
        <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 dark:text-gray-50">
            <span>ID:{{findSelectedPokemon.id}}</span>
            {{ findSelectedPokemon.name.japanese }}
        </h1>
        <div class="sm:flex sm:items-center sm:justify-center py-24 sm:p-0">
            <div class="sm:w-1/2 mt-3 sm:mt-0 sm:ml-4 sm:text-left">
                <img class="md:w-2/3 w-5/6 object-cover object-center rounded mx-auto" alt="hero" :src="`/src/assets/thumbnails/${adjustedPokeId(store.selectedId)}.png`">
            </div>
            <Chart class="sm:w-1/2 py-24" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { usePokemonStore } from "../../store/pokemon";
import { useRoute, useRouter } from 'vue-router'
import Chart from "../Chart.vue"
const router = useRouter()
const route = useRoute()
const store = usePokemonStore()

const id = route.params.id
store.addSelectedId(Number(id))

const { findSelectedPokemon } = storeToRefs(store)

const adjustedPokeId = ((id :number) :string => {
    return String(id).padStart(3, '0')
})

</script>