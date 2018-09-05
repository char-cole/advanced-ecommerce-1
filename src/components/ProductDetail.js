import React, {Component} from 'react';

class ProductDetail extends Component {

    addToCart = () => {
        const item = this.props.product.name;
        this.props.updateCart(item);
    };

    render(){
        let stars = [];
        for(let i = 0 ; i < this.props.product.rating ; i++){
            stars.push(<span className="glyphicon glyphicon-star"/>)
        }
        return (
            <div className="col-sm-4 col-lg-4 col-md-4">
                <div className="thumbnail">
                    <img src={this.props.product.imgUrl} alt=""/>
                    <div className="caption">
                        <h4 className="pull-right">{this.props.product.price}</h4>
                        <h4><a href="#">{this.props.product.name}</a>
                        </h4>
                        <p>{this.props.product.description}</p>
                    </div>
                    <div className="ratings">
                        <p className="pull-right">{this.props.product.ratings}</p>
                        <p>
                            {stars}
                        </p>
                    </div>
                    <div>
                        <button onClick={this.addToCart}>Add to Cart</button>
                    </div>
                </div>
            </div>
        )
    }
}
export default ProductDetail