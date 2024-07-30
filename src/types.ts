import { StringLike } from "bun";

type Classroom {
	id: string;
	owner: userId;
	name: string;
	questionBanks: QuestionBank[];
	quizHistory: Quiz[];
	activeQuiz: Quiz;
	participants: userId[];
}


type QuestionBank {
	id: string;
	topic: string;
	ownerId: string;
	questions: Question[]; // 5 question
}

type Question {
	id: string;
	question: string;
	image: string;
	options: string[];
	answer: number; // Option index
	explanation: string;
}

type Quiz {
	id: string;
	question: Question[];
	participants: userId[];
	owner: userId;
	isActive: boolean;
	result: QuizResult[];
}


type QuizResult {
	userId: string;
	score: number;
}