import React from 'react'

import './Tags.css'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import TagsList from './TagsList'
const Tags = () => {

    const tagsList =[{
        id:1,
        tagName:"javascript",
        tagDesc:"For questions regarding programming in EMCAScript (JavaScript/JS) and its various dialects/implementaions (excluding ActionScript). Pleases include relevant tags on your question;"
      },{
        id:2,
        tagName:"Python",
        tagDesc:"Python is a multi-paradigm dynamically typed, multipurpose programming language. It is designed to be quick to learn, understand, and use, and enforces a clean and uniform syntax."
      },{
        id:3,
        tagName:"C#",
        tagDesc:"C# (pronounced as 'see sharp' is a high level, statically typed, multi-paradigm programming language developed by Microsoft."
      },{
        id:4,
        tagName:"Java",
        tagDesc:"Java is a high-level object oriented programming language. Use this tag when you are having problem using or understanding the language itself."
      },{
        id:5,
        tagName:"Reactjs",
        tagDesc:"Reactjs is a JavaScript library for building user interfaces. It uses a declarative, component-based paradigm and aims to be both efficient and flexible."
      },{
        id:6,
        tagName:"node.js",
        tagDesc:"Node.js is an event-based, non-blocking,asynchronous I/O runtime that uses Google's V8 JavaScript engine and libuv library."
      }]

  return (
    <div className='home-container-1'>
        <LeftSidebar/>
        <div className="home-container-2">
            <h1 className='tags-h1 '>Tags</h1>
            <p className='tags-p'>A tag is a keyword or label that categorizes your question with other similar questions.</p>
            <p className='tags-p'>Using the right tags makes it easier for others to find and answer your question.</p>
            <div className="tags-list-container">
                {
                    tagsList.map((tag) => (
                        <TagsList tag={tag} key={tagsList.id} />
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Tags