import React,{ forwardRef} from 'react'

const IconButton = forwardRef(({ text, icon: Icon, onClick},ref) => {
    return (
      <button
        className="flex items-center justify-center gap-1.5 px-3 py-1.5 bg-[#F1F5F9] rounded-md"
        onClick={onClick}
        ref={ref}
      >
        {Icon && <Icon className="mr-1" />}
        <span>{text}</span>
      </button>
    );
  });

  IconButton.displayName = 'IconButton';

export default IconButton