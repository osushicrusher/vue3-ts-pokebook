<template>
    <div class="SearchBar">
        <input type="text" @keydown.enter="searchPokemon(toKatakana(pokemonName))" placeholder="ポケモンを検索しろ雑魚カスあほ" v-model="pokemonName">
        <a href="" class="btn btn-border" @click.prevent="searchPokemon(toKatakana(pokemonName))">🔎{{ this.$store.state.pokeJson }}</a>
        <div>{{ this.$store.state.noResultAlert }}</div>
    </div>
</template>

<script>
export default {
    name: "SearchBar",
    data() {
        return {
            pokemonName: ''
        }
    },
    created() {
        
    },
    computed: {
        toKatakana() {
            return str => {
                return str.replace(/[\u3041-\u3096]/g, match => {
                    const chr = match.charCodeAt(0) + 0x60;
                    return String.fromCharCode(chr);
                });
            }
        },
        
    },
    methods: {
        searchPokemon(pokemonName) {
            //検索バーが空白だった場合、処理を抜ける
            if(this.pokemonName == "") return
            this.$store.dispatch("searchPokemon", pokemonName)
            this.pokemonName = ''
            this.setShowFlg()
            console.log(this.$store.getters.showFlg)
        },
        setShowFlg() {
            this.$store.dispatch("setShowFlg", 2)
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.searchBar {
    text-align: center;
}
input[type="text"] {
    background-color: #EDF2F7;
    border-radius: 20px;
    box-shadow: inner 0 0 4px rgba(0, 0, 0, 0.2);
    padding: 10px;
    font-size: 1em;
    font-family:Arial, sans-serif;
    color: #000;
    border: solid 1px rgb(225, 255, 255);
    /* margin:0 0 20px; */
    width: 60%;
}
.btn,
a.btn,
button.btn {
  position: relative;
  display: inline-block;
  /* padding: 1rem 4rem; */
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  text-align: center;
  vertical-align: middle;
  text-decoration: none;
  color: #212529;
  line-height: 28px;
  transform: translate(-50%, -5%);
  height: 28px;
  width: 28px;
}
a.btn-border {
  border: 1px solid #000;
  border-radius: 50%;
  background: #fff;
}
a.btn-border:hover {
  color: #fff;
  background: #000;
}
</style>