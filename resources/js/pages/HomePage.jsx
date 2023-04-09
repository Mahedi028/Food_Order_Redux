import React, { Fragment } from 'react'
import { Container, Row, Col} from 'react-bootstrap'
import Banner from '../components/banner/Banner'
import Categories from '../components/categories/Categories'
import Layout from '../components/layout/Layout'

const HomePage = () => {
  return (
    <Fragment>
        <Container fluid={true}>
        <Row className='mb-2'>
            <Banner/>
        </Row>
        <Row>
            <Categories/>
        </Row>
        </Container>
    </Fragment>
  )
}

export default HomePage
