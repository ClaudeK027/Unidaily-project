import { configureStore } from '@reduxjs/toolkit';

// Ici, vous importerez vos reducers une fois qu'ils seront créés
// import exampleReducer from './slices/exampleSlice';

export const store = configureStore({
  reducer: {
    // example: exampleReducer,
  },
});

export default store;