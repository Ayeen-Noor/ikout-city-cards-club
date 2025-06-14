
import React, { useState } from 'react';
import { toast } from 'sonner';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  type: 'coins' | 'diamonds' | 'vip' | 'avatar';
}

const CartPage = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: '1',
      name: '1000 Coins Pack',
      price: 4.99,
      quantity: 1,
      image: '/lovable-uploads/5da0dd28-0965-46da-952b-1a513a32e18d.png',
      type: 'coins'
    },
    {
      id: '2',
      name: '500 Diamonds',
      price: 19.99,
      quantity: 2,
      image: '/lovable-uploads/5381f256-01c9-4696-8ffe-99b59bc60c54.png',
      type: 'diamonds'
    },
    {
      id: '3',
      name: 'Monthly VIP',
      price: 9.99,
      quantity: 1,
      image: '/lovable-uploads/867f4545-9d44-407e-91dc-ed688ca0f25a.png',
      type: 'vip'
    }
  ]);

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity === 0) {
      removeItem(id);
      return;
    }
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id: string) => {
    setCartItems(items => items.filter(item => item.id !== id));
    toast.success('Item removed from cart');
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const handleCheckout = () => {
    toast.success('Proceeding to checkout...');
    // Here you would integrate with payment processing
  };

  if (cartItems.length === 0) {
    return (
      <div className="p-6">
        <div className="bg-slate-700/90 rounded-xl p-8 text-white backdrop-blur-sm text-center">
          <div className="text-6xl mb-4">🛒</div>
          <h2 className="text-2xl font-bold mb-4">Your Cart is Empty</h2>
          <p className="text-gray-300 mb-6">Add some items to your cart to get started!</p>
          <button
            onClick={() => toast.info('Browse our store to add items')}
            className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg transition-colors"
          >
            Browse Store
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="bg-slate-700/90 rounded-xl p-6 text-white backdrop-blur-sm">
        <h2 className="text-3xl font-bold mb-6 text-center">🛒 Shopping Cart</h2>
        
        {/* Cart Items */}
        <div className="space-y-4 mb-6">
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center justify-between p-4 bg-slate-600/50 rounded-lg">
              <div className="flex items-center space-x-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 rounded-lg"
                />
                <div>
                  <h3 className="font-bold">{item.name}</h3>
                  <p className="text-sm text-gray-300">${item.price.toFixed(2)} each</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="w-8 h-8 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center transition-colors"
                  >
                    -
                  </button>
                  <span className="w-8 text-center font-bold">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="w-8 h-8 bg-green-600 hover:bg-green-700 rounded-full flex items-center justify-center transition-colors"
                  >
                    +
                  </button>
                </div>
                
                <div className="text-right min-w-[80px]">
                  <div className="font-bold">${(item.price * item.quantity).toFixed(2)}</div>
                </div>
                
                <button
                  onClick={() => removeItem(item.id)}
                  className="text-red-400 hover:text-red-300 transition-colors"
                >
                  🗑️
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Cart Summary */}
        <div className="border-t border-gray-600 pt-6">
          <div className="flex justify-between items-center mb-4">
            <span className="text-xl font-bold">Total:</span>
            <span className="text-2xl font-bold text-green-400">${getTotalPrice().toFixed(2)}</span>
          </div>
          
          <div className="flex space-x-4">
            <button
              onClick={() => setCartItems([])}
              className="flex-1 bg-red-600 hover:bg-red-700 py-3 rounded-lg transition-colors"
            >
              Clear Cart
            </button>
            <button
              onClick={handleCheckout}
              className="flex-1 bg-green-600 hover:bg-green-700 py-3 rounded-lg transition-colors font-bold"
            >
              Checkout
            </button>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="mt-6 p-4 bg-slate-600/50 rounded-lg">
          <h3 className="font-bold mb-3">Accepted Payment Methods</h3>
          <div className="flex space-x-4 text-2xl">
            <span>💳</span>
            <span>📱</span>
            <span>🏦</span>
            <span>💰</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
