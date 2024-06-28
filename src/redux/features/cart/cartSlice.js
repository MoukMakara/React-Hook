import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  total: 0
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      let existingProduct = state.items.some(
        (item) => item.id === action.payload.id
      );
      console.log(existingProduct);
      if (existingProduct) {
        state.items.map((item) => {
          if (item.id === action.payload.id) {
            item.qty += 1;
            // item.total += item.price;
          } else if (!item.id === action.payload.id) {
            state.items.push(action.payload);
            state.total += 1;
          }
        });
      } else {
        state.items.push(action.payload);
        state.total += 1;
      }
    },
    removeAll: () => {}
  }
});

// export action
export const { addToCart, removeAll } = cartSlice.actions;
// export reducer
export default cartSlice.reducer;
