import React from 'react'
import classes from './userordertable.module.css'
import CartButton from '../UI/button/cartbutton/CartButton'
const UserOrder = () => {
  return (
    <div className={classes.order__table__container}>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone Number</th>
                    <th>Invoice No</th>
                    <th>Transaction No</th>
                    <th>Payment Method</th>
                    <th>Date</th>
                    <th>Amount</th>
                    <th colSpan={2} className='text-center'>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Mahedi</td>
                    <td>Mahedi@gmail.com</td>
                    <td>01309191185</td>
                    <td>FOD123456</td>
                    <td>txcemsosoe</td>
                    <td>stripe</td>
                    <td>12/04/23</td>
                    <td>120</td>
                    <td><CartButton>View</CartButton></td>
                    <td><CartButton>Invoice</CartButton></td>
                </tr>
                <tr>
                    <td>Mahedi</td>
                    <td>Mahedi@gmail.com</td>
                    <td>01309191185</td>
                    <td>FOD123456</td>
                    <td>txcemsosoe</td>
                    <td>stripe</td>
                    <td>12/04/23</td>
                    <td>120</td>
                    <td><CartButton>View</CartButton></td>
                    <td><CartButton>Invoice</CartButton></td>
                </tr>
                <tr>
                    <td>Mahedi</td>
                    <td>Mahedi@gmail.com</td>
                    <td>01309191185</td>
                    <td>FOD123456</td>
                    <td>txcemsosoe</td>
                    <td>stripe</td>
                    <td>12/04/23</td>
                    <td>120</td>
                    <td><CartButton>View</CartButton></td>
                    <td><CartButton>Invoice</CartButton></td>
                </tr>
                <tr>
                    <td>Mahedi</td>
                    <td>Mahedi@gmail.com</td>
                    <td>01309191185</td>
                    <td>FOD123456</td>
                    <td>txcemsosoe</td>
                    <td>stripe</td>
                    <td>12/04/23</td>
                    <td>120</td>
                    <td><CartButton>View</CartButton></td>
                    <td><CartButton>Invoice</CartButton></td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default UserOrder
