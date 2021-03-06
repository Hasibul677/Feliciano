import Button from "@restart/ui/esm/Button";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Card, Container } from "react-bootstrap";
import { addToCart} from "../../fakeDb/LocalStorage";
import "./Menu.css";
import useCart from './../../Hooks/useCart';

const Menu = () => {
  const [categorys, setCategorys] = useState([]);
  const {addToOrder} = useCart();
  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((res) => res.json())
      .then((data) => setCategorys(data.categories));
  }, []);

  const handleToCart =categorys=>{
    addToCart(categorys.strCategory);
  }
  
  

  return (
    <Container>
      <div className="position-relative margin text-center">
        <span className="menuTitle">Specialties</span>
        <h1 className="display-3 fw-bold mb-3">Our Menu</h1>
      </div>
      <div className="row mt-5">
        {categorys.map((category) => (
          <Display key={category.idCategory} category={category} handleToCart={handleToCart} addToOrder={addToOrder}></Display>
        ))}
      </div>
    </Container>
  );
};

function Display(props) {
  const {strCategory, strCategoryThumb } = props.category;
  const {handleToCart, addToOrder, category}= props;
  

  const foodCart = ()=>{
    handleToCart(props.category)
   addToOrder(category)
  }

  return (
    <div className="col-12 col-md-12 col-lg-6 d-flex shadow-lg">
      <Card>
        <div className="row">
          <div className="col-5 col-md-6">
            <Card.Img src={strCategoryThumb} />
          </div>
          <div className="col-5 col-md-4">
            <Card.Body>
              <Card.Title>{strCategory}</Card.Title>
              <Card.Text>
                Meat, Potatoes,
                <br /> Tomatoe
              </Card.Text>
              <Button onClick={foodCart} variant="primary">Order Now</Button>
            </Card.Body>
          </div>
          <div className="col-2 pt-4 fw-bold fs-5 text-danger">
            <strong>$29</strong>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default Menu;
