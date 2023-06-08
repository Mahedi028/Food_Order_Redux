import React, { Fragment } from 'react'
import { Container, Row, Col} from 'react-bootstrap'
import Banner from '../components/banner/Banner'
import Categories from '../components/categories/Categories'
import Layout from '../components/layout/Layout'
import ServiceBoard from '../components/home/ServiceBoard'
import FoodGallery from '../components/home/FoodGallery'
const HomePage = () => {
  return (
    <Fragment>
        <Container fluid={true}>
        <Row className='mb-2'>
            <Banner/>
        </Row>
        <Row className='mb-2'>
            <Categories/>
        </Row>
        <Row className='mb-2'>
            <ServiceBoard/>
        </Row>
        <Row>
            <FoodGallery/>
        </Row>
        </Container>
    </Fragment>
  )
}

export default HomePage
