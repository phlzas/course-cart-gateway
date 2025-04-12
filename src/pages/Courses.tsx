
import React, { useState, useMemo } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SearchBar from '@/components/SearchBar';
import CourseCard from '@/components/CourseCard';
import { Slider } from '@/components/ui/slider';
import coursesData from '@/data/coursesData';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { 
  ChevronDown, 
  ChevronUp, 
  Star, 
  SlidersHorizontal, 
  XCircle 
} from 'lucide-react';
import { 
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

const Courses = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedLevel, setSelectedLevel] = useState('all');
  const [priceRange, setPriceRange] = useState([0, 150]);
  const [sortBy, setSortBy] = useState('featured');
  const [categoryOpen, setCategoryOpen] = useState(true);
  const [levelOpen, setLevelOpen] = useState(true);
  const [priceOpen, setPriceOpen] = useState(true);
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };
  
  // Extract unique categories
  const categories = useMemo(() => {
    const uniqueCategories = [...new Set(coursesData.map(course => course.category))];
    return uniqueCategories.sort();
  }, []);
  
  // Handle category selection
  const handleCategoryChange = (category: string) => {
    setSelectedCategories(prev => {
      if (prev.includes(category)) {
        return prev.filter(c => c !== category);
      } else {
        return [...prev, category];
      }
    });
  };
  
  // Filter courses based on all criteria
  const filteredCourses = useMemo(() => {
    return coursesData.filter(course => {
      // Search term filter
      const matchesSearch = searchTerm === '' || 
        course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.instructor.toLowerCase().includes(searchTerm.toLowerCase());
      
      // Category filter
      const matchesCategory = selectedCategories.length === 0 || 
        selectedCategories.includes(course.category);
      
      // Level filter
      const matchesLevel = selectedLevel === 'all' || course.level === selectedLevel;
      
      // Price filter (using the discounted price if available)
      const coursePrice = course.discountPrice || course.price;
      const matchesPrice = coursePrice >= priceRange[0] && coursePrice <= priceRange[1];
      
      return matchesSearch && matchesCategory && matchesLevel && matchesPrice;
    });
  }, [searchTerm, selectedCategories, selectedLevel, priceRange]);

  // Sort filtered courses
  const sortedCourses = useMemo(() => {
    const courses = [...filteredCourses];
    
    switch(sortBy) {
      case 'featured':
        return courses.sort((a, b) => {
          if (a.isFeatured && !b.isFeatured) return -1;
          if (!a.isFeatured && b.isFeatured) return 1;
          return 0;
        });
      case 'price-low':
        return courses.sort((a, b) => {
          const priceA = a.discountPrice || a.price;
          const priceB = b.discountPrice || b.price;
          return priceA - priceB;
        });
      case 'price-high':
        return courses.sort((a, b) => {
          const priceA = a.discountPrice || a.price;
          const priceB = b.discountPrice || b.price;
          return priceB - priceA;
        });
      case 'rating':
        return courses.sort((a, b) => b.rating - a.rating);
      case 'newest':
        return courses.sort((a, b) => parseInt(b.id) - parseInt(a.id));
      default:
        return courses;
    }
  }, [filteredCourses, sortBy]);

  // Reset all filters
  const resetFilters = () => {
    setSearchTerm('');
    setSelectedCategories([]);
    setSelectedLevel('all');
    setPriceRange([0, 150]);
    setSortBy('featured');
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <main className="flex-1 py-6">
        <div className="container px-4 md:px-6">
          <div className="mb-6">
            <h1 className="text-3xl font-bold tracking-tight mb-4 text-[#333333]">Browse All Courses</h1>
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
              <SearchBar onSearch={handleSearch} />
              <div className="flex items-center gap-2">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="border rounded-md p-2 bg-white text-sm"
                >
                  <option value="featured">Featured</option>
                  <option value="rating">Highest Rated</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="newest">Newest</option>
                </select>
                
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="md:hidden"
                  onClick={() => setShowMobileFilters(!showMobileFilters)}
                >
                  <SlidersHorizontal className="h-4 w-4 mr-2" />
                  Filters
                </Button>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Filters Sidebar - Desktop */}
            <div className={`space-y-4 ${showMobileFilters ? 'block' : 'hidden'} md:block`}>
              <div className="p-4 border rounded-lg bg-white shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="font-semibold text-[#333333]">Filters</h2>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={resetFilters}
                    className="text-[#00BFA6] hover:text-[#00a896] hover:bg-[#00BFA6]/10"
                  >
                    Reset
                  </Button>
                </div>
                
                <div className="space-y-4">
                  {/* Categories Filter */}
                  <Collapsible open={categoryOpen} onOpenChange={setCategoryOpen}>
                    <div className="pb-2 border-b">
                      <CollapsibleTrigger className="flex items-center justify-between w-full">
                        <h3 className="font-medium text-[#333333]">Categories</h3>
                        {categoryOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                      </CollapsibleTrigger>
                      
                      <CollapsibleContent className="pt-2 space-y-2">
                        {categories.map((category) => (
                          <div key={category} className="flex items-center space-x-2">
                            <Checkbox 
                              id={`category-${category}`} 
                              checked={selectedCategories.includes(category)}
                              onCheckedChange={() => handleCategoryChange(category)}
                            />
                            <Label
                              htmlFor={`category-${category}`}
                              className="text-sm cursor-pointer"
                            >
                              {category}
                            </Label>
                          </div>
                        ))}
                      </CollapsibleContent>
                    </div>
                  </Collapsible>
                  
                  {/* Level Filter */}
                  <Collapsible open={levelOpen} onOpenChange={setLevelOpen}>
                    <div className="pb-2 border-b">
                      <CollapsibleTrigger className="flex items-center justify-between w-full">
                        <h3 className="font-medium text-[#333333]">Level</h3>
                        {levelOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                      </CollapsibleTrigger>
                      
                      <CollapsibleContent className="pt-2">
                        <RadioGroup value={selectedLevel} onValueChange={setSelectedLevel}>
                          <div className="flex items-center space-x-2 mb-2">
                            <RadioGroupItem value="all" id="level-all" />
                            <Label htmlFor="level-all">All Levels</Label>
                          </div>
                          <div className="flex items-center space-x-2 mb-2">
                            <RadioGroupItem value="beginner" id="level-beginner" />
                            <Label htmlFor="level-beginner">Beginner</Label>
                          </div>
                          <div className="flex items-center space-x-2 mb-2">
                            <RadioGroupItem value="intermediate" id="level-intermediate" />
                            <Label htmlFor="level-intermediate">Intermediate</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="advanced" id="level-advanced" />
                            <Label htmlFor="level-advanced">Advanced</Label>
                          </div>
                        </RadioGroup>
                      </CollapsibleContent>
                    </div>
                  </Collapsible>
                  
                  {/* Price Filter */}
                  <Collapsible open={priceOpen} onOpenChange={setPriceOpen}>
                    <div className="pb-2 border-b">
                      <CollapsibleTrigger className="flex items-center justify-between w-full">
                        <h3 className="font-medium text-[#333333]">Price Range</h3>
                        {priceOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                      </CollapsibleTrigger>
                      
                      <CollapsibleContent className="pt-2 space-y-4">
                        <Slider
                          defaultValue={[0, 150]}
                          max={150}
                          step={1}
                          value={priceRange}
                          onValueChange={setPriceRange}
                          className="py-4"
                        />
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-700">${priceRange[0]}</span>
                          <span className="text-sm text-gray-700">${priceRange[1]}</span>
                        </div>
                      </CollapsibleContent>
                    </div>
                  </Collapsible>
                  
                  {/* Ratings Filter */}
                  <div className="pb-2">
                    <h3 className="font-medium text-[#333333] mb-2">Ratings</h3>
                    
                    <div className="space-y-2">
                      {[4, 3, 2, 1].map((rating) => (
                        <div key={rating} className="flex items-center space-x-2">
                          <Checkbox id={`rating-${rating}`} />
                          <Label
                            htmlFor={`rating-${rating}`}
                            className="text-sm flex items-center cursor-pointer"
                          >
                            {Array(rating).fill(0).map((_, i) => (
                              <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            ))}
                            {Array(5 - rating).fill(0).map((_, i) => (
                              <Star key={i} className="h-4 w-4 text-gray-300" />
                            ))}
                            <span className="ml-1">& Up</span>
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Mobile Filters Close Button */}
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full mt-4 md:hidden"
                  onClick={() => setShowMobileFilters(false)}
                >
                  <XCircle className="h-4 w-4 mr-2" />
                  Close Filters
                </Button>
              </div>
            </div>
            
            {/* Course Results */}
            <div className="lg:col-span-3">
              {sortedCourses.length === 0 ? (
                <div className="text-center py-12 bg-white rounded-lg shadow-sm">
                  <h3 className="text-xl font-medium text-[#333333]">No courses found</h3>
                  <p className="text-gray-600 mt-2">Try adjusting your search or filters</p>
                </div>
              ) : (
                <>
                  <p className="text-gray-600 mb-4">
                    Showing {sortedCourses.length} {sortedCourses.length === 1 ? 'course' : 'courses'}
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {sortedCourses.map((course) => (
                      <CourseCard key={course.id} course={course} />
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Courses;
