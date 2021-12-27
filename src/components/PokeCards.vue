<template>
    <div class="container px-5 py-24 mx-auto">
        <ul class="flex flex-wrap -m-2">
            <li v-for="p in filteredPokemons" :key="p.id" class="p-2 lg:w-1/6 md:w-1/4 sm:w-1/3 w-1/2" @click="setPokemon(p.id)">
                <div class="max-w-sm rounded overflow-hidden shadow-lg">
                    <img class="w-full" :src="`/src/assets/thumbnails/${adjustedPokeId(p.id)}.png`" alt="Sunset in the mountains">
                    <div class="px-6 pt-4 pb-2">
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2">{{ p.type[0] }}</span>
                        <span v-if="p.type[1]" class="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2">{{ p.type[1] }}</span>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { reactive, ref, computed } from "vue";
import { usePokemonStore } from "../store/pokemon";

import pokeJson from "../assets/pokedata/pokedex.json"

type Names = {
    english: string
    japanese: string
    chinese: string
    french: string
}

type Base = {
    HP: number
    Attack: number
    Defense: number
    SpAttack: number
    SpDefense: number
    Speed: number
}

type Pokemon = {
    id: number
    name: Names
    type: string[]
    base: Base
}

const store = usePokemonStore()
const { filteredPokemons } = storeToRefs(store)

let pokemons = ref([])
pokemons = pokeJson
store.addPokemons(pokemons)

const adjustedPokeId :number = ((id :number) => {
    return String(id).padStart(3, '0')
})

const setPokemon = (id :number) => {
    store.toggleModal()
    store.addSelectedId(id)
    store.addPokemon(pokemons[id-1])
}
</script>