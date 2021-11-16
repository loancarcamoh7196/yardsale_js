import React from 'react';
import '../styles/Home.scss';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';


const Home = () => {
    return (
        <>
            <Header/>
            <section className='cart__container'>
                <div className='cards-container'>
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                
                </div>
            </section>
        </>
    );
};

export default Home;