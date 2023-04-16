import React, {useEffect} from 'react'
import { Container, Row } from 'react-bootstrap'
import Cart from '../../components/cart/Cart'

const CartPage = (props) => {

    const user=props.user
    
    useEffect(() => {

    }, [props.user])


  return (
    <Container fluid={true}>
        <Cart user={user}/>
    </Container>
  )
}

export default CartPage
