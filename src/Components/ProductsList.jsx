import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";

const ProductsList = (props) => {
  return (
    <div>
      <Row xs={1} md={3} className="g-4">
        {props.allProducts.map((item) => (
          <Col key={item.id}>
            <Card>
              <Card.Img className="card-image" variant="top" src={item.image} />
              <Card.Body>
                <Card.Title>{item.model}</Card.Title>
                <Card.Text>
                  Цена: <strong>{item.price}$</strong>
                </Card.Text>
                <Button onClick={() => props.deleteProduct(item.id)}>
                  <img
                    width={50}
                    height={40}
                    src="https://cdn-icons.flaticon.com/png/512/3493/premium/3493229.png?token=exp=1641377168~hmac=c23116fb3011d5514c34d220f2f8be32"
                    alt="Delete"
                  />
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ProductsList;
