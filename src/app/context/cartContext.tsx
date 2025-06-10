import React, {
    useState,
    createContext,
    useEffect,
    ReactNode,
} from 'react';

import { TCartItem, TProduct } from '@types';

interface CartContextType {
    cart: TCartItem[];
    addToCart: (product: TProduct, amount: number) => void;
}

interface CartProviderProps {
    children: ReactNode;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
    const [cart, setCart] = useState<TCartItem[]>(() => {
        try {
            const storedCart = localStorage.getItem('cart');
            return storedCart ? JSON.parse(storedCart) : [];
        } catch {
            return [];
        }
    });

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    const addToCart = (product: TProduct, amount: number) => {
        setCart((prevCart) => {
            const existingItem = prevCart.find(item => item.Product.id === product.id);
            if (existingItem) {
                return prevCart.map(item =>
                    item.Product.id === product.id
                        ? { ...item, amount: item.amount + amount }
                        : item
                );
            } else {
                return [...prevCart, { Product: product, amount }];
            }
        });
    };

    return (
        <CartContext.Provider value={{ cart, addToCart}}>
            {children}
        </CartContext.Provider>
    );
};

export { CartContext, CartProvider };
