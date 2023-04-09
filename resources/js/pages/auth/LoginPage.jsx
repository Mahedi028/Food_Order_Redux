import React, { Fragment } from 'react'
import { Container } from 'react-bootstrap'
import LoginForm from '../../components/auth/login/LoginForm'

const LoginPage = () => {
  return (
    <Fragment>
        <Container fluid={true} className='d-flex justify-content-center align-items-center'>
            <LoginForm/>
        </Container>
    </Fragment>
  )
}

export default LoginPage
