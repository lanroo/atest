import React from 'react';
import { HardHat, Shield } from 'lucide-react';

const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="relative">
        <Shield className="text-green-600 w-8 h-8" />
        <HardHat className="text-green-700 w-4 h-4 absolute -bottom-1 -right-1" />
      </div>
      <span className="font-bold text-2xl">
        <span className="text-green-700">A</span>
        <span className="text-green-600">test</span>
      </span>
    </div>
  );
};

export default Logo;