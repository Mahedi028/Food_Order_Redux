import React from 'react'
import { Container} from 'react-bootstrap'
import { useLocation } from 'react-router-dom'
import StripePayment from '../../components/payment/StripePayment'

const StripePaymentPage = () => {
    const location=useLocation()
    const {name,email,phone,address,post_code,division_id,district_id,state_id}=location.state.checkout

  return (
    <Container fluid={true}>
        <StripePayment checkout={location.state.checkout}/>
    </Container>
  )
}

export default StripePaymentPage
