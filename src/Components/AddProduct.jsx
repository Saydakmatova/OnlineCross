import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

const AddProduct = (props) => {
  //! 1
  const [model, setModal] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    let newProduct = {
      model,
      price,
      image,
      id: Date.now(),
    };
    props.addProduct(newProduct);
  }
  return (
    <div className="add-product">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Введите модель обуви</Form.Label>
          <Form.Control
            onChange={(e) => setModal(e.target.value)}
            type="text"
            placeholder="Mодель обуви.."
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Введите цену</Form.Label>
          <Form.Control
            onChange={(e) => setPrice(e.target.value)}
            type="number"
            placeholder="Цена обуви..."
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Введите фото</Form.Label>
          <Form.Control
            onChange={(e) => setImage(e.target.value)}
            type="text"
            placeholder="Фото обуви..."
          />
        </Form.Group>
        <Button type="submit">Добавить</Button>
      </Form>
    </div>
  );
};

export default AddProduct;
