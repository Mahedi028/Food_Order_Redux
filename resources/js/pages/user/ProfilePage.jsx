import React, {useEffect} from 'react'
import Profile from '../../components/profile/Profile'
import { Container } from 'react-bootstrap'

const ProfilePage = (props) => {
    const user=props.user

    useEffect(() => {

    }, [props.user])
  return (
    <Container fluid={true}>
        <Profile user={user}/>
    </Container>
  )
}

export default ProfilePage
