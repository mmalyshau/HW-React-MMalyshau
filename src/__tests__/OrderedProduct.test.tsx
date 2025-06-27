import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '@features/cartBtn/cartBtnSlice';
import type { TCartItem } from '@shared/types/TCartItem';
import { OrderedProduct } from '@features/orderedProduct/OrderedProduct';

const mockProduct = {
  id: '1',
  img: 'https://example.com/icecream.jpg',
  meal: 'Ice Cream',
  price: 5,
  category: 'Desserts',
  area: 'Italian',
  instructions: 'Variety of flavors'
};

const mockCartItem: TCartItem = {
  Product: mockProduct,
  amount: 1,
};

const renderWithStore = (item: TCartItem = mockCartItem) => {
  const preloadedState = {
    cart: [item],
  };
  const store = configureStore({ 
    reducer: { cart: cartReducer }, 
    preloadedState 
  });

  render(
    <Provider store={store}>
      <OrderedProduct item={item} />
    </Provider>
  );

  return store;
};

describe('OrderedProduct Component', () => {
  it('renders product info and quantity', () => {
    renderWithStore();
    
    expect(screen.getByText('Ice Cream')).toBeInTheDocument();
    expect(screen.getByText('$5 USD')).toBeInTheDocument();
    expect(screen.getByDisplayValue('1')).toBeInTheDocument();
    expect(screen.getByAltText('Ice Cream')).toHaveAttribute('src', 'https://example.com/icecream.jpg');
  });

  it('removes product on remove button click', () => {
    const store = renderWithStore();
    const removeButton = screen.getByRole('button', { name: /x/i });
    
    fireEvent.click(removeButton);
    
    const exists = store.getState().cart.find(item => item.Product.id === mockProduct.id);
    expect(exists).toBeUndefined();
  });

  it('updates amount on input change', () => {
    const store = renderWithStore();
    const input = screen.getByRole('spinbutton');
    
    fireEvent.change(input, { target: { value: '3' } });
    
    const updated = store.getState().cart.find(item => item.Product.id === mockProduct.id);
    expect(updated?.amount).toBe(3);
  });

  it('does not update amount when invalid value is entered', () => {
    const store = renderWithStore();
    const input = screen.getByRole('spinbutton');
    
    fireEvent.change(input, { target: { value: '0' } });
    
    const updated = store.getState().cart.find(item => item.Product.id === mockProduct.id);
    expect(updated?.amount).toBe(1); 
  });

  it('does not update amount when negative value is entered', () => {
    const store = renderWithStore();
    const input = screen.getByRole('spinbutton');
    
    fireEvent.change(input, { target: { value: '-1' } });
    
    const updated = store.getState().cart.find(item => item.Product.id === mockProduct.id);
    expect(updated?.amount).toBe(1); 
  });

  it('renders with different initial quantity', () => {
    const itemWithQuantity2: TCartItem = {
      Product: mockProduct,
      amount: 2,
    };
    
    renderWithStore(itemWithQuantity2);
    
    expect(screen.getByDisplayValue('2')).toBeInTheDocument();
  });
}); 