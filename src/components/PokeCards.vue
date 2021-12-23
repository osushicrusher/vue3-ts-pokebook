<template>
    <div class="container px-5 py-24 mx-auto">
        <ul class="flex flex-wrap -m-2">
            <li v-for="p in filteredPokemons" :key="p.id" class="p-2 lg:w-1/6 md:w-1/4 sm:w-1/3 w-1/2">
                <div class="max-w-sm rounded overflow-hidden shadow-lg">
                    <img class="w-full" :src="`/src/assets/thumbnails/${adjustedPokeId(p.id)}.png`" alt="Sunset in the mountains">
                    <div class="px-6 pt-4 pb-2">
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                    </div>
                </div>
            </li>
        </ul>
        <!-- {{ this.$store.state }}
        {{ this.$store.getters }} -->
        <!-- <button @click="console()">確認する</button>
        <ul v-if="getShowFlg === 1" class="cards">
            <li v-for="card in pokeData" :key="card.id" class="card">
                <router-link :to="{name: 'pokeDetail', params:{id:card.id}}">
                    <div class="card__header">
                        <h3 class="card__title">
                        {{ card.name.japanese }}
                        </h3>
                        <span class="card__id">{{ card.id }}</span>
                    </div>
                    <div class="card__body">
                        <figure class="card__thumbnail">
                            <img :src="setImageSrc(card.id, 3)" alt="" class="card__image" width="50px" height="50px">
                        </figure>
                    </div>
                    <div class="card__footer">
                        <span class="card__text type" :class="getTypeForStyle(card.type[0])">{{ translateTypeInJa(card.type[0]) }}</span>
                        <span class="card__text type" :class="getTypeForStyle(card.type[1])" v-if="card.type[1]">{{ translateTypeInJa(card.type[1]) }}</span>
                    </div>
                </router-link>
            </li>
        </ul>
        <div v-if="getShowFlg === 2" class="card">
            <a href="">
                <div class="card__header">
                    <h3 class="card__title">
                    {{ searchedPokemon[0].name.japanese }}
                    </h3>
                    <span class="card__id">{{ searchedPokemon[0].id }}</span>
                </div>
                <div class="card__body">
                    <figure class="card__thumbnail">
                        <img :src="setImageSrc(searchedPokemon[0].id, 3)" alt="" class="card__image" width="50px" height="50px">
                    </figure>
                </div>
            </a>
        </div>
        <ul v-if="getShowFlg === 3" class="cards">
            <li v-for="card in filteredPokemonByTag" :key="card.id" class="card">
                <a href="">
                    <div class="card__header">
                        <h3 class="card__title">
                        {{ card.name.japanese }}
                        </h3>
                        <span class="card__id">{{ card.id }}</span>
                    </div>
                    <div class="card__body">
                        <figure class="card__thumbnail">
                            <img :src="setImageSrc(card.id, 3)" alt="" class="card__image" width="50px" height="50px">
                        </figure>
                    </div>
                    <div class="card__footer">
                        <span class="card__text type" :class="getTypeForStyle(card.type[0])">{{ translateTypeInJa(card.type[0]) }}</span>
                        <span class="card__text type" :class="getTypeForStyle(card.type[1])" v-if="card.type[1]">{{ translateTypeInJa(card.type[1]) }}</span>
                    </div>
                </a>
            </li>
        </ul> -->
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

type Pokemon2 = {
    id: number
    name: Names
    type: string[]
    base: Base
}

const store = usePokemonStore()
const { findPokemon, addPokemon, addPokemons, filteredPokemons } = storeToRefs(store)

let pokemons = ref([])
pokemons = pokeJson
console.log(pokemons)
store.addPokemons(pokemons)

const adjustedPokeId :number = ((id :number) => {
    return String(id).padStart(3, '0')
})


    // const sortTodo = computed(() => state.todos.sort((a, b) => {
    //   return b.createdAt.getTime() - a.createdAt.getTime()
    // }))
</script>