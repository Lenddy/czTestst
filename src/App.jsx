import { useState } from "react";

import "./App.css";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import All_questions_in_order from "./components/All_questions_in_order";
import All_questions_out_of_order from "./components/All_questions_out_of_order";
import Test from "./components/Test";

function App() {
	// const [count, setCount] = useState(0)
	const [reload, setReload] = useState(false);
	const navigate = useNavigate();
	const location = useLocation(); //!!!!! you will use this if you want to know the url location that you are on a the moment
	const brows = (url) => navigate(url);
	// const locationCheck = () => {
	// 	if (location == "/Random") {
	// 		setRedo(!redo);
	// 	}
	// };

	const randomize = () => {
		if (location.pathname == "/Random") {
			setReload(!reload);
		} else brows("/Random");
	};

	return (
		<>
			<div className="card">
				<>
					<button onClick={() => brows("/")}>In order</button>

					<button onClick={() => randomize()}>random</button>

					<button onClick={() => brows("/button")}>button</button>
				</>
				<Routes>
					<Route
						exact
						path="/"
						element={
							<>
								{/* <button
									onClick={() =>
										setCount((count) => count + 1)
									}
								>
									count is {count}
								</button> */}
								<All_questions_in_order />
							</>
						}
					></Route>
					<Route
						exact
						path="/Random"
						element={<All_questions_out_of_order reload={reload} />}
					></Route>

					<Route exact path="button" element={<Test />} />
				</Routes>
			</div>
		</>
	);
}

export default App;
