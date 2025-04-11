
import React from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Course } from '@/data/coursesData';
import { useCart } from '@/context/CartContext';

interface CartItemProps {
  item: {
    course: Course;
    quantity: number;
  };
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { removeFromCart } = useCart();
  const { course } = item;
  
  return (
    <div className="flex items-center gap-4 py-4 border-b">
      <div className="h-20 w-20 overflow-hidden rounded">
        <img
          src={course.image}
          alt={course.title}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="font-medium text-base truncate">{course.title}</h3>
        <p className="text-sm text-muted-foreground">{course.instructor}</p>
        <div className="flex items-center mt-1">
          <p className="text-sm">
            <span className="font-medium">
              ${(course.discountPrice || course.price).toFixed(2)}
            </span>
            {course.discountPrice && (
              <span className="ml-2 text-muted-foreground line-through text-xs">
                ${course.price.toFixed(2)}
              </span>
            )}
          </p>
        </div>
      </div>
      <Button
        variant="ghost"
        size="icon"
        className="h-8 w-8 text-muted-foreground"
        onClick={() => removeFromCart(course.id)}
        aria-label="Remove item"
      >
        <X className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default CartItem;
