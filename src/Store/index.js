import { configureStore, createSlice } from "@reduxjs/toolkit";

const formSlics = createSlice({
  name: "isLogIn",
  initialState: {
    isLogIn: false,
  },
  reducers: {
    toggle(state) {
      state.isLogIn = !state.isLogIn;
    },
  },
});

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
    isEmpy: true,
    total: 0,
  },
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      const exsistingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity++;
      state.isEmpy = false;
      if (!exsistingItem) {
        state.items.push({
          name: newItem.name,
          id: newItem.id,
          price: newItem.new_price,
          quantity: 1,
          totalPrice: newItem.new_price,
          image: newItem.image,
        });
        state.total = state.total + newItem.new_price;
      } else {
        exsistingItem.quantity++;
        exsistingItem.totalPrice = exsistingItem.totalPrice + newItem.new_price;
        state.total = state.items.reduce(
          (acc, curr) => acc + curr.totalPrice,
          0
        );
      }
    },
    removeFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.totalQuantity--;
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
      state.total = state.total - existingItem.price;
      if (state.items.length === 0) {
        state.isEmpy = true;
        state.total = 0;
      }
    },
  },
});

const store = configureStore({
  reducer: { form: formSlics.reducer, cart: cartSlice.reducer },
});

export const formAction = formSlics.actions;
export const cartAction = cartSlice.actions;

export default store;
