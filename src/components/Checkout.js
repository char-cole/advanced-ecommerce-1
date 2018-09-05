import React from 'react';
class Checkout extends Component {
    
    handleCheckout = () => {
        this.props.checkoutButton
    }

    render(){
        return (
            <button onClick={this.handleCheckout}>Checkout
            </button>
        )
    }
}
export default Checkout