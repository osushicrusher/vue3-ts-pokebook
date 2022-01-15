import { defineStore } from "pinia";

type Names = {
  english: string
  japanese: string
  chinese: string
  french: string
}

type Base = {
  HP: number
  Attack: number
  Defense: number
  SpAttack: number
  SpDefense: number
  Speed: number
}

type Pokemon = {
  id: number
  name: Names
  type: string[]
  base: Base
}

type Status = null | 'HP' | 'こうげき' | 'ぼうぎょ' | 'とくこう' | 'とくぼう' | 'すばやさ'
type Sort = null | '降順' | '昇順'

export const usePokemonStore = defineStore("pokemon", {
  state: () => {
    return {
      pokemon: {} as Pokemon,
      pokemons: [] as Pokemon[],
      searchText: '',
      selectedId: 1,
      isModalClosed: true,
      pokemonPage: 1,
      selectedStatus: null as Status,
      sortType: null as Sort,
      perPage: 20
    }
  },
  getters: {
    // ポケモン匹数を返す
    getPokemonsLen(state) :number {
      if(state.searchText === '') return state.pokemons.length
      return 1
    },
    // 選択されたポケモンIDを返す
    findSelectedId(state) {
      return state.selectedId
    },
    // selectedIdから、選択されたポケモンを返す
    findSelectedPokemon(state) :Pokemon {
      return state.pokemons.filter(p => p.id === this.findSelectedId)[0]
    },
    // 選択されたポケモンのステータスを返す
    findSelectedPokemonStatus() :Base {
      return this.findSelectedPokemon.base
    },
    // 名前検索で表示する(未入力の場合はperPage分表示させる)
    filteredPokemonsByName(state) :Pokemon[] {
      const pokemons = state.pokemons
      const txt = state.searchText
      const perPage = state.perPage
      if(txt === '') return pokemons.slice(0, perPage)
      const katakanaTxt = txt.replace(/[\u3042-\u3093]/g, m=>String.fromCharCode(m.charCodeAt(0) + 96))
      const res = pokemons.filter(p => txt === p.name.japanese.substr(0, txt.length) || katakanaTxt === p.name.japanese.substr(0, txt.length))
      // return res.slice(perPage*state.pokemonPage-1, perPage*perPage)
      return res.slice(0, perPage)
    },
    // 表示ポケモン数からページネーションに必要なページ数を取得
    getPageNum(state) :number {
      const perPage = state.perPage
      return Math.ceil(this.getPokemonsLen / perPage)
    },
    // 1〜「ページネーションに必要なページ数」までを要素とする配列を返す
    getPageNumArr() :number[] {
      return [...Array(this.getPageNum)].map((_, i) => i+1);
    },
    filteredPokemonsByConditions(state) :Pokemon[] {
      return state.pokemons.sort((a, b) => {
        let sumA = 0
        let sumB = 0
        if(this.selectedStatus === 'HP'){
          sumA = a.base.HP
          sumB = b.base.HP
        }
        else if(this.selectedStatus === 'こうげき') {
          sumA = a.base.Attack
          sumB = b.base.Attack
        }
        else if(this.selectedStatus === 'ぼうぎょ') {
          sumA = a.base.Defense
          sumB = b.base.Defense
        }
        else if(this.selectedStatus === 'とくこう') {
          sumA = a.base.SpAttack
          sumB = b.base.SpAttack
        }
        else if(this.selectedStatus === 'とくぼう') {
          sumA = a.base.SpDefense
          sumB = b.base.SpDefense
        }
        else if(this.selectedStatus === 'すばやさ') {
          sumA = a.base.Speed
          sumB = b.base.Speed
        }
        if(sumA > sumB) return 1
        else return -1
      })
    },
    findPerPage(state) {
      return state.perPage
    }
  },
  actions: {
    addPokemon(pokemon: Pokemon) :void {
      this.pokemon = pokemon
    },
    addPokemons(pokemons: Pokemon[]) :void {
      this.pokemons = pokemons
    },
    addSearchText(text: string) :void {
      this.searchText = text
    },
    addSelectedId(id :number) :void {
      this.selectedId = id
    },
    toggleModal() :void {
      this.isModalClosed = !this.isModalClosed
    },
    addStatus(status :Status) :void {
      this.selectedStatus = status
    },
    addSortType(type :Sort) :void {
      if(this.sortType === type) {
        this.sortType = null
        return
      }
      this.sortType = type
    },
    addPokemonPage(page :number) :void {
      this.pokemonPage = page
    }
  }
});