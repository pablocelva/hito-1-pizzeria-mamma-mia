import React from 'react'
import Header from './Header'
import CardPizza from './CardPizza'
import { Container, Row, Col } from 'react-bootstrap'

export default function Home() {
    return (
        <>
            <Header/>
            {/* <div className="productos d-flex my-5 border-warning">
                <div className="cards d-flex my-2 mx-5 gap-4 ">
                    <CardPizza
                    name="Napolitana"
                    price={5950}
                    ingredients={["mozzarella", "tomates", "jamón", "orégano"]}
                    img="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=media&token=6a9a33da-5c00-49d4-9080-784dcc87ec2c"
                    />
                    <CardPizza
                    name="Española"
                    price={6950}
                    ingredients={["mozzarella", "gorgonzola", "parmesano", "provolone"]}
                    img="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fcheese-164872_640_com.jpg?alt=media&token=18b2b821-4d0d-43f2-a1c6-8c57bc388fab"
                    />
                    <CardPizza
                    name="Pepperoni"
                    price={6950}
                    ingredients={["mozzarella", "pepperoni", "orégano"]}
                    img="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_com.jpg?alt=media&token=e7cde87a-08d5-4040-ac54-90f6c31eb3e3"
                    />
                </div>
            </div> */}
            <Container fluid className="productos my-5 border-warning">
                <Row className="cards d-flex margin-cards">
                    <Col xs={12} sm={6} lg={4} className="d-flex justify-content-center">
                        <CardPizza
                            name="Napolitana"
                            price={5950}
                            ingredients={["mozzarella", "tomates", "jamón", "orégano"]}
                            img="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=media&token=6a9a33da-5c00-49d4-9080-784dcc87ec2c"
                        />
                    </Col>
                    <Col xs={12} sm={6} lg={4} className="d-flex justify-content-center">
                        <CardPizza
                            name="Española"
                            price={6950}
                            ingredients={["mozzarella", "gorgonzola", "parmesano", "provolone"]}
                            img="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fcheese-164872_640_com.jpg?alt=media&token=18b2b821-4d0d-43f2-a1c6-8c57bc388fab"
                        />
                    </Col>
                    <Col xs={12} sm={6} lg={4} className="d-flex justify-content-center">
                        <CardPizza
                            name="Pepperoni"
                            price={6950}
                            ingredients={["mozzarella", "pepperoni", "orégano"]}
                            img="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_com.jpg?alt=media&token=e7cde87a-08d5-4040-ac54-90f6c31eb3e3"
                        />
                    </Col>
                </Row>
            </Container>
        </>
    )
}
