<template>
    <div class="flex">
        <Dropdown :title="'ステータス'" :options="status" class="mr-5"/>
        <Dropdown :title="'並び順'" :options="sort"/>
    </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia"
import { usePokemonStore } from "../../store/pokemon"
import Dropdown from "../Dropdown.vue"
const store = usePokemonStore()
const { findSelectedPokemon } = storeToRefs(store)

type Status = null | 'HP' | 'こうげき' | 'ぼうぎょ' | 'とくこう' | 'とくぼう' | 'すばやさ'
type Sort = null | '降順' | '昇順'
const status :Status[] = ['HP', 'こうげき', 'ぼうぎょ', 'とくこう', 'とくぼう', 'すばやさ']
const sort :Sort[] = ['昇順', '降順']

</script>