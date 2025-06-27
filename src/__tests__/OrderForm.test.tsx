import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { OrderForm } from '@ui/orderForm/OrderForm';
import { fireEvent, render, screen } from '@testing-library/react';

const mockUser = {
  uid: '367',
  email: 't367@example.com'
};

const mockCart = [
  {
    Product: { id: 6, price: 107 },
    amount: 3
  }
];

const renderWithProviders = (ui: React.ReactElement) => {
  const store = configureStore({
    reducer: {
      auth: () => ({ user: mockUser }),
      cart: () => mockCart
    }
  });

  return render(<Provider store={store}>{ui}</Provider>);
};

test('should submit the form and show alert with proper delivery data', async () => {
  const alertMock = jest.spyOn(window, 'alert').mockImplementation(() => {});
  global.fetch = jest.fn(() =>
    Promise.resolve({
      ok: true,
      json: () => Promise.resolve({}),
    })
  ) as jest.Mock;

  renderWithProviders(<OrderForm />);

  const streetInput = screen.getByLabelText('Street');
  const houseInput = screen.getByLabelText('House');
  const submitButton = screen.getByRole('button', { name: /Place Order/i });

  fireEvent.change(streetInput, { target: { value: 'Miu Miu' } });
  fireEvent.change(houseInput, { target: { value: '25' } });
  fireEvent.click(submitButton);

  await screen.findByText('Place Order'); 

  expect(alertMock).toHaveBeenCalledWith('Succsess! Your order is on the way to Miu Miu, house 25');
  alertMock.mockRestore();
});

