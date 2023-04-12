import React, { Fragment, useEffect} from 'react'
import { Container } from 'react-bootstrap'
import MenuDetails from '../components/menu/MenuDetails'
import DetailsTab from '../components/menudetails/DetailsTab'
import RelatedMenus from '../components/menudetails/RelatedMenus'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMenu } from '../store/menu/menuActions'

const MenuDetailsPage = () => {

    //get url menu id
    const {id}=useParams()

    const dispatch=useDispatch()

    useEffect(() => {
        dispatch(fetchMenu({id}))
    }, [dispatch])

    const menuDetails=useSelector((state)=>state.menu.menus)




  return (
    <Fragment>
        <Container fluid={true}>
            <MenuDetails menuDetails={menuDetails}/>
            <DetailsTab description={menuDetails?.description}/>
            {/* <RelatedMenus/> */}
        </Container>
    </Fragment>
  )
}

export default MenuDetailsPage
