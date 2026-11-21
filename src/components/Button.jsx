import { Children } from "react";

export default function Button({
    Children,
    onClick,
    type='Button',
    className='button',
    disabled=false
}) {
    return(
        <Button
        type={type}
        classNmae={className}
        onClick={onClick}
        disabled={disabled}
        >
          {Children}  
        </Button>
    );
}