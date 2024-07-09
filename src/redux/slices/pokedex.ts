import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit';
import { detail } from "../../services/poke.api";
import { Pokemon } from '../../utils/types'

export interface PokeDexState {
  cache: Pokemon[],
  pokemon?: Pokemon,
  loading: boolean,
  error?: string
}

const initialState: PokeDexState = {
  cache: [],
  pokemon: undefined,
  loading: false,
  error: undefined,
  
}

export const findPokemonDetail = createAsyncThunk("pokedex/search", async (id:number, thunkAPI)=>{
  const response = await detail(id);
  return response;
},)

export const counterSlice = createSlice({
  name: 'pokedex',
  initialState,
  reducers: {
    findById: (state, action: PayloadAction<Pokemon>) => {
      const pokemonFound = state.cache.find(item => item.id=== action.payload.id)
      state.pokemon = pokemonFound;
    },
  },
  extraReducers: ((builder)=>{
    builder.addCase(findPokemonDetail.fulfilled, (state, action)=>{
      const datail = action.payload;
      if(state.cache.findIndex(item => item.id === datail.id)===-1)state.cache.push(datail)
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

export const {findById } = counterSlice.actions

export default counterSlice.reducer