
// Mock Course Data
const coursesData = [
  {
    id: '1',
    title: 'Complete Web Development Bootcamp',
    instructor: 'Sarah Johnson',
    price: 89.99,
    discountPrice: 19.99,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=600&auto=format&fit=crop',
    category: 'Web Development',
    level: 'beginner'
  },
  {
    id: '2',
    title: 'Advanced JavaScript: From Fundamentals to Frameworks',
    instructor: 'Michael Chen',
    price: 119.99,
    discountPrice: 49.99,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=600&auto=format&fit=crop',
    category: 'JavaScript',
    level: 'intermediate'
  },
  {
    id: '3',
    title: 'UI/UX Design Masterclass',
    instructor: 'Emma Rodriguez',
    price: 69.99,
    discountPrice: null,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=600&auto=format&fit=crop',
    category: 'Design',
    level: 'beginner'
  },
  {
    id: '4',
    title: 'Data Science & Machine Learning with Python',
    instructor: 'James Wilson',
    price: 149.99,
    discountPrice: 79.99,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop',
    category: 'Data Science',
    level: 'advanced'
  }
];

// Cart State Management
class CartManager {
  constructor() {
    this.loadCart();
    this.renderCart();
    this.setupEventListeners();
  }

  loadCart() {
    const savedCart = localStorage.getItem('courseCart');
    if (savedCart) {
      try {
        this.cart = JSON.parse(savedCart);
      } catch (error) {
        console.error('Failed to parse cart from localStorage:', error);
        this.initializeEmptyCart();
      }
    } else {
      this.initializeEmptyCart();
    }
  }

  initializeEmptyCart() {
    // For demo purposes, add some items to the cart initially
    this.cart = {
      items: [
        { courseId: '1', quantity: 1 },
        { courseId: '2', quantity: 1 }
      ],
      totalItems: 2,
      totalPrice: 69.98 // 19.99 + 49.99
    };
    this.saveCart();
  }

  saveCart() {
    localStorage.setItem('courseCart', JSON.stringify(this.cart));
    this.updateCartBadge();
  }

  updateCartBadge() {
    const badge = document.getElementById('cartBadge');
    if (badge) {
      badge.textContent = this.cart.totalItems;
    }
  }

  getCourseById(id) {
    return coursesData.find(course => course.id === id);
  }

  calculateTotals() {
    this.cart.totalItems = this.cart.items.reduce((total, item) => total + item.quantity, 0);
    
    let price = 0;
    let originalPrice = 0;
    
    this.cart.items.forEach(item => {
      const course = this.getCourseById(item.courseId);
      if (course) {
        originalPrice += course.price * item.quantity;
        price += (course.discountPrice || course.price) * item.quantity;
      }
    });
    
    this.cart.totalPrice = price;
    this.cart.originalPrice = originalPrice;
    this.cart.discount = originalPrice - price;
  }

  addToCart(courseId, quantity = 1) {
    const existingItemIndex = this.cart.items.findIndex(item => item.courseId === courseId);
    
    if (existingItemIndex !== -1) {
      this.cart.items[existingItemIndex].quantity += quantity;
    } else {
      this.cart.items.push({ courseId, quantity });
    }
    
    this.calculateTotals();
    this.saveCart();
    this.renderCart();
  }

  removeFromCart(courseId) {
    this.cart.items = this.cart.items.filter(item => item.courseId !== courseId);
    this.calculateTotals();
    this.saveCart();
    this.renderCart();
  }

  clearCart() {
    this.cart.items = [];
    this.calculateTotals();
    this.saveCart();
    this.renderCart();
  }

  renderCart() {
    const emptyCartEl = document.getElementById('emptyCart');
    const cartContentEl = document.getElementById('cartContent');
    const cartItemsEl = document.getElementById('cartItems');
    const itemCountEl = document.getElementById('itemCount');
    const originalPriceEl = document.getElementById('originalPrice');
    const discountsEl = document.getElementById('discounts');
    const totalPriceEl = document.getElementById('totalPrice');
    
    // Update totals first
    this.calculateTotals();
    
    // Show empty cart or cart content based on items
    if (this.cart.items.length === 0) {
      emptyCartEl.classList.remove('hidden');
      cartContentEl.classList.add('hidden');
      return;
    } else {
      emptyCartEl.classList.add('hidden');
      cartContentEl.classList.remove('hidden');
    }
    
    // Update summary information
    itemCountEl.textContent = this.cart.totalItems;
    originalPriceEl.textContent = `$${this.cart.originalPrice.toFixed(2)}`;
    discountsEl.textContent = `-$${this.cart.discount.toFixed(2)}`;
    totalPriceEl.textContent = `$${this.cart.totalPrice.toFixed(2)} USD`;
    
    // Clear existing cart items
    cartItemsEl.innerHTML = '';
    
    // Add cart items
    this.cart.items.forEach(item => {
      const course = this.getCourseById(item.courseId);
      if (course) {
        const cartItemTemplate = document.getElementById('cartItemTemplate');
        const clone = document.importNode(cartItemTemplate.content, true);
        
        const cartItem = clone.querySelector('.cart-item');
        cartItem.dataset.id = course.id;
        
        const imgEl = clone.querySelector('.cart-item-image img');
        imgEl.src = course.image;
        imgEl.alt = course.title;
        
        clone.querySelector('.cart-item-title').textContent = course.title;
        clone.querySelector('.cart-item-instructor').textContent = `by ${course.instructor}`;
        clone.querySelector('.rating-value').textContent = course.rating;
        
        const currentPriceEl = clone.querySelector('.current-price');
        currentPriceEl.textContent = `$${(course.discountPrice || course.price).toFixed(2)}`;
        
        const originalPriceEl = clone.querySelector('.original-price');
        if (course.discountPrice) {
          originalPriceEl.textContent = `$${course.price.toFixed(2)}`;
        } else {
          originalPriceEl.remove();
        }
        
        const removeBtn = clone.querySelector('.btn-remove');
        removeBtn.addEventListener('click', () => this.removeFromCart(course.id));
        
        cartItemsEl.appendChild(clone);
      }
    });
    
    // Initialize Lucide icons for newly added elements
    lucide.createIcons();
  }

  setupEventListeners() {
    const clearCartBtn = document.getElementById('clearCartBtn');
    if (clearCartBtn) {
      clearCartBtn.addEventListener('click', () => this.clearCart());
    }
  }
}

// Initialize cart when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new CartManager();
});
