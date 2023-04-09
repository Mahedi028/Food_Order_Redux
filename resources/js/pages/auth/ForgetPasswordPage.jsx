import React, { Fragment } from 'react'
import { Container } from 'react-bootstrap'
import ForgetPassword from '../../components/auth/forgetpassword/ForgetPassword'

const ForgetPasswordPage = () => {
  return (
    <Fragment>
        <Container fluid={true} className='d-flex justify-content-center align-items-center'>
            <ForgetPassword/>
        </Container>
    </Fragment>
  )
}

export default ForgetPasswordPage
