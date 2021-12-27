<template>
    <div>
        <h3 class="card__title">
            {{ pokemon.name.japanese }}
        </h3>
        <span class="card__id">{{ pokemon.id }}</span>
        {{ pokemon.base.Attack }}
        {{ pokemon.base.Defense }}
        {{ pokemon.base.HP }}
        {{ pokemon.base.Speed }}
        <figure class="card__thumbnail">
            <img :src="setImageSrc(pokemon.id, 3)" alt="" class="card__image" width="50px" height="50px">
        </figure>
    </div>
</template>

<script>
export default {
    name: "Pokemon",
    data() {
        return {
            pokeData: [],
            pokemon: {}
        }
    },
    created() {
        console.log(this.$route.params['id'])
        const json = require('../assets/pokemon.json/pokedex.json')
        this.pokeData = json
        this.pokemon = this.pokeData[this.$route.params['id']-1]
        console.log(this.pokemon)
    },
    computed: {
        //Imageを設定するモジュールを返す
        setImageSrc() {
            return function(pokeId, length) {
                const adjustedPokeId = ('000' + pokeId).slice(-length)
                return require(`../assets/images/${adjustedPokeId}.png`)
            }
        },
    },
    methods: {
    }
}
</script>

<style scoped>
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
</style>