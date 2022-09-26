import React from 'react'
import {Nav, NavItem} from 'reactstrap';
import catlogo from '../assets/catt.png'


const Header = () => {
  return (
    <Nav className='Nav' fill pills>
      <NavItem>
        <a style={{
          textDecoration: 'none',
          color:'#662424',
          paddingleft:"2em"}} href="/">
          <img className='Logo' src={catlogo}></img> Cat Tinder
        </a>
      </NavItem>

      <NavItem className='OtherNav'>
        <a style={{
          textDecoration: 'none',
          color:'#662424'}} href="/catindex">See All The Cats</a>
      </NavItem>

      <NavItem className='OtherNav'>
        <a style={{
          textDecoration: 'none',
          color:'#662424'}} href="/catnew">Add A Cat</a>
      </NavItem>

    </Nav>
  )
}

      

export default Header