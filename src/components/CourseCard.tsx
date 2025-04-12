
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, Clock, ShoppingCart, CreditCard } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Course } from '@/data/coursesData';
import { useCart } from '@/context/CartContext';

interface CourseCardProps {
  course: Course;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  const { addToCart, purchasedCourses } = useCart();
  const navigate = useNavigate();
  
  const isOwned = purchasedCourses.some(c => c.id === course.id);
  
  const getLevelClass = (level: string) => {
    switch (level) {
      case 'beginner':
        return 'course-level-beginner';
      case 'intermediate':
        return 'course-level-intermediate';
      case 'advanced':
        return 'course-level-advanced';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };
  
  const handleCardClick = () => {
    navigate(`/course/${course.id}`);
  };
  
  const handleBuyNow = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(course);
    navigate('/cart');
  };
  
  return (
    <Card 
      className="course-card overflow-hidden h-full flex flex-col cursor-pointer hover:shadow-md transition-all duration-300 hover:-translate-y-1"
      onClick={handleCardClick}
    >
      <div className="aspect-video overflow-hidden relative">
        <img
          src={course.image}
          alt={course.title}
          className="object-cover w-full h-full transition-transform hover:scale-105"
        />
        <Badge className="absolute top-2 right-2">
          {course.category}
        </Badge>
      </div>
      <CardContent className="p-4 flex-grow">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
            <span className="text-sm font-medium">{course.rating}</span>
            <span className="text-xs text-muted-foreground ml-1">({course.reviewCount})</span>
          </div>
          <Badge variant="outline" className={getLevelClass(course.level)}>
            {course.level.charAt(0).toUpperCase() + course.level.slice(1)}
          </Badge>
        </div>
        <h3 className="font-semibold text-lg mb-2 line-clamp-2">
          {course.title}
        </h3>
        <p className="text-sm text-muted-foreground mb-2">
          {course.instructor}
        </p>
        <div className="flex items-center text-sm text-muted-foreground">
          <Clock className="h-4 w-4 mr-1" />
          <span>{course.duration}</span>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex items-center justify-between gap-2">
        <div className="flex items-center">
          {course.discountPrice ? (
            <>
              <span className="font-bold text-lg">${course.discountPrice.toFixed(2)}</span>
              <span className="text-sm text-muted-foreground line-through ml-2">
                ${course.price.toFixed(2)}
              </span>
            </>
          ) : (
            <span className="font-bold text-lg">${course.price.toFixed(2)}</span>
          )}
        </div>
        {isOwned ? (
          <Button 
            asChild 
            variant="outline" 
            size="sm"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <Link to={`/course-content/${course.id}`}>
              View Course
            </Link>
          </Button>
        ) : (
          <div className="flex gap-2">
            <Button 
              size="sm" 
              variant="outline"
              onClick={(e) => {
                e.stopPropagation();
                addToCart(course);
              }}
              className="flex-1"
            >
              <ShoppingCart className="h-4 w-4 mr-2" />
              Add
            </Button>
            <Button 
              size="sm"
              onClick={handleBuyNow}
              className="flex-1"
            >
              <CreditCard className="h-4 w-4 mr-2" />
              Buy
            </Button>
          </div>
        )}
      </CardFooter>
    </Card>
  );
};

export default CourseCard;
