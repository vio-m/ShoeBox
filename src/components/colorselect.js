import './colorselect.css'
import { useState } from 'react';

export function ColorSelect() {
    const [selectedColor, setSelectedColor] = useState(null);
    function handleColorSelect(event) {
        setSelectedColor(event.target.value);
        //console.log("color: ", event.target.value)
    }

    return (

        <div className="color-select-container">
            <div className='color-select-title'>COLOR</div>
            <div className='color-select-choices'>
                <label>
                    <input type="radio" name="color" value="red" onChange={handleColorSelect} />
                    <div className="color-option red"></div>
                </label>
                <label>
                    <input type="radio" name="color" value="blue" onChange={handleColorSelect} />
                    <div className="color-option blue"></div>
                </label>
                <label>
                    <input type="radio" name="color" value="green" onChange={handleColorSelect} />
                    <div className="color-option green"></div>
                </label>
                <label>
                    <input type="radio" name="color" value="purple" onChange={handleColorSelect} />
                    <div className="color-option purple"></div>
                </label>
                <label>
                    <input type="radio" name="color" value="orange" onChange={handleColorSelect} />
                    <div className="color-option orange"></div>
                </label>
            </div>
        </div>
    
    )
}


/*

    {selectedColor && <p>You selected: {selectedColor}</p>}



*/