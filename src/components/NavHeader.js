import React, { PropTypes } from 'react'

class NavHeader extends React.Component {
  render () {
    return(
      <div className="nav-header">
        <p style={{fontSize:'18px'}}><i className="glyphicon glyphicon-chevron-left" aria-hidden="true"></i>Back</p>
        <h3>Newming@Home</h3>
        <p className="glyphicon glyphicon-apple" aria-hidden="true"></p>
      </div>
    )
  }
}

export default NavHeader;
