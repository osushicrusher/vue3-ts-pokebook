<template>
    <div class="inline-block text-left">
        <div>
            <button type="button" class="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500" id="menu-button" aria-expanded="true" aria-haspopup="true">
            {{ title }}
            <svg class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
            </button>
        </div>
        <div class="mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
            <ul role="none">
                <li v-for="(o, i) in options" :key="i" @click="addCondition(o)" :class="{'bg-gray-200': checkCondition(o)}" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">{{ o }}</li>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { defineProps } from "vue"
import { usePokemonStore } from "../store/pokemon";

type Status = '' | 'HP' | 'こうげき' | 'ぼうぎょ' | 'とくこう' | 'とくぼう' | 'すばやさ'
type Sort = '' | '降順' | '昇順'

const props = defineProps<{
    title: Status | Sort,
    options: Status[] | Sort[]
}>()
const store = usePokemonStore()
const { findSortCondition } = storeToRefs(store)

const checkCondition = (val :Status | Sort) => {
    return store.findSortCondition.status === val || store.findSortCondition.sort === val
}

// ソート条件を設定する
const addCondition = (val :Status | Sort) :void => {
    // すでに設定された項目の場合、設定を解除して返す
    if(store.findSortCondition.status === val) {
        store.findSortCondition.status = ''
        return
    }
    if(store.findSortCondition.sort === val) {
        store.findSortCondition.sort = ''
        return
    }
    // sortをセット
    if('降順' === val || '昇順' === val) {
        store.addConditionSort(val)
    } else {
        // statusをセット
        store.addConditionStatus(val)
    }
}

</script>