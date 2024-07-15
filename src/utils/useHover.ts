import { useState } from 'react';

interface UseHoverReturn {
  handleMouseEnter: () => void;
  handleMouseLeave: () => void;
  isHovered: boolean;
}

const useHover = (): UseHoverReturn => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return {
    handleMouseEnter,
    handleMouseLeave,
    isHovered,
  };
};

export default useHover;
