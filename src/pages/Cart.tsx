
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import CartItem from '@/components/CartItem';
import { useCart } from '@/context/CartContext';
import { ShoppingCart, ArrowLeft, CreditCard } from 'lucide-react';

const Cart = () => {
  const { cart, clearCart } = useCart();
  
  if (cart.items.length === 0) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <div className="mb-6 flex justify-center">
              <ShoppingCart className="h-24 w-24 text-muted-foreground" />
            </div>
            <h1 className="text-2xl font-bold mb-4">Your Cart is Empty</h1>
            <p className="text-muted-foreground mb-6">
              Looks like you haven't added any courses to your cart yet.
            </p>
            <Button asChild>
              <Link to="/courses">Browse Courses</Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 py-10">
        <div className="container px-4 md:px-6">
          <div className="flex items-center mb-8">
            <Button variant="ghost" asChild className="mr-4">
              <Link to="/courses">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Continue Shopping
              </Link>
            </Button>
            <h1 className="text-2xl font-bold">Your Cart</h1>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="border rounded-lg">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="font-semibold text-lg">
                      {cart.totalItems} {cart.totalItems === 1 ? 'Course' : 'Courses'} in Cart
                    </h2>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      onClick={clearCart}
                      className="text-muted-foreground hover:text-red-600"
                    >
                      Clear All
                    </Button>
                  </div>
                  
                  <div className="divide-y">
                    {cart.items.map((item) => (
                      <CartItem key={item.course.id} item={item} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <div className="border rounded-lg p-6">
                <h2 className="font-semibold text-lg mb-4">Order Summary</h2>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Original Price:</span>
                    <span>${cart.items.reduce((total, item) => total + item.course.price, 0).toFixed(2)}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Discounts:</span>
                    <span>
                      -${(
                        cart.items.reduce((total, item) => total + item.course.price, 0) - 
                        cart.items.reduce((total, item) => 
                          total + (item.course.discountPrice || item.course.price), 0)
                      ).toFixed(2)}
                    </span>
                  </div>
                  
                  <Separator />
                  
                  <div className="flex items-center justify-between font-semibold text-lg">
                    <span>Total:</span>
                    <span>${cart.totalPrice.toFixed(2)}</span>
                  </div>
                  
                  <Button className="w-full mt-4" size="lg" asChild>
                    <Link to="/checkout">
                      <CreditCard className="h-5 w-5 mr-2" />
                      Checkout
                    </Link>
                  </Button>
                  
                  <div className="mt-4 text-xs text-center text-muted-foreground">
                    <p>Secure Checkout</p>
                    <p>30-Day Money-Back Guarantee</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Cart;
