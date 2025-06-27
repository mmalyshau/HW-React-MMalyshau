import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import { OrderList } from '@entities/orderList/OrderList';

jest.mock('@features/orderedProduct/OrderedProduct', () => ({
  OrderedProduct: (props: { item: unknown }) => <div data-testid="order-card" data-item={JSON.stringify(props.item)} />,
}));

jest.mock('@shared/hooks/useAppSelector', () => ({
  useAppSelector: jest.fn(),
}));

const mockStore = configureMockStore();
const useAppSelectorMock = jest.requireMock('@shared/hooks/useAppSelector').useAppSelector;

describe('OrderList Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render empty cart message when nothing was added to the cart', () => {
    useAppSelectorMock.mockReturnValue([]);
    
    render(
      <Provider store={mockStore({})}>
        <OrderList />
      </Provider>
    );

    expect(screen.getByText("You haven't added anything to your cart")).toBeInTheDocument();
    expect(screen.queryByTestId('order-card')).not.toBeInTheDocument();
  });

  it('renders orderedProduct components when cart has items', () => {
    const mockCartItems = [
      { Product: { id: 1, name: 'Product 1' }, quantity: 2 },
      { Product: { id: 2, name: 'Product 2' }, quantity: 1 },
    ];
    
    useAppSelectorMock.mockReturnValue(mockCartItems);

    render(
      <Provider store={mockStore({})}>
        <OrderList />
      </Provider>
    );

    const orderCards = screen.getAllByTestId('order-card');
    expect(orderCards).toHaveLength(mockCartItems.length);
    
    mockCartItems.forEach((item, index) => {
      expect(orderCards[index]).toHaveAttribute('data-item', JSON.stringify(item));
    });
    
    expect(screen.queryByText("You haven't added anything to your cart")).not.toBeInTheDocument();
  });

  it('passes correct props to OrderCard components', () => {
    const mockCartItem = { Product: { id: 3, name: 'Test Product' }, quantity: 1 };
    useAppSelectorMock.mockReturnValue([mockCartItem]);

    render(
      <Provider store={mockStore({})}>
        <OrderList />
      </Provider>
    );

    const orderCard = screen.getByTestId('order-card');
    expect(orderCard).toHaveAttribute('data-item', JSON.stringify(mockCartItem));
  });
});