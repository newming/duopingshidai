import React from 'react';
import BlogCard from '../components/BlogCard'

let data=[
  {index:1,title:'如何成为高手',desc:'天天学天天学天天学天天学天天学天天学天天学天天学',url:'a'},
  {index:2,title:'如何成为高手',desc:'天天学天天学天天学天天学天天学天天学天天学天天学',url:'b'},
  {index:3,title:'如何成为高手',desc:'天天学天天学天天学天天学天天学天天学天天学天天学',url:'c'},
  {index:4,title:'如何成为高手',desc:'天天学天天学天天学天天学天天学天天学天天学天天学',url:'d'}
]

class Blog extends React.Component {
  render () {
    return(
      <div style={{width:'100%',marginTop:'20px'}}>
        { data.map( (item,i) => <BlogCard {...item} key={i} /> ) }
      </div>
    )
  }
}

export default Blog;
