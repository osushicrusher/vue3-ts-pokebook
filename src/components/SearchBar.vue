<template>
    <div class="text-center">
        <input
        type="text"
        @input="setPokeName"
        class="bg-white rounded-3xl p-3 text-black shadow-md border divide-solid border-black w-10/12 md:w-8/12 lg:w-6/12" 
        placeholder="ポケモンの名前を入力する"
        />
        <!-- <fa icon="search" class="search"/> -->
    </div>
</template>

<script setup lang="ts">
import { usePokemonStore } from "../store/pokemon";
const store = usePokemonStore()

const adjustedPokeId = ((id :number) :string => {
    return String(id).padStart(3, '0')
})

const toKatakana = (str :string) => {
    str.replace(/[\u3041-\u3096]/g, match => {
        const chr = match.charCodeAt(0) + 0x60
        return String.fromCharCode(chr)
    })
}

const setPokeName = ({ target } :any) :void => {
    store.addSearchText(target.value)
}

</script>

<style scoped>
input[type="text"] {
    border: solid 1px rgb(225, 255, 255);
}

</style>