<template>
    <div class="dark:bg-gray-800 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
        <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 dark:text-gray-50">Microdosing synth tattooed vexillologist</h1>
        <p class="mb-8 leading-relaxed">Meggings kinfolk echo park stumptown DIY, kale chips beard jianbing tousled. Chambray dreamcatcher trust fund, kitsch vice godard disrupt ramps hexagon mustache umami snackwave tilde chillwave ugh. Pour-over meditation PBR&amp;B pickled ennui celiac mlkshk freegan photo booth af fingerstache pitchfork.</p>
        <div class="sm:flex sm:items-start">
            <div class="w-1/2 mt-3 sm:mt-0 sm:ml-4 sm:text-left">
                <div class="container mx-auto flex py-24 items-center justify-center flex-col">
                    <img class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" :src="`/src/assets/thumbnails/${adjustedPokeId(store.selectedId)}.png`">
                    <div class="lg:w-2/3 w-full">
                        <div class="flex justify-start">
                            <ul class="flex border-b">
                                <li class="-mb-px mr-1">
                                    <a class="bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-700 font-semibold" href="#">Active</a>
                                </li>
                                <li class="mr-1">
                                    <a class="bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold" href="#">Tab</a>
                                </li>
                                <li class="mr-1">
                                    <a class="bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold" href="#">Tab</a>
                                </li>
                                <li class="mr-1">
                                    <a class="bg-white inline-block py-2 px-4 text-gray-400 font-semibold" href="#">Tab</a>
                                </li>
                            </ul>
                        </div>
                        <div>い</div>
                        <div>う</div>
                        <div>え</div>
                    </div>
                </div>
            </div>
            <Chart class="w-1/2" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { usePokemonStore } from "../../store/pokemon";
import { useRoute, useRouter } from 'vue-router'
import Chart from "../Chart.vue"
const router = useRouter()
const route = useRoute()
const store = usePokemonStore()

// const pokeId = parseInt(route.params.id)
const adjustedPokeId = ((id :number) :string => {
    return String(id).padStart(3, '0')
})

</script>