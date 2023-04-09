import React from 'react'
import { Container } from 'react-bootstrap'
import ResetPassword from '../../components/auth/resetpassword/ResetPassword'

const ResetPasswordPage = () => {
  return (
    <Container fluid={true} className='d-flex justify-content-center align-items-center'>
        <ResetPassword/>
    </Container>
  )
}

export default ResetPasswordPage
