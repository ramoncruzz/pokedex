import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit';
import { detail } from "../../services/poke.api";
import { Pokemon } from '../../utils/types'
import { RootState } from '../store';
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

export const getDetailPokemon = createAsyncThunk("pokedex/detail", async (id:number, thunkAPI)=>{
  const { pokedex } = thunkAPI.getState() as RootState;
  const pokemonFound = pokedex.cache.find(item => item.id=== id)
  
  if(pokemonFound)
    return pokemonFound

  const response = await detail(id);
  return response;
},)

export const pokedexSlice = createSlice({
  name: 'pokedex',
  initialState,
  reducers: {
    findById: (state, action: PayloadAction<Pokemon>) => {
      const pokemonFound = state.cache.find(item => item.id=== action.payload.id)
      state.pokemon = pokemonFound;
    },
  },
  extraReducers: ((builder)=>{
    builder.addCase(getDetailPokemon.fulfilled, (state, action)=>{
      const datail = action.payload;
      if(state.cache.findIndex(item => item.id === datail.id)===-1)state.cache.push(datail)
      state.loading = false;
    })
    builder.addCase(getDetailPokemon.pending, (state)=>{
      state.loading = true;
      state.error= undefined;
    })
    builder.addCase(getDetailPokemon.rejected, (state)=>{
      state.loading = false;
    })
  })
})

export const {findById } = pokedexSlice.actions

export default pokedexSlice.reducer