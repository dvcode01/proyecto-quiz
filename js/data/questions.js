import { data } from "../data/data.js";
import { Question } from "../models/Question.js";

export const questions = data.map(item => new Question(item.question, item.choices, item.answer))