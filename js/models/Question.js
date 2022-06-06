export class Question{
    /**
     * 
     * @param {string} text this is the text of the question
     * @param {array} choices this is choices of the question
     * @param {string} answer this is the text answer of th question
     */
    constructor(text, choices, answer){
        this.text = text,
        this.choices = choices,
        this.answer = answer
    }

    /**
     * 
     * @param {string} choice some text to guess
     * @returns {boolean} return true if choice is equal to answer
     */

    correctAnswer(choice){
        return choice === this.answer;
    }
}



