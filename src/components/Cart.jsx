import React, { useEffect, useState } from 'react'
import { Button, Col, Form, Image, ListGroup, ListGroupItem, Row } from 'react-bootstrap'
import { AiFillDelete } from 'react-icons/ai'
import { CartContext } from '../context/Context'
import { cartReducer } from '../context/Reducer'
import Rating from './Rating'

const Cart = () => {

  const { state: { cart }, dispatch } = CartContext();
  const [total, setTotal] = useState()
  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + Number(curr.price)*curr.qty, 0))
  }, [cart])
  return (
    <div className='home'>
      <div className="homeContainer">
        <ListGroup>
          {
            cart.map((item) => (
             <ListGroup.Item key={item.id}>
                <Row>
                  <Col md={2}>
                    <Image src={item.image} alt={item.name} fluid rounded/>
                  </Col>
                  <Col md={2}>
                    {item.name}
                  </Col>
                  <Col md={2}>
                   $ {item.price}
                  </Col>
                  <Col md={2}>
                    <Rating rating={item.rating} />
                  </Col>
                  <Col md={2}>
                    <Form.Control as="select" value={item.qty}
                      onChange = {(e) => 
                      dispatch({
                       type: "QTY_CHANGE",
                       payload: {
                          id : item.id,
                          qty : e.target.value,
                        },
                      }
                     )}
                    >
                      {[...Array(item.inStock).keys()].map((x) =>(
                        <option key={x+1}>
                             {x+1}
                        </option>
                      )
                     )}
                    </Form.Control>
                  </Col>
                  
                  <Col md={2}>
                    <AiFillDelete
                    fontSize={"40px"}
                    color="red"
                    cursor={"pointer"}
                    onClick={()=> dispatch({
                      type:"REMOVE_FROM_CART",
                      payload:item
                    })}
                    />
                  </Col>
                 
                </Row>
             </ListGroup.Item>
              
            ))
          }
        </ListGroup>
      </div>
      <div className="filter summary">
        <span className='title'>total ({cart.length}) items</span>
        <span style={{fontWeight:"700", fontSize:"20px"}}>Total: $ {total}</span>
        <Button disabled={cart.length === 0} >
          Proceed to checkout
        </Button>
      </div>

    </div>
  )
}

export default Cart