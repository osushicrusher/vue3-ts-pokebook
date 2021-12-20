<template>
  <button @click="getPokemon()">ポケモンゲットだぜ！</button>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { reactive } from "vue";
import { usePokemonStore } from "./store/pokemon";

// usePokemonStore を呼び出すだけで、グローバルストアへのアクセスが可能
const store = usePokemonStore()

// ストア内の State や Getters はリアクティブオブジェクトなので、
// リアクティブを失わずに取り出す場合は storeToRefs を用いる
const { filteredTodos, filter } = storeToRefs(store)


    const getPokemon = async () => {
      try {
        let data = await fetch('https://pokeapi.co/api/v2/pokemon/1')
        console.log(data.json()) //statusが OKか確認する。

        if(!data.ok) { //okというプロパティがありtrue/falseで返す
          throw Error('No data available')
        }
        // posts.value = await data.json()
      } catch (err) {
        // error.value = err.message
        // console.log(error.value);
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