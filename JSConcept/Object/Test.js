const responses = [
	[
		{
			id: 76,
			survey_id: 40,
			question_id: 62,
			question_text: "What is your current job title?",
			question_type: "select",
			response_text: "Software Engineer",
		},
		{
			id: 84,
			survey_id: 40,
			question_id: 62,
			question_text: "What is your current job title?",
			question_type: "select",
			response_text: "Data Analyst",
		},
		{
			id: 92,
			survey_id: 40,
			question_id: 62,
			question_text: "What is your current job title?",
			question_type: "select",
			response_text: "Other",
		},
		{
			id: 77,
			survey_id: 40,
			question_id: 63,
			question_text: "What is your highest level of education?",
			question_type: "select",
			response_text: "Bachelor’s Degree",
		},
		{
			id: 85,
			survey_id: 40,
			question_id: 63,
			question_text: "What is your highest level of education?",
			question_type: "select",
			response_text: "Master’s Degree",
		},
		{
			id: 93,
			survey_id: 40,
			question_id: 63,
			question_text: "What is your highest level of education?",
			question_type: "select",
			response_text: "High School",
		},
		{
			id: 78,
			survey_id: 40,
			question_id: 64,
			question_text: "Please describe your responsibilities?",
			question_type: "text",
			response_text:
				" I am responsible for developing and maintaining software applications, managing code repositories, and collaborating with cross-functional teams to deliver high-quality products.",
		},
		{
			id: 86,
			survey_id: 40,
			question_id: 64,
			question_text: "Please describe your responsibilities?",
			question_type: "text",
			response_text:
				"I enjoy the collaborative environment and the opportunity to work on innovative projects that push the boundaries of technology.",
		},
		{
			id: 94,
			survey_id: 40,
			question_id: 64,
			question_text: "Please describe your responsibilities?",
			question_type: "text",
			response_text:
				"I enjoy the collaborative environment and the opportunity to work on innovative projects that push the boundaries of technology.",
		},
		{
			id: 79,
			survey_id: 40,
			question_id: 65,
			question_text: "What do you like most about your job?",
			question_type: "text",
			response_text:
				"I enjoy the collaborative environment and the opportunity to work on innovative projects that push the boundaries of technology.",
		},
		{
			id: 87,
			survey_id: 40,
			question_id: 65,
			question_text: "What do you like most about your job?",
			question_type: "text",
			response_text:
				"I enjoy the collaborative environment and the opportunity to work on innovative projects that push the boundaries of technology.",
		},
		{
			id: 95,
			survey_id: 40,
			question_id: 65,
			question_text: "What do you like most about your job?",
			question_type: "text",
			response_text:
				"I enjoy the collaborative environment and the opportunity to work on innovative projects that push the boundaries of technology.",
		},
		{
			id: 80,
			survey_id: 40,
			question_id: 66,
			question_text: "How satisfied are you with your current job?",
			question_type: "radio",
			response_text: "Satisfied",
		},
		{
			id: 88,
			survey_id: 40,
			question_id: 66,
			question_text: "How satisfied are you with your current job?",
			question_type: "radio",
			response_text: "Dissatisfied",
		},
		{
			id: 96,
			survey_id: 40,
			question_id: 66,
			question_text: "How satisfied are you with your current job?",
			question_type: "radio",
			response_text: "Neutral",
		},
		{
			id: 81,
			survey_id: 40,
			question_id: 67,
			question_text: "How often do you work from home?",
			question_type: "radio",
			response_text: "Sometimes",
		},
		{
			id: 89,
			survey_id: 40,
			question_id: 67,
			question_text: "How often do you work from home?",
			question_type: "radio",
			response_text: "Rarely",
		},
		{
			id: 97,
			survey_id: 40,
			question_id: 67,
			question_text: "How often do you work from home?",
			question_type: "radio",
			response_text: "Never",
		},
		{
			id: 82,
			survey_id: 40,
			question_id: 68,
			question_text: "Which of the following tools do you use regularly?",
			question_type: "checkbox",
			response_text: "Slack ,Microsoft Teams",
		},
		{
			id: 90,
			survey_id: 40,
			question_id: 68,
			question_text: "Which of the following tools do you use regularly?",
			question_type: "checkbox",
			response_text: "Slack ",
		},
		{
			id: 98,
			survey_id: 40,
			question_id: 68,
			question_text: "Which of the following tools do you use regularly?",
			question_type: "checkbox",
			response_text: "Trello,Asana",
		},
		{
			id: 83,
			survey_id: 40,
			question_id: 69,
			question_text:
				"Which of the following benefits do you receive at your job?",
			question_type: "checkbox",
			response_text: "Paid Time Off ,Professional Development",
		},
		{
			id: 91,
			survey_id: 40,
			question_id: 69,
			question_text:
				"Which of the following benefits do you receive at your job?",
			question_type: "checkbox",
			response_text: "Health Insurance ,Paid Time Off ",
		},
		{
			id: 99,
			survey_id: 40,
			question_id: 69,
			question_text:
				"Which of the following benefits do you receive at your job?",
			question_type: "checkbox",
			response_text: "Retirement Plan ,Remote Work Options ",
		},
	],
];
const questionSummary = {};
responses.flat().forEach((response, i) => {
	console.log("List:::: ", i);
	const { question_id, question_text, question_type, response_text } =
		response;
	console.log(
		"question_id, question_text, question_type, response_text",
		question_id,
		question_text,
		question_type,
		response_text
	);
	if (!questionSummary[question_id]) {
		questionSummary[question_id] = {
			question_text,
			question_type,
			options: {}, // For 'select' and 'checkbox' questions
			responses: [], // For all question types
		};
	}

	// Add response to the appropriate entry
	if (question_type === "select" || question_type === "checkbox") {
		if (!questionSummary[question_id].options[response_text]) {
			questionSummary[question_id].options[response_text] = 0;
		}
		questionSummary[question_id].options[response_text] += 1;
	}
	questionSummary[question_id].responses.push(response_text);
});
//console.log(first);
// Prepare the final result
const result = {
	surveyId: parseInt(40, 10),
	surveyTitle: "Employee Satisfaction Survey",
	results: {
		question_summary: questionSummary,
	},
};
console.log("result::::", result);
console.log("questionSummary::::", questionSummary);
