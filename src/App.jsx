import { useState } from "react";

import "./App.css";

import All_questions_in_order from "./components/All_questions_in_order";

function App() {
	const [count, setCount] = useState(0);
	return (
		<>
			<div className="card">
				<button onClick={() => setCount((count) => count + 1)}>
					count is {count}
				</button>
				<All_questions_in_order />
			</div>
		</>
	);
}

export default App;

// 1 Lincoln free the laves

// 2 Lincoln was president during the civil war

//3 Washington is the father of our country //! ==> Washington

// 4 American Indians lived here first

// 5 Delaware was the first state

// 6 Washingtong was the first president //! ==> Washington

// 7 Adams was the second president

//8 The American Flag is red, white and blue

//9 People want the right to vote

//10 We vote for precident in November  //! ==> president
