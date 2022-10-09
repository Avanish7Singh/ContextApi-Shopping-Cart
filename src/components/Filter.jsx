import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { CartContext } from '../context/Context';
import Rating from './Rating';

const Filter = () => {
  const [rate, setRating] = useState(3);

  const { productState: { byStock, byFastDelivery, byRating, querySearch, sort }, productDispatch } = CartContext()

  console.log(byStock, byFastDelivery, byRating, sort, querySearch)
  return (
    <div className='filter'>
      <span className='title'>Filter Products</span>
      <span className='formBox'>
        <Form.Check
          className='form'
          inline
          label="Ascending"
          name="group1"
          type="radio"
          id={`inline-1`}
          onChange={() => productDispatch({
            type: "ASCENDING_DESCENDING",
            payload: "LowToHigh",
          })}
          checked={sort === "LowToHigh" ? true : false}
        />

        <Form.Check
          className='form'
          inline
          label="Descending"
          name="group1"
          type="radio"
          id={`inline-2`}
          onChange={() => productDispatch({
            type: "ASCENDING_DESCENDING",
            payload: "HighToLow",
          })}
          checked={sort === "HighToLow" ? true : false}
        />

        <Form.Check
          className='form'
          inline
          label="Include out of stock"
          name="group2"
          type="checkbox"
          id={`inline-3`}
          onChange={() => productDispatch({
            type: "FILTER_BY_STOCK",
          })}
        />

        <Form.Check
          className='form'
          inline
          label="Fast delivery only"
          name="group1"
          type="checkbox"
          id={`inline-4`}
          onChange={() => productDispatch({
            type: "FILTER_BY_DELIVERY",
          })}
        />
      </span>
      <span className='rating'>
        <label style={{ paddingRight: '10px' }}>Rating:</label>
        <Rating rating={byRating} onClick={(i) =>
          productDispatch({
            type: "FILTER_BY_RATING",
            payload: i + 1,
          })
        } style={{ cursor: "pointer" }} />
      </span>

      <Button variant='light' onClick={() => productDispatch({
        type: "FILTER_BY_CLEAR"
      })}>Clear filters</Button>
    </div>
  )
}

export default Filter