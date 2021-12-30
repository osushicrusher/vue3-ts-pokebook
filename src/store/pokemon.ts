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

type Page = 'first' | 'second' | 'third'
type Status = null | 'HP' | 'こうげき' | 'ぼうぎょ' | 'とくこう' | 'とくぼう' | 'すばやさ'
type Sort = null | '降順' | '昇順'

// defineStore 関数を用いてストアを作成する
// 第一引数 "todos" はアプリケーション全体でストアを特定するためのユニークキー
export const usePokemonStore = defineStore("pokemon", {
  // State は初期値を返す関数を定義する
  state: () => {
    return {
      pokemon: {} as Pokemon,
      pokemons: [] as Pokemon[],
      searchText: '',
      selectedId: 1,
      isModalClosed: true,
      page: "first" as Page,
      selectedStatus: null as Status,
      sortType: null as Sort 
    }
  },
  // getters は state 及び他の getter へのアクセスが可能
  // getter は全て computed 扱いになるため、引数に応じて結果を差し替える場合は関数を戻す
  getters: {
    filteredPokemonsByName(state) :Pokemon[] {
      const txt = state.searchText
      const katakanaTxt = txt.replace(/[\u3042-\u3093]/g, m=>String.fromCharCode(m.charCodeAt(0) + 96))
      return state.pokemons.filter(p => txt === p.name.japanese.substr(0, txt.length) || katakanaTxt === p.name.japanese.substr(0, txt.length))
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
    }
    // findPokemon(state) {
    //   return (id: number): TODO => {
    //     const todo = state.todos.find((todo) => todo.id === id);
    //     if (todo === undefined) throw new Error("todo not found");

    //     return todo;
    //   };
    // },
    // finishedTodos(state) {
    //   return state.todos.filter((todo) => todo.finished);
    // },
    // unfinishedTodos(state) {
    //   return state.todos.filter((todo) => !todo.finished);
    // },
    // filteredTodos(state): TODO[] {
    //   switch (state.filter) {
    //     case "finished":
    //       return this.finishedTodos;
    //     case "unfinished":
    //       return this.unfinishedTodos;
    //     default:
    //       return this.todos;
    //   }
    // },
  },
  // mutations が存在しないので、State の更新は全て actions で行う
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
    changePage(page :Page) :void {
      this.page = page
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
    }
  }
});