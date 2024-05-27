import React from 'react'
import { Link, useLocation,useNavigate } from 'react-router-dom'
import './HomeMainbar.css'
import {useSelector} from 'react-redux'
import QuestionList from './QuestionList'
const HomeMainbar = () =>{

  const location=useLocation()
  const user = useSelector((state) => (state.currentUserReducer))
  const navigate =useNavigate();

  const checkAuth =() => {
    if(user === null){
      alert("login or signup to ask a question")
      navigate('/Auth')
    }
    else{
      navigate('/AskQuestion')
    }
  }

  const questionsLists = useSelector(state => state.questionsReducer)
  // console.log(questionsLists)

  // var questionsLists=[{
  //   id:1,
  //   upVotes:3,
  //   downVotes:2,
  //   noOfAnswers:2,
  //   questionTitle:"What is a Function?",
  //   questionBody:"It meant to be",
  //   questionTags:["java","node js","react js","mongodb"],
  //   userPosted:"manoj",
  //   userId:1,
  //   askedOn:"jan 1",
  //   answer:[{
  //     answeBody:"Answer",
  //     userAnswered:'kumar',
  //     answeredOn:'jan 2',
  //     userId:2,
  //   }]
  // },{
  //   id:2,
  //   upVotes:2,
  //   downVotes:2,
  //   noOfAnswers:1,
  //   questionTitle:"What is a Function?",
  //   questionBody:"It meant to be",
  //   questionTags:["javascript","R","python"],
  //   userPosted:"manoj",
  //   userId:1,
  //   askedOn:"jan 1",
  //   answer:[{
  //     answeBody:"Answer",
  //     userAnswered:'kumar',
  //     answeredOn:'jan 2',
  //     userId:2,
  //   }]
  // },{
  //   id:3,
  //   upVotes:1,
  //   downVotes:2,
  //   noOfAnswers:1,
  //   questionTitle:"What is a Function?",
  //   questionBody:"It meant to be",
  //   questionTags:["javascript","R","python"],
  //   userPosted:"jp",
  //   userId:3,
  //   askedOn:"jan 1",
  //   answer:[{
  //     answeBody:"Answer",
  //     userAnswered:'Rathi',
  //     answeredOn:'jan 5',
  //     userId:4,
  //   }]
  // }]

  return (
    <div className='main-bar'>
      <div className='main-bar-header'>
        {
          location.pathname === '/' ? <h1>Top Questions</h1>: <h1>All Questions</h1>
        }
        <button className='ask-btn' onClick={checkAuth}>Ask Question</button>
      </div>
      <div>
        {
          questionsLists.data === null ?
          <h1>Loading....</h1>:
          <>
            <p>{questionsLists.data.length} Questions</p>
            <QuestionList questionsList={questionsLists.data}/>
          </>
        }
      </div>
    </div>
  )
}

export default HomeMainbar