

import { questions} from "./data/questions.js";
import { Quiz } from "./models/Quiz.js";
import { UI } from "./models/UI.js";


function app(){
    const quiz = new Quiz(questions);
    const ui = new UI();
    
    mostrarHTML(quiz, ui);
}

function mostrarHTML(quiz, ui){
    if(quiz.isEnded()){
        ui.showScores(quiz.score);
    }else{
        ui.showQuestion(quiz.getQuestionIndex().text);
        ui.showChoices(quiz.getQuestionIndex().choices, (currentChoices) => {
        quiz.guess(currentChoices);
        mostrarHTML(quiz, ui);
    });

    ui.showProgress(quiz.questionIndex, quiz.questions.length);

    }
}

app();