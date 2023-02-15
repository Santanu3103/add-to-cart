import React,{useEffect, useState} from 'react'
import axios from 'axios'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import { add } from '../store/cartReduser';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const HomePage = () => {
  const dispatch = useDispatch();
  const[ products,setProduct]= useState([]);
  useEffect(() => {
    axios.get(`https://dummyjson.com/products`).then((response) => {
   
    setProduct(response.data.products)
    });
  }, [`https://dummyjson.com/products`]);

  const handleAdd = (product) => {
    dispatch(add(product));
};

  return (
  
      <div className="row justify-content-center">
        <h1  className="row justify-content-center ">All Items</h1>
        <Container>
        <Row style={{gap:".5px"}}>
        {
          products.map((product,index)=>{
            return (
              <Col xs key={index}>
            <div className='container cards'>
            <Card style={{height:'400px', width: '18rem'}}>
            <Card.Img variant="top" src={product.images[0]}   style={{height:'300px'}}/>     
            <div style={{paddingLeft:"5px"}} >
              <ListGroup.Item>Title : {product.title}</ListGroup.Item>
              <ListGroup.Item>Price : ${product.price}</ListGroup.Item>
              </div>
            <Button variant="dark" size="lg"onClick={() => handleAdd(product)} className="btn1" >
              Add to Cart
            </Button>
          </Card>
          </div>
          </Col>
            )
          })
        }
       
        </Row>
    </Container>
    </div>
  )
}

export default HomePage
