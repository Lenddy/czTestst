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
