import React, { useState, useEffect } from "react";

const Counter = () => {
	const [count, setCount] = useState(0);
	const [maxClicks, setMaxClicks] = useState(false);

	const handleClick = () => {
		setMaxClicks(false);
		setCount(count + 1);
	};

	useEffect(()=>{
		if (count === 20) {
			setMaxClicks(true);
			setCount(0);
		}
	}, [count]);
    
	return (
		<>
			<p className="counter-title content" data-testid="counter">This is a counter that I have created using useState() and useEffect(). Clicking the counter too many times will cause a message to be displayed and the counter to reset.</p>

			<div className="counter">
				<h5  className="counter-subtitle">Click the button below and see what happens when you reach 20!</h5>
				<div className="btn-div">
					<button data-testid="button" className="counter-btn" onClick={handleClick}>Click me</button>
				</div>
		
				<p data-testid="count" className="counter-subtitle">You have clicked this button {count} times.</p>
				<div>{maxClicks?<p className="counter-subtitle">You have clicked the button too many times, the counter has reset.</p>:<div></div>}</div>
			</div>
		</>
	);
};

export default Counter;