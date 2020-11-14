import React, { useState } from "react";

function Counter() {
	const [count, setCount] = useState(0);
	const [isHappy, setIsHappy] = useState(true);
	const increment = () => {
		setCount(count + 1);
		toggleIsHappy();
	};
	// const test =
	const toggleIsHappy = () => {
		(count + 1) % 2 === 0 ? setIsHappy(true) : setIsHappy(false);
		console.log(count);
	};

	return (
		<div>
			<h1>{count}</h1>
			<h1>{isHappy ? ":)" : ":("}</h1>
			<button onClick={increment}>+1</button>
		</div>
	);
}

export default Counter;
