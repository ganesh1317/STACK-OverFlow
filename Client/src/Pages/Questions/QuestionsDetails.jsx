import React, {useState} from 'react'
import { useParams, Link, useNavigate, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import moment from 'moment'
import copy from 'copy-to-clipboard'

import Avatar from '../../components/Avatar/Avatar'
import upvotes from '../../assets/upv.png'
import downvotes from '../../assets/downv.png'
import "./Questions.css"
import DisplayAnswer from './DisplayAnswer'
import { postAnswer, deleteQuestion , voteQuestion} from '../../actions/question.js'


const QuestionsDetails = () => {

  const { id } = useParams()
  const questionsList = useSelector(state => state.questionReducer)
  console.log(questionsList)
  // console.log(id)
  // var questionsList = [{
  //   _id:'1',
  //   upVotes:3,
  //   downVotes:2,
  //   noOfAnswers: 2,
  //   questionTitle: "What is a function?",
  //   questionBody: "It meant to be",
  //   questionTags: ["java", "node js", "react js", "mongodb"],
  //   userPosted: "Ganesh",
  //   askedOn: "jan 1",
  //   userId:1,
  //   answer: [{
  //     answerBody: "Answer",
  //     userAnswered: "kumar",
  //     answeredOn: "jan 2",
  //     userId:2,
  //   }]
  // },{
  //   _id:'2',
  //   upVotes: 3,
  //   downVotes:1,
  //   noOfAnswers: 4,
  //   questionTitle: "What is a function?",
  //   questionBody: "It meant to be",
  //   questionTags: ["javascript", "R"],
  //   userPosted: "Ganesh",
  //   askedOn: "jan 1",
  //   userId: 1,
  //   answer: [{
  //     answerBody: "Answer",
  //     userAnswered: "Sushmitha",
  //     answeredOn: "jan 2",
  //     userId:2,
  //   }]
  // },{
  //   _id:'3',
  //   upVotes: 2,
  //   downVotes: 1,
  //   noOfAnswers: 1,
  //   questionTitle: "What is a function?",
  //   questionBody: "It meant to be",
  //   questionTags: ["R", "Python"],
  //   userPosted: "Ganesh",
  //   askedOn: "jan 1",
  //   userId: 1,
  //   answer: [{
  //     answerBody: "Answer",
  //     userAnswered: "Divya",
  //     answeredOn: "jan 2",
  //     userId:2,
  //   }]
  // },{
  //   _id:'4',
  //   upVotes: 1,
  //   downVotes: 0,
  //   noOfAnswers: 2,
  //   questionTitle: "What is a function?",
  //   questionBody: "It meant to be",
  //   questionTags: ["javascript", "R", "Python"],
  //   userPosted: "Ganesh",
  //   askedOn: "jan 1",
  //   userId: 1,
  //   answer: [{
  //     answerBody: "Answer",
  //     userAnswered: "Pralek",
  //     answeredOn: "jan 2",
  //     userId:2,
  //   }]
  // }]

  const [Answer, setAnswer] = useState('')
  const Navigate = useNavigate()
  const dispatch = useDispatch()
  const User = useSelector((state) => (state.currentUserReducer))
  const location = useLocation()
  // console.log(location)
  const url = 'http://localhost:3000'


  const handlePostAns = (e, answerLength) =>{
    e.preventDefault()
    if (User === null){
      alert('Login or Signup to answer a question')
      Navigate('/Auth')
    }else{
      if(Answer === ''){
        alert('Enter an answer before submitting')
      }else{
        dispatch(postAnswer({id, noOfAnswers: answerLength + 1, answerBody: Answer, userAnswered: User.result.name, userId: User?.result._id}))
      }
    }

  }

  const handleshare = () =>{
    copy(url+location.pathname)
    alert('copied url: '+url+location.pathname)
  }

  const handledelete =() =>{
    console.log(id)
    dispatch(deleteQuestion(id, Navigate))
  }

  const handleUpvote = () =>{
    dispatch(voteQuestion(id, 'upvote', User?.result?._id))
  }

  const handleDownvote = () =>{
    dispatch(voteQuestion(id, 'downvote', User?.result?._id))
  }


  return (
    <div className='question-details-page'>
      {
        questionsList.data === null ?
        <h1>Loading...</h1> :
        <>
          {
            questionsList.data.filter(question => question._id === id).map(question =>(
              <div key={question._id}>
                {console.log(question)}
                <section className='question-details-container' >
                  <h1>{question.questionTitle}</h1>
                  <div className='question-details-container-2'>
                    <div className='question-votes'>
                      <img src={upvotes} alt='' width= '18px' className='votes-icon' onClick={handleUpvote}/>
                      <p>{question.upVote.length - question.downVote.length}</p>
                      <img src={downvotes} alt='' width='18px' className='votes-icon' onClick={handleDownvote}/>
                    </div>
                    <div style={{width: "100%" }} >
                      <p className='question-body'>{question.questionBody}</p>
                      <div className='question-details-tags'>
                        {
                          question.questionTags.map((tag) => (
                            <p key={tag}>{tag}</p>
                          ))
                        }
                      </div>
                      <div className='question-actions-user'>
                        <div>
                          <button type='button' onClick={handleshare}>share</button>
                          {User?.result?._id === question?.userId && (  
                              <button type='button' onClick={handledelete}>Delete</button> 
                            )}
                        </div>
                        <div>
                          <p>asked {moment(question.askedOn).fromNow()}</p>
                          <Link to={`/users/${question.userId}`} className='user-link' style={{color: '#0086d8'}}>
                            <Avatar backgroundColor='orange' px = '10px' py= '5px'>{question.userPosted.charAt(0).toUpperCase()}</Avatar>
                            <div>
                              {question.userPosted}
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                {
                  question.noOfAnswers !== 0 && (
                    <section>
                     <h3>{question.noOfAnswers} Answers</h3>
                     <DisplayAnswer key={question._id} question={question} handleshare={handleshare}/>
                    </section>
                  )
                } 
                <section className='post-ans-container'>
                  <h3>Your Answers</h3>
                  <form onSubmit={(e)=>{handlePostAns(e,question.answer.length)}}>
                    <textarea name="" id="post-ans-container" cols="30" rows="10" onChange={e=> setAnswer(e.target.value)}></textarea>
                    <input type= "submit" className='post-ans-btn' value='Post Your Answer'/>
                  </form>
                  <p>
                    Browse other Question tagged
                    {
                      question.questionTags.map((tag) => (
                        <Link to='/Tags' key={tag} className='ans-tags'>{tag}</Link>
                      ))
                    } or 
                    <Link to='/AskQuestion' style={{textDecoration:"none", color:"#009dff"}}> ask your own question. </Link>
                  </p>
                </section>
              </div>
            ))
                  
          }
        </>
      }
    </div>
  )
}

export default QuestionsDetails
