// IconToggle.tsx
import React, { useState } from 'react';
import {  FaPlus, FaMinus } from 'react-icons/fa'; // Import your font icons

const IconToggle: React.FC = () => {
  const [isHovered, setIsHovered] = useState<boolean>(false); 

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered ? <FaMinus /> : <FaPlus/>}
    </div>
  );
}

export default IconToggle;
