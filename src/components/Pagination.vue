<template>
    <nav aria-label="Page navigation">
        <ul class="inline-flex space-x-2">
            <li v-if="!isHeadNum(pageQuery)">
                <router-link :to="`/?page=${pageQuery-1}`">
                    <button class="flex items-center justify-center w-10 h-10 text-indigo-600 dark:text-indigo-100 dark:hover:text-indigo-600 transition-colors duration-150 rounded-full focus:shadow-outline hover:bg-indigo-100">
                        <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" fill-rule="evenodd"></path></svg>
                    </button>
                </router-link>
            </li>
            <li v-for="n in getPageNumArr" :key="n" @click="addPokemonPage(n)">
                <router-link :to="`/?page=${n}`">
                    <button :class="{'bg-indigo-100': n === pageQuery}" class="w-10 h-10 text-indigo-600 dark:text-indigo-100 dark:hover:text-indigo-600 transition-colors duration-150 rounded-full focus:shadow-outline hover:bg-indigo-100">{{ n }}</button>
                </router-link>
            </li>
            <li v-if="!isTailNum(pageQuery)">
                <router-link :to="`/?page=${pageQuery+1}`">
                    <button class="flex items-center justify-center w-10 h-10 text-indigo-600 dark:text-indigo-100 dark:hover:text-indigo-600 transition-colors duration-150 rounded-full focus:shadow-outline hover:bg-indigo-100">
                        <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" fill-rule="evenodd"></path></svg>
                    </button>
                </router-link>
            </li>
        </ul>
    </nav>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { usePokemonStore } from "../store/pokemon";
import { useRoute, useRouter } from 'vue-router'

const store = usePokemonStore()
const router = useRouter()
const route = useRoute()
const { getPageNum, getPageNumArr } = storeToRefs(store)
const pageQuery = Number(route.query.page)

const addPokemonPage = (page :number) :void => {
    store.addPokemonPage(page)
}

// 現在表示しているページが先頭のページかどうか
const isHeadNum = (pageNum :number) :boolean => {
    const pageNumArr = store.getPageNumArr
    return pageNum === pageNumArr[0]
}
// 現在表示しているページが末尾のページかどうか
const isTailNum = (pageNum :number) :boolean => {
    const pageNumArr = store.getPageNumArr
    return pageNum === pageNumArr[pageNumArr.length-1]
}

</script>