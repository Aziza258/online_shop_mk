import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavLink } from 'react-bootstrap';
import Login from './Login';
import LogOut from './LogOut';
import { auth } from '../firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import { FaCartPlus } from "react-icons/fa";
import Order from './Order';

const showOrders = (props) => {

    let summa = 0
    props.orders.forEach(el => summa += Number.parseFloat(el.price));
    return (<div>

        {props.orders.map(el => (
            <Order onDelete={props.onDelete} key={el.id} item={el} />
        ))}
        <p className='summa'>Сумма:  {new Intl.NumberFormat().format(summa)}  тенге</p>
    </div>)
}

const showNothing = () => {
    return (<div className='empty'>
        <h2>
            Корзина пуста
        </h2>
    </div>
    )
}

export default function Header(props) {
    let [cartOpen, setCartOpen] = useState(false)


    return (
        <header>
            <div>
                <span className='logo'>
                    Online shop
                </span>
                <Navbar collapseOnSelect expand='sm' bg='success p-3'  style={{marginTop: "20px"}}>
                    <Navbar.Toggle aria-controls='myNavbar' />
                    <Navbar.Collapse style={{ justifyContent: 'space-between' }}>
                        <Nav id='myNavbar' style={{ alignItems: 'center', justifyContent: 'space-between' }}>
                            <NavLink style={{ color: 'white' }} as={Link} to='/'>Каталог товаров</NavLink>
                            <NavLink style={{ color: 'white' }} as={Link} to='/contacts'>Условия покупки</NavLink>
                            <NavLink style={{ color: 'white' }} as={Link} to='/reg'>Регистрация</NavLink>
                        </Nav>
                        <Nav style={{ justifyContent: 'left', marginLeft: '7px' }}>
                            <FaCartPlus style={{ color: 'white' }} onClick={() => setCartOpen(cartOpen = !cartOpen)} className={`shop-cart-button ${cartOpen && 'active'}`} />
                            {cartOpen && (
                                <div className='shop-cart'>
                                    {props.orders.length > 0 ? showOrders(props) : showNothing()}
                                </div>)}
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>


            </div>
            <div className='presentation'></div>
        </header>
    )
}
