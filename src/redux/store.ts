import { configureStore } from '@reduxjs/toolkit'
import pokedexSlice from './slices/pokedex';

export const store = configureStore({
  reducer: {
    pokedex: pokedexSlice
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch