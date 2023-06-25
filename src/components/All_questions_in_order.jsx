import civicQuestions from "./QA_Object";

const All_questions_in_order = () => {
	return (
		<>
			{civicQuestions.map((c) => {
				return (
					<div key={c.id}>
						<h1>
							{c.id}: {c.question}
						</h1>
						<div>
							{Array.isArray(c.answer) ? (
								<ol>
									{c.answer.map((a, idx) => {
										return <li key={idx}>{a}</li>;
									})}
								</ol>
							) : (
								<ul>
									<li>{c.answer}</li>
								</ul>
							)}
						</div>
					</div>
				);
			})}
		</>
	);
};

export default All_questions_in_order;
