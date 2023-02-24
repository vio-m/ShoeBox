import './sizeselect.css'
import { useState } from "react";

export function SizeSelect({sizes}) {
    //const {sizes} = props.sizes
    //console.log("sizes: ", sizes)
    const [selectedSize, setSelectedSize] = useState(sizes[0]);//
    //console.log("selsiz", selectedSize)

    const handleSizeChange = (event) => {
        setSelectedSize(event.target.value);
        //console.log("selected size: ", event.target.value)
    };

    return (
        <div className="size-select-container">
            <div className='size-select-title'>SIZE</div>
            <div className='size-select-choices'>
                {sizes && sizes.map((size) => (
                    <label key={size} className={`size-option ${selectedSize === size ? "selected" : ""}`}>
                    <input
                        type="radio"
                        value={size}
                        checked={selectedSize === size}
                        onChange={handleSizeChange}
                    />
                    {size}
                    </label>
                ))}
            </div>
        </div>
    );
}








