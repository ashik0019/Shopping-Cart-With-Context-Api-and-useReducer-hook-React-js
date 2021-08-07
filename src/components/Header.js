import React from 'react'
import {
    Badge,
    //Button,
    Container,
    Dropdown,
    FormControl,
    Nav,
    Navbar,
} from "react-bootstrap";
import {FaShoppingCart} from 'react-icons/fa'
//import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar bg="dark" variant="dark" style={{ height: 70 }}>
            <Container>
                <Navbar.Brand>
                    {/* <Link to='/cart'>Shopping Cart</Link> */}
                    <span>Shoping cart</span>
                </Navbar.Brand>
                <Navbar.Text>
                    <FormControl
                        //style={{ width: 500 }}
                        placeholder="Search a product"
                        className="m-auto"
                    />
                </Navbar.Text>
                <Nav>
                    <Dropdown alignRight>
                        <Dropdown.Toggle variant='success'>
                            <FaShoppingCart color="#fff" fontSize="25px"/>
                            <Badge>{100}</Badge>
                        </Dropdown.Toggle>
                        <Dropdown.Menu style={{minWidth: 370}}>
                            <span style={{padding: 10}}>Chat is empty</span>
                        </Dropdown.Menu>
                    </Dropdown>
                </Nav>
            </Container>

        </Navbar>
    )
}

export default Header
