import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

import './HomeMainbar.css'
import QuestionsList from './QuestionsList' 

const HomeMainbar = () => {

  const location = useLocation()
  const user = 1;
  const navigate = useNavigate()

  var questionsList = [{
    _id:1,
    upVotes:3,
    downVotes:2,
    noOfAnswers: 2,
    questionTitle: "What is a function?",
    questionBody: "It meant to be",
    questionTags: ["java", "node js", "react js", "mongodb"],
    userPosted: "Ganesh",
    askedOn: "jan 1",
    userId:1,
    answer: [{
      answerBody: "Answer",
      userAnswered: "kumar",
      answeredOn: "jan 2",
      userId:2,
    }]
  },{
    _id:2,
    upVotes: 3,
    downVotes:1,
    noOfAnswers: 4,
    questionTitle: "What is a function?",
    questionBody: "It meant to be",
    questionTags: ["javascript", "R"],
    userPosted: "Ganesh",
    askedOn: "jan 1",
    userId: 1,
    answer: [{
      answerBody: "Answer",
      userAnswered: "Sushmitha",
      answeredOn: "jan 2",
      userId:2,
    }]
  },{
    _id:3,
    upVotes: 2,
    downVotes: 1,
    noOfAnswers: 1,
    questionTitle: "What is a function?",
    questionBody: "It meant to be",
    questionTags: ["R", "Python"],
    userPosted: "Ganesh",
    askedOn: "jan 1",
    userId: 1,
    answer: [{
      answerBody: "Answer",
      userAnswered: "Divya",
      answeredOn: "jan 2",
      userId:2,
    }]
  },{
    id:4,
    upVotes: 1,
    downVotes: 0,
    noOfAnswers: 2,
    questionTitle: "What is a function?",
    questionBody: "It meant to be",
    questionTags: ["javascript", "R", "Python"],
    userPosted: "Ganesh",
    askedOn: "jan 1",
    userId: 1,
    answer: [{
      answerBody: "Answer",
      userAnswered: "Pralek",
      answeredOn: "jan 2",
      userId:2,
    }]
  }]


  const checkAuth = () => {
    if (user === null){
      alert("login or signup to ask a question")
      navigate('/Auth')
    }else{
      navigate('/AskQuestion')
    }
  }
  return (
    <div className='main-bar'>
      <div className='main-bar-header'>
        {
          location.pathname ==='/' ? <h1>Top Questions</h1> : <h1>All Questions</h1>
        }
        <button onClick = {checkAuth} className='ask-btn'>Ask Question</button>
      </div>
      <div>
        {
          questionsList === null ?
          <h1>Loading...</h1> :
          <>
            <p>{ questionsList.length } questions</p>
            <QuestionsList questionsList= {questionsList} />
          </>
        }
      </div>
      
    </div>
  )
}

export default HomeMainbar

