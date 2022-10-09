import React from 'react'
import { Navbar, Container, FormControl, Nav, Dropdown, Badge, Button, } from 'react-bootstrap';
import { AiFillDelete } from 'react-icons/ai';
import { FaShoppingCart } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import { CartContext } from '../context/Context';

const Header = () => {

    const { state: { cart }, dispatch, productState:{querySearch} , productDispatch} = CartContext();
    return (
        <Navbar bg= 'dark' variant='dark' style= {{ height: '70px' }}>
            <Container>
                <Navbar.Brand>
                    <Link to='/' >Shopping Cart</Link>
                </Navbar.Brand>
                <Navbar.Text className='text'>
                    <FormControl style={{ width: "500px" }} placeholder="Search a product"
                        className='m-auto' onChange={(e) => productDispatch({
                            type: "FILTER_BY_SEARCH",
                            payload: e.target.value,  
                        }) } />
                </Navbar.Text>
                <Nav>
                    <Dropdown >
                        <Dropdown.Toggle variant='success'>
                            <FaShoppingCart color='white' fontSize="25px" style={{ marginRight: "4px" }} />
                            <Badge>{cart.length}</Badge>
                        </Dropdown.Toggle>
                        <Dropdown.Menu style={{ minWidth: "400px" }}>
                            {
                                cart.length > 0 ? (
                                    cart.map((item) => (
                                        <span className='cartDetail'>
                                            <img src={item.image} alt={item.name} className="cartImg" />
                                            <div className="titleCard">
                                                <span>{item.name}</span>
                                                <span>$ {item.price}</span>
                                            </div>
                                            <AiFillDelete
                                                fontSize='40px'
                                                color="red"
                                                cursor="pointer"
                                                onClick={() => dispatch({
                                                    type: "REMOVE_FROM_CART",
                                                    payload: item
                                                })}
                                            />
                                        </span>

                                    ))
                                ) : (
                                    <span style={{ padding: 10 }}>Cart is Empty!!!! </span>

                                )

                            }
                            <Link to='/cart'>
                            <Button style={{width:"95%", cursor:"pointer", margin:"0 10px"}} >
                                Go to cart
                            </Button>   
                            </Link>
                            
                        </Dropdown.Menu>
                    </Dropdown>

                </Nav>
            </Container>
        </Navbar>
    )
}

export default Header