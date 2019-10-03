import React from 'react'
import { Link } from 'react-router-dom';
import NoPageSVG from '../common/NoPageSVG';



const PageNotFound = () => {
  return (
    <div style={{backgroundColor: '#ffff', height: '100vh'}}>
        <NoPageSVG msg='Page Not Found' size='large'/>
    </div>
  )
}

export default PageNotFound
