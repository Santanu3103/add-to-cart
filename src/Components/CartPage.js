import React,{useState} from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { remove,clear} from '../store/cartReduser';
import { useSelector, useDispatch } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const CartPage = () => {
  const dispatch = useDispatch();
  const handleRemove = (productId) => {
    dispatch(remove(productId));
};

  const products= useSelector(state=> state.cart);
  return (
   
    <div className="row justify-content-center">
      <h1  className="row justify-content-center ">My Cart</h1>
      <div className='list'>  
      <Container>
      <Row>
      {
        products.map((product,index)=>{
          return (
            
            <Col key={index}>
          <div className='container cards'>
          <Card style={{height:'400px', width: '18rem'}}>
            <Card.Img variant="top" src={product.images[0]}   style={{height:'300px'}}/>      
            <div style={{paddingLeft:"5px"}} >
            <ListGroup.Item>Title : {product.title}</ListGroup.Item>
            <ListGroup.Item>Price : ${product.price}</ListGroup.Item>
          </div>
          <Button variant="dark" size="lg"
            onClick={() => handleRemove(product.id)}
            className="btn1"
           >
            Remove from Cart
          </Button>
        </Card>
        </div>
        </Col>
        
          )
        })
      }
      </Row>
    </Container>

    <div  className="bill justify-content-center">
     
        <h3 className=" justify-content-center p-3"> Checkout List</h3>
      {
        products.map((product,index)=>{
          return (         
          <ListGroup key={index} className="list-group-flush  " >
          <ListGroup.Item className='list-inside total-bar '>
          <span> {product.count}#. {product.title}</span>
          <span>${product.price}</span>
          </ListGroup.Item>   
          </ListGroup>    
          )
        })
      }
      <hr className="line"/>
             <ListGroup className="list-group-flush">    
            <ListGroup.Item className='list-inside total-bar'>
           <span> {products.reduce((total, item)=>total+(item.count),0)}# Total : </span>
            <span>
            ${products.reduce((total, item)=>total+(item.price*item.count),0)} </span>
            </ListGroup.Item>
                       
            <button 
                variant="outline-dark" 
                size="lg"
                onClick={() => {dispatch(clear());} }
                className="btn2"
                >
               Click To Checkout
              </button>
           
          </ListGroup>
    </div>  
   </div>
  </div>
  )
}

export default CartPage
