import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'react-router'

export default React.createClass({
  render () {
    return (
      <div className='container'>
        <Helmet htmlAttributes={{class: 'home-page'}} />
        <h1>Home</h1>
        <Link to={'/status'}>Status Page</Link>
      </div>
    )
  }
})
