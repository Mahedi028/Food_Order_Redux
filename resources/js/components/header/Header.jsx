import React, { Fragment, useEffect} from 'react'
import NavBar from '../UI/navbar/NavBar'

const Header = (props) => {
    const user=props.user

    useEffect(() => {

    }, [props.user])

  return (
    <Fragment>
        <NavBar user={user}/>
    </Fragment>
  )
}

export default Header
