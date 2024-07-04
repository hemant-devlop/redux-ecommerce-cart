import React from 'react'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
  return (
    <div>
      <h5>this page does't exist</h5>
      <Link to='/'>Go to Home page</Link>
    </div>
  )
}

export default PageNotFound
