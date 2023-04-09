import React, { Fragment } from 'react'
import { Container,Row} from 'react-bootstrap'
import RegisterForm from '../../components/auth/register/RegisterForm'

const RegisterPage = () => {
  return (
    <Fragment>
        <Container fluid={true} className='d-flex justify-content-center align-items-center'>
            <RegisterForm/>
        </Container>
    </Fragment>
        )
}

export default RegisterPage
