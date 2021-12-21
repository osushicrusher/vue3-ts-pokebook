<template>
    <div class="PokeCards">
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
        <button @click="testfunc()">わろた</button>
    </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { reactive } from "vue";
import { usePokemonStore } from "../store/pokemon";

import pokeJson from "../assets/pokedata/pokedex.json"

const store = usePokemonStore()
const { findPokemon, addPokemon } = storeToRefs(store)

const testfunc = () => console.log('わろた')

const pokemons = reactive(pokeJson)
console.log(pokemons)



</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cards {
    display: flex;
    flex-wrap: wrap;
}
a {
    text-decoration: none;
}
.card {
    background-color: #fff;
    border: blueviolet 1px solid;
    border-radius: 10px;
    box-shadow: 0 0 8px rgba(0, 0, 0, .16);
    color: #212121;
    text-decoration: none;
    list-style: none;
    margin-left: 12px;
    margin-top: 12px;
    width:calc((100% - (12px * 3) )/ 3);
}
.card__header {
    position: relative;
    display: flex;
    flex-wrap: wrap;
}
.card__title {
    color: black;
    padding: .5rem .5rem 0;
}
.card__thumbnail {
    margin: 0;
    width: 100%;
    text-align: center;
}
.card__image {
}
.card__body {
  padding: .5rem;
}
.card__id {
    background-color: #fff;
    border: red 1px solid;
    border-radius: 50%;
    color: #000;
    font-weight: bold;
    height: 24px;
    position: absolute;
    top: -50%;
    left: -10%;
    line-height: 24px;
    text-align: center;
    width: 24px;
}
.card__text {
  font-size: .1rem;
}
.card__text + .card__text {
  margin-left: .5rem;
}
.card__text.-number {
  text-align: right;
}
.card__footer {
  padding: 4px;
  text-align: end;
}
.type {
    color: #fff;
}
.type.--grass {
    background-color: seagreen;
}
.type.--poison {
    background-color: slateblue;
}
.type.--fire {
    background-color: red;
}
.type.--water {
    background-color: royalblue;
}
.type.--normal {
    background-color: slategray;
}
.type.--electric {
    background-color: yellow;
}
.type.--ice {
    background-color: skyblue;
}
.type.--fighting {
    background-color: firebrick;
}
.type.--ground {
    background-color: tan;
}
.type.--flying {
    background-color: skyblue;
}
.type.--psychic {
    background-color: plum;
}
.type.--bug {
    background-color: palegreen;
}
.type.--rock {
    background-color: peru;
}
.type.--ghost {
    background-color: purple
}
.type.--dragon {
    background-color: rebeccapurple;
}
.type.--dark {
    background-color: black;
}
.type.--steal {
    background-color: darkgray;
}
.type.--fairy {
    background-color: violet;
}
@media screen and (min-width: 568px) {
    .card {
        width: 20%;
    }
}
@media screen and (min-width: 993px) {
    .card {
        width: 14%;
    }
}
</style>