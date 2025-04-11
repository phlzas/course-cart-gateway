
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
    level: 'beginner',
    duration: '62 hours',
    isFeatured: true
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
    level: 'intermediate',
    duration: '42 hours',
    isFeatured: true
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
    level: 'beginner',
    duration: '28 hours',
    isFeatured: false
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
    level: 'advanced',
    duration: '56 hours',
    isFeatured: true
  },
  {
    id: '5',
    title: 'iOS App Development with Swift',
    instructor: 'Alex Turner',
    price: 129.99,
    discountPrice: 59.99,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1592424002053-21f369ad7fdb?q=80&w=600&auto=format&fit=crop',
    category: 'Mobile Development',
    level: 'intermediate',
    duration: '38 hours',
    isFeatured: false
  },
  {
    id: '6',
    title: 'React Native for Mobile Developers',
    instructor: 'Lily Chen',
    price: 99.99,
    discountPrice: 39.99,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=600&auto=format&fit=crop',
    category: 'Mobile Development',
    level: 'intermediate',
    duration: '32 hours',
    isFeatured: false
  }
];

class CoursesManager {
  constructor() {
    this.initializeCart();
    this.renderCourses(coursesData);
    this.setupEventListeners();
  }
  
  initializeCart() {
    const savedCart = localStorage.getItem('courseCart');
    if (savedCart) {
      try {
        this.cart = JSON.parse(savedCart);
      } catch (error) {
        this.cart = { items: [], totalItems: 0, totalPrice: 0 };
      }
    } else {
      this.cart = { items: [], totalItems: 0, totalPrice: 0 };
    }
    this.updateCartBadge();
  }
  
  updateCartBadge() {
    const badge = document.getElementById('cartBadge');
    if (badge) {
      badge.textContent = this.cart.totalItems;
    }
  }
  
  saveCart() {
    localStorage.setItem('courseCart', JSON.stringify(this.cart));
    this.updateCartBadge();
  }
  
  addToCart(courseId) {
    const existingItemIndex = this.cart.items.findIndex(item => item.courseId === courseId);
    const course = coursesData.find(course => course.id === courseId);
    
    if (!course) return;
    
    if (existingItemIndex !== -1) {
      // Item already exists in cart
      alert('This course is already in your cart');
      return;
    }
    
    // Add new item
    this.cart.items.push({ courseId, quantity: 1 });
    this.cart.totalItems += 1;
    this.cart.totalPrice += (course.discountPrice || course.price);
    
    this.saveCart();
    alert('Course added to cart');
  }
  
  renderCourses(courses) {
    const coursesListEl = document.getElementById('coursesList');
    const coursesCountEl = document.getElementById('coursesCount');
    
    coursesListEl.innerHTML = '';
    coursesCountEl.textContent = `Showing ${courses.length} ${courses.length === 1 ? 'course' : 'courses'}`;
    
    if (courses.length === 0) {
      coursesListEl.innerHTML = `
        <div class="no-courses">
          <h3>No courses found</h3>
          <p>Try adjusting your search or filters</p>
        </div>
      `;
      return;
    }
    
    courses.forEach(course => {
      const template = document.getElementById('courseCardTemplate');
      const clone = document.importNode(template.content, true);
      
      // Set course data
      const courseCard = clone.querySelector('.course-card');
      courseCard.dataset.id = course.id;
      
      const imgEl = clone.querySelector('.course-card-image img');
      imgEl.src = course.image;
      imgEl.alt = course.title;
      
      clone.querySelector('.course-category').textContent = course.category;
      clone.querySelector('.course-title').textContent = course.title;
      clone.querySelector('.course-instructor').textContent = course.instructor;
      clone.querySelector('.rating-value').textContent = course.rating;
      clone.querySelector('.duration-icon + span').textContent = course.duration;
      
      // Set course level
      const levelEl = clone.querySelector('.course-level');
      levelEl.textContent = course.level.charAt(0).toUpperCase() + course.level.slice(1);
      levelEl.classList.add(`level-${course.level}`);
      
      // Set price
      const currentPriceEl = clone.querySelector('.current-price');
      currentPriceEl.textContent = `$${(course.discountPrice || course.price).toFixed(2)}`;
      
      const originalPriceEl = clone.querySelector('.original-price');
      if (course.discountPrice) {
        originalPriceEl.textContent = `$${course.price.toFixed(2)}`;
      } else {
        originalPriceEl.remove();
      }
      
      // Setup view course button
      const viewCourseBtn = clone.querySelector('.view-course-btn');
      viewCourseBtn.href = `course-details.html?id=${course.id}`;
      
      // Setup add to cart button
      const addToCartBtn = clone.querySelector('.btn-add-to-cart');
      addToCartBtn.addEventListener('click', () => this.addToCart(course.id));
      
      coursesListEl.appendChild(clone);
    });
    
    // Initialize Lucide icons for newly added elements
    lucide.createIcons();
  }
  
  filterCourses() {
    const searchInput = document.getElementById('courseSearch').value.toLowerCase();
    const categoryFilter = document.querySelector('input[name="category"]:checked').value;
    const levelFilter = document.querySelector('input[name="level"]:checked').value;
    const priceFilter = parseInt(document.getElementById('priceSlider').value);
    
    const filteredCourses = coursesData.filter(course => {
      // Search term filter
      const matchesSearch = searchInput === '' || 
        course.title.toLowerCase().includes(searchInput) ||
        course.instructor.toLowerCase().includes(searchInput) ||
        course.category.toLowerCase().includes(searchInput);
      
      // Category filter
      const matchesCategory = categoryFilter === 'all' || course.category === categoryFilter;
      
      // Level filter
      const matchesLevel = levelFilter === 'all' || course.level === levelFilter;
      
      // Price filter
      const coursePrice = course.discountPrice || course.price;
      const matchesPrice = coursePrice <= priceFilter;
      
      return matchesSearch && matchesCategory && matchesLevel && matchesPrice;
    });
    
    this.renderCourses(filteredCourses);
  }
  
  setupEventListeners() {
    // Search
    const searchButton = document.querySelector('.search-button');
    const searchInput = document.getElementById('courseSearch');
    
    searchButton.addEventListener('click', () => this.filterCourses());
    searchInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        this.filterCourses();
      }
    });
    
    // Category filters
    const categoryRadios = document.querySelectorAll('input[name="category"]');
    categoryRadios.forEach(radio => {
      radio.addEventListener('change', () => this.filterCourses());
    });
    
    // Level filters
    const levelRadios = document.querySelectorAll('input[name="level"]');
    levelRadios.forEach(radio => {
      radio.addEventListener('change', () => this.filterCourses());
    });
    
    // Price filter
    const priceSlider = document.getElementById('priceSlider');
    const priceOutput = document.getElementById('priceOutput');
    
    priceSlider.addEventListener('input', function() {
      priceOutput.textContent = `$${this.value}`;
    });
    
    priceSlider.addEventListener('change', () => this.filterCourses());
  }
}

// Initialize courses when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new CoursesManager();
});
