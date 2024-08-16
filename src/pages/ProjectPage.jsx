import React from 'react'
import { useLocation } from 'react-router-dom'

const ProjectPage = () => {

    const location = useLocation()
    console.log(location.state.data)
  return (
    <div>ProjectPage</div>
  )
}

export default ProjectPage