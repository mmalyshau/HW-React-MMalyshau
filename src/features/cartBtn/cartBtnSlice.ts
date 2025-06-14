import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TCartItem, TProduct } from "@types";

type CartState = TCartItem[];

const getInitialCartState = (): CartState => {
  try {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  } catch {
    return [];
  }
};

const initialState: CartState = getInitialCartState();

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (
      state,
      action: PayloadAction<{ product: TProduct; amount: number }>
    ) => {
      const { product, amount } = action.payload;
      const existingItem = state.find((item) => item.Product.id === product.id);
      if (existingItem) {
        existingItem.amount += amount;
      } else {
        state.push({ Product: product, amount });
      }
    },

    removeFromCart: (state, action: PayloadAction<string>) => {
      return state.filter((item) => item.Product.id !== action.payload);
    },

    updateCartItemAmount: (
      state,
      action: PayloadAction<{ productId: string; amount: number }>
    ) => {
      const item = state.find(
        (item) => item.Product.id === action.payload.productId
      );
      if (item) {
        item.amount = action.payload.amount;
      }
    },

    clearCartItems: () => {
      return [];
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  updateCartItemAmount,
  clearCartItems,
} = cartSlice.actions;

export default cartSlice.reducer;
