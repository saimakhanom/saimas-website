import React, { useState } from "react";

const ColorPicker = () => {
	const [color, setColor] = useState("white");
	const divStyle = {backgroundColor: color};
	const colors =["blue", "pink", "yellow", "orange", "purple", "red", "green", "maroon", "aquamarine", "brown", "darkolivegreen", "darksalmon", "honeydew"];
	const changeColor = () => {
		const randomIndex = Math.floor(Math.random()*(colors.length-1));
		const newColor = colors[randomIndex];
		setColor(newColor);
	};
	return (
		<div>
			<p className="counter-title content">This is a Color Picker. Clicking the button will generate a random background color.</p>
			<div style={divStyle} className="color-div">
            
				<p className="color-sentence">The name of this color is <span className="color-name">{color}</span>.</p>
				<button className="color-btn" onClick={changeColor}>Change color</button>
			</div>
		</div>
	);
};

export default ColorPicker;