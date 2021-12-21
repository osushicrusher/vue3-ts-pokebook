<template>
  <button @click="getPokemon()">ポケモンゲットだぜ！</button>
  <poke-cards></poke-cards>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { reactive } from "vue";
import { usePokemonStore } from "./store/pokemon";
import axios from "axios";

import PokeCards from "./components/PokeCards.vue"

// usePokemonStore を呼び出すだけで、グローバルストアへのアクセスが可能
const store = usePokemonStore()

// ストア内の State や Getters はリアクティブオブジェクトなので、
// リアクティブを失わずに取り出す場合は storeToRefs を用いる
const { findPokemon, addPokemon } = storeToRefs(store)

type Type = {
  name: string
  url: string
}

type Types = {
  slot: number
  type: Type
}

type Pokemon = {
  id: number
  name: string
  types: Type
}


    const getPokemon = async () => {
      try {
        let pokeData = await axios.get('https://pokeapi.co/api/v2/pokemon/1')
        pokeData = pokeData.data
        const pokeId :{id: number} =  {
          id: pokeData.id
        }
        const pokeName :{name: string} = {
          name: pokeData.name
        }
        const pokeTypes :{types: Types[]} = {
          types: pokeData.types
        }
        const pokemon = {
          ...pokeId,
          ...pokeName,
          ...pokeTypes
        }
        
        console.log(pokemon)
        store.addPokemon(pokemon)
        
        if(pokeData.status !== 200) { //okというプロパティがありtrue/falseで返す
          throw Error('No data available')
        }
      } catch (err) {
        console.log(err);
      }
    }


</script>

<style scoped>
.todo {
  user-select: none;
  cursor: pointer;
}
.todo.finished {
  text-decoration: line-through;
  color: gray;
}
</style>