import { useEffect, useState } from "react";
import civicQuestions from "./QA_Object";

const All_questions_in_order = () => {
	const [showAll, setAllShow] = useState(false);
	const [answerState, setAnswerState] = useState({});

	const show_All_Answer = () => {
		setAllShow(!showAll);
	};

	const show_One_Answer = (id) => {
		setAnswerState((prevState) => ({
			...prevState,
			[id]: !prevState[id],
		}));
	};

	useEffect(() => {
		civicQuestions;
	}, []);

	return (
		<>
			<button onClick={show_All_Answer}>
				{showAll ? "Hide all Answer/s" : "Show all Answer/s"}
			</button>

			{civicQuestions.map((c) => {
				const isAwnserVisible = showAll || answerState[c.id]; // change to isAwnserVisible  and   answerState[]

				return (
					<div key={c.id}>
						<h1>
							{c.id}: {c.question}
						</h1>
						{isAwnserVisible && (
							<div>
								{Array.isArray(c.answer) ? (
									<ol>
										{c.answer.map((a, idx) => {
											return (
												<li key={idx}>
													<h2>{a}</h2>
												</li>
											);
										})}
									</ol>
								) : (
									<ul>
										<li>
											<h2>{c.answer}</h2>
										</li>
									</ul>
								)}
							</div>
						)}
						<button
							style={{ backgroundColor: "purple" }}
							onClick={() => show_One_Answer(c.id)}
						>
							{answerState[c.id]
								? "Hide Answer/s"
								: "Show Answer/s"}
						</button>
						<button
							// style={{ backgroundColor: "red" }}
							className=" "
						>
							incorrect
						</button>
						<button style={{ backgroundColor: "blue" }}>
							not sure
						</button>
						<button style={{ backgroundColor: "green" }}>
							Correct
						</button>
					</div>
				);
			})}
		</>
	);
};

export default All_questions_in_order;
