import React, { PropTypes } from 'react'

class NavHeader extends React.Component {
  constructor(){
    super();
    title:'Home'
  }
  componentWillReceiveProps(){
    this.setTitle();
  }
  componentWillMount(){
    this.setTitle();
  }
  setTitle(){
    this.setState({
      title: this.context.router.isActive('/',true) ? 'Home' :
              this.context.router.isActive('/blog') ? 'Blog' :
              this.context.router.isActive('/work') ? 'Work' :
              this.context.router.isActive('/about') ? 'About' : 'Item'
    })
  }
  render () {
    return(
      <div className="nav-header">
        <p style={{fontSize:'18px'}}><i className="glyphicon glyphicon-chevron-left" aria-hidden="true"></i>Back</p>
        <h3>Newming@{this.state.title}</h3>
        <p className="glyphicon glyphicon-apple" aria-hidden="true"></p>
      </div>
    )
  }
}

NavHeader.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default NavHeader;
