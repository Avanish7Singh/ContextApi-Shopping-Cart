import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { CartContext } from '../context/Context'
import Rating from './Rating'

const SinglePage = ({ prod }) => {

  const { state: { cart }, dispatch } = CartContext()
  // console.log(cart,"###########")
  return (
    <div className="products">
      <Card >
        <Card.Img variant='top' src={prod.image} alt={prod.name} />
        <Card.Body>
          <Card.Title>{prod.name}</Card.Title>
          <Card.Subtitle style={{ paddingBottom: "20px" }}>
            <span>$ {prod.price}</span>
            {
              prod.fastDelivery ? (
                <h2>Fast Delivery</h2>
              ) : (
                <h2>Delivery in 4 Days</h2>
              )
            }
            <Rating rating={prod.rating} />
          </Card.Subtitle>
          {
            cart.some((a) => a.id === prod.id) ? (
              <Button onClick={() => (dispatch({
                type: "REMOVE_FROM_CART",
                payload: prod
              }))} variant="danger">Remove from Cart</Button>
            ) : (
              <Button onClick={() => (dispatch({
                type: "ADD_TO_CART",
                payload: prod
              }))} disabled={!prod.inStock}>
                {
                  !prod.inStock ? "out of stock" : "add to cart"
                }
              </Button>
            )
          }
        </Card.Body>


      </Card>
    </div>

  )
}

export default SinglePage