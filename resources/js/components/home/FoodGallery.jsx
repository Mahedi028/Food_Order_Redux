import React, { Fragment } from 'react'
import classes from './serviceboard.module.css'
import {Col, Row} from 'react-bootstrap'
export default function FoodGallery() {
  return (
    <Fragment>
        <Col>
            <Row className='mb-2'>
                <h2 className={classes.service__main__title}>FoodGallery</h2>
            </Row>
        </Col>
    </Fragment>
  )
}
