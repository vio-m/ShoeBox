import './colorselect.css'
import { useState } from 'react';

export function ColorSelect({colors}) {
    const [selectedColor, setSelectedColor] = useState(colors[0]);

    function handleColorSelect(event) {
        setSelectedColor(event.target.value);
    }

    return (
        <div className="color-select-container">
            <div className='color-select-title'>COLOR</div>
            <div className='color-select-choices'>
                {colors && colors.map((color) => (
                    <label key={color} className={`color-option ${selectedColor === color ? "selected" : ""} ${color}`}>
                    <input
                        type="radio"
                        value={color}
                        checked={selectedColor === color}
                        onChange={handleColorSelect}
                    />
                    </label>
                ))}
            </div>
        </div>

    
    )
}


/*


*/