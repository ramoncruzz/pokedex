import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { search } from "../../services/poke.api";
import {  PokemonItem, PokemonRequestParams } from '../../utils/types'
import  type { RootState } from '../store';

export interface MyPokemonState {
  pokemons: PokemonItem[],
  myPokemons: PokemonItem[],
  loading: boolean,
  paramNextPage?: PokemonRequestParams,
  error?: string
}

const initialState: MyPokemonState = {
  pokemons: [],
  myPokemons: [],
  loading: false,
  error: undefined,
  
}

export const fecthPokemons = createAsyncThunk("pokemons/search", async (params: PokemonRequestParams, thunkAPI)=>{
   const { pokemons }= thunkAPI.getState() as RootState
    const response = await search(pokemons.paramNextPage || params);
  return response;
},)

export const pokemonSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    capturePokemon : (state, action:PayloadAction<PokemonItem>)=>{
        if(!state.myPokemons.find(item=> item.name === action.payload.name))
            state.pokemons.push(action.payload)
    }
  },
  extraReducers: ((builder)=>{
    builder.addCase(fecthPokemons.fulfilled, (state, action)=>{
      
     const pokemonsInfoArray = action.payload.results;
     const ulrNext = action.payload.next;

     const regexResult = RegExp(/(offset=)(\d+).(limit=)(\d+)/gm).exec(ulrNext);
     if(regexResult) {
        const paramsNext: PokemonRequestParams = {
            offset: Number.parseInt(regexResult[2]),
            limit: Number.parseInt(regexResult[4]),
        };
        state.paramNextPage = paramsNext;
     } else
        state.paramNextPage = undefined

      state.pokemons.push(...pokemonsInfoArray)
      state.loading = false;
    })
    builder.addCase(fecthPokemons.pending, (state)=>{
      state.loading = true;
      state.error= undefined;
    })
    builder.addCase(fecthPokemons.rejected, (state)=>{
      state.loading = false;
    })
  })
})

export const { capturePokemon } = pokemonSlice.actions; 
export default pokemonSlice.reducer