import React, { Fragment } from 'react'
import { Container } from 'react-bootstrap'
import MenuDetails from '../components/menu/MenuDetails'
import DetailsTab from '../components/menudetails/DetailsTab'
import RelatedMenus from '../components/menudetails/RelatedMenus'

const MenuDetailsPage = () => {
  return (
    <Fragment>
        <Container fluid={true}>
            <MenuDetails/>
            <DetailsTab/>
            <RelatedMenus/>
        </Container>
    </Fragment>
  )
}

export default MenuDetailsPage
