import React from 'react'
import {Nav, NavItem} from 'reactstrap';


const Header = () => {
  return (
<Nav fill pills>
  <NavItem>
    <a href="/catindex">See All The Cats</a>
  </NavItem>
  {/* <NavItem>
    <a href="/catshow">
      See A Cat Here
    </a>
  </NavItem> */}
  <NavItem>
    <a href="/catnew">Add A Cat</a>
  </NavItem>
  <NavItem>
    <a href="/catedit">Edit A Cat</a>
  </NavItem>
</Nav>
  )
}

      

export default Header