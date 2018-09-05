import React, { Component } from 'react';
import Header from './components/Header';
import Carousel from './components/Carousel';
import Footer from './components/Footer';
import ProductDetail from './components/ProductDetail';
import Sidebar from './components/Sidebar';
// import OrderModel from './models/Order';
import './App.css';

// const mongoose = require("mongoose");
// mongoose.Promise = global.Promise;
// const promise = mongoose.connect("mongodb://admin:goodpass1@ds141972.mlab.com:41972/ecommerce", {
//     useMongoClient: true,
// });

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: this.props.products,
            cart: []
        };
    }

    updateCart = (item) => {
        const cart = this.state.cart;
        cart.push(item);
        this.setState({
            cart: cart
        })
    }

    // handleCheckout = () => {
    //     const newOrder = new OrderModel(req.body);
    //     newOrder.save()
    //     .then(message => {
    //         res.json(message);
    //     });
    // }

    render() {
    return(
      <div className="App">
        <Header cart={this.state.cart}/>
        <div className="container">
            <div className="row">
                <Sidebar />
                <div className="col-md-9">
                    <Carousel/>
                    <div className="row">
                        <ProductDetail product={this.state.products[7]} updateCart={this.updateCart}/>
                        <ProductDetail product={this.state.products[9]} updateCart={this.updateCart}/>
                        <ProductDetail product={this.state.products[2]} updateCart={this.updateCart}/>
                        <ProductDetail product={this.state.products[3]} updateCart={this.updateCart}/>
                        <ProductDetail product={this.state.products[1]} updateCart={this.updateCart}/>
                        <ProductDetail product={this.state.products[8]} updateCart={this.updateCart}/>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <hr/>
            <Footer/>
        </div>
      </div>
    )
};
}

export default App;