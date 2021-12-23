import { defineStore } from "pinia";

type FilterType = "all" | "finished" | "unfinished";

type Type = {
  name: string
  url: string
}

type Types = {
  slot: number
  type: Type
}

type Pokemon = {
  id: number
  name: string
  types: Type
}

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

type Pokemon2 = {
  id: number
  name: Names
  type: string[]
  base: Base
}


// defineStore 関数を用いてストアを作成する
// 第一引数 "todos" はアプリケーション全体でストアを特定するためのユニークキー
export const usePokemonStore = defineStore("pokemon", {
  // State は初期値を返す関数を定義する
  state: () => {
    return {
      pokemon: {} as Pokemon,
      pokemons: [] as Pokemon2[],
      searchText: '',
    }
  },
  // getters は state 及び他の getter へのアクセスが可能
  // getter は全て computed 扱いになるため、引数に応じて結果を差し替える場合は関数を戻す
  getters: {
    filteredPokemons(state) :Pokemon2[] {
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
    addPokemon(pokemon: Pokemon) {
      this.pokemon = pokemon
    },
    addPokemons(pokemons: Pokemon2[]) {
      this.pokemons = pokemons
    },
    addSearchText(text: string) {
      this.searchText = text
    }
    // toggleTodo(id: number) {
    //   const todo = this.findTodo(id);
    //   todo.finished = !todo.finished;
    // },
  },
});