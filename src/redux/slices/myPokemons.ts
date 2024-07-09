import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { search } from "../../services/poke.api";
import {  PokemonItem, PokemonRequestParams } from '../../utils/types'

export interface MyPokemonState {
  pokemons: PokemonItem[],
  loading: boolean,
  paramNextPage?: PokemonRequestParams,
  error?: string
}

const initialState: MyPokemonState = {
  pokemons: [],
  loading: false,
  error: undefined,
  
}

export const findPokemonDetail = createAsyncThunk("myPokemon", async (params: PokemonRequestParams, thunkAPI)=>{
   const { paramNextPage }= thunkAPI.getState() as MyPokemonState
    const response = await search(paramNextPage || params);
  return response;
},)

export const counterSlice = createSlice({
  name: 'myPokemon',
  initialState,
  reducers: {},
  extraReducers: ((builder)=>{
    builder.addCase(findPokemonDetail.fulfilled, (state, action)=>{
      
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
    builder.addCase(findPokemonDetail.pending, (state)=>{
      state.loading = true;
      state.error= undefined;
    })
    builder.addCase(findPokemonDetail.rejected, (state)=>{
      state.loading = false;
    })
  })
})


export default counterSlice.reducer