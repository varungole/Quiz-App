import React from 'react'
import quizData from '../components/quizData.json'

function MultipleQuizzes() {
  
    return (
        <div className="quiz-boxes">
        {quizData.map((quiz, index) => (
          <div className="quiz-box" key={index}>
            <h2 className='quiz-name'>{quiz.name}</h2>
            <h4 className='quiz-description'>{quiz.description}</h4>
            <button className='start-quiz'>Play</button>
           </div>
        ))}
      </div>
  )
}

export default MultipleQuizzes