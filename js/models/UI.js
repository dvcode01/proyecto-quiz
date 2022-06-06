

export class UI{
    showQuestion(question){
        const questionContainer = document.querySelector('.questions');
        questionContainer.textContent = question;
    }

    showChoices(choices, callback){
        const choicesContainer = document.querySelector('.choices');
        const template = document.querySelector('#template');
        const fragment = document.createDocumentFragment();

        choicesContainer.innerHTML = '';
        for (let i = 0; i < choices.length; i++) {
            const clone = template.content.cloneNode(true);
            clone.querySelector('.btn').textContent = choices[i];
            clone.querySelector('.btn').addEventListener('click', () => callback(choices[i]));
            fragment.appendChild(clone);
        }
        choicesContainer.appendChild(fragment);
    }

    showScores(score){
        const quizHTML = `
            <h1>Result:</h1>
            <h2>Your Score: ${score}</h2>
        `;
        const quizContainer = document.querySelector('.quiz');
        quizContainer.innerHTML = quizHTML;
    }

    showProgress(currentIndex, total){
        const progress = document.querySelector('.progress');
        progress.textContent = `Question ${currentIndex} of ${total}`;
    }
}