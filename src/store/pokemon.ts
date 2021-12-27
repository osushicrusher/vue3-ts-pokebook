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
      page: "first" as Page
    }
  },
  // getters は state 及び他の getter へのアクセスが可能
  // getter は全て computed 扱いになるため、引数に応じて結果を差し替える場合は関数を戻す
  getters: {
    filteredPokemons(state) :Pokemon[] {
      const txt = state.searchText
      const katakanaTxt = txt.replace(/[\u3042-\u3093]/g, m=>String.fromCharCode(m.charCodeAt(0) + 96))
      return state.pokemons.filter(p => txt === p.name.japanese.substr(0, txt.length) || katakanaTxt === p.name.japanese.substr(0, txt.length))
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
    }
  }
});