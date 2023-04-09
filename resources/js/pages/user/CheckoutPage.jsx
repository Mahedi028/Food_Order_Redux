import React from 'react'
import { Container } from 'react-bootstrap'
import CheckoutForm from '../../components/checkout/CheckoutForm'
const CheckoutPage = () => {
  return (
    <Container fluid={true}>
        <CheckoutForm/>
    </Container>
  )
}

export default CheckoutPage
