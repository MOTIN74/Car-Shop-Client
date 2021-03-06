import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Product from '../Product/Product';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [loader, setLoader] = useState(false);

    useEffect(() => {
        setLoader(true)
        fetch('https://pacific-beach-70694.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
            .finally(() => setLoader(false))
    }, [])



    return (
        <div className='my-5'>
            <Container>
                {/* products part title and data mapping */}
                <div className='my-4 text-start pb-3 pt-5'>
                    <h2 className='fw-bold text-white'>The latest new car releases</h2>
                </div>

                {loader &&
                    <div className='text-center'>
                        <button class="btn btn-primary" type="button" disabled>
                        <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                        Loading...
                        </button>
                    </div>
                }

                <Row xs={1} md={2} lg={3} xl={4} className='g-4'>
                    {
                        products.slice(0, 6).map(product => <Product
                            key={product._id}
                            product={product}
                        ></Product>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Products;