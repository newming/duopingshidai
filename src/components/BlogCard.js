import React, { PropTypes } from 'react'

class BlogCard extends React.Component {
  render () {
    let styles={
      root:{
        boxShadow: '0 1px 6px rgba(0, 0, 0, 0.12), 0 1px 4px rgba(0, 0, 0, 0.24)',
        width:'96%',
        borderRadius:'5px',
        margin:'0 auto',
        marginBottom:'20px',
      },
      index:{

      },
      title:{

      },
      desc:{

      },
      btn:{

      }
    }
    return(
      <div style={styles.root}>
        <p style={styles.index}>1</p>
        <p style={styles.title}>我是标题</p>
        <p style={styles.desc}>这里是介绍这里是介绍这里是介绍这里是介绍这里是介绍</p>
        <a href="#" style={styles.btn}>阅读更多</a>
      </div>
    )
  }
}

export default BlogCard;
