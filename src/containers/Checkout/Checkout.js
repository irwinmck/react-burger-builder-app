import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from '../Checkout/ContactData/ContactData';

class Checkout extends Component {

  checkoutConfirmHandler = () => {
    this.props.history.replace('/checkout/contact-data');
  }

  checkoutCancelHandler = () => {
    this.props.history.goBack();
  }
  
  render() {
    let summary = <Redirect to="/" />
    
    if (this.props.ings) {
      const purchasedRedirect = this.props.purchased ? <Redirect to="/" /> : null;

      summary = (
        <div>
          { purchasedRedirect }
          <CheckoutSummary 
              ingredients={this.props.ings}
              checkoutConfirm={this.checkoutConfirmHandler} 
              checkoutCancel={this.checkoutCancelHandler} 
          />
          <Route 
            path={this.props.match.url + '/contact-data'} 
            component={ContactData}
          />
        </div>
      )
    }

    return(
      <div>
        { summary }
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ings: state.burgerBuilder.ingredients,
    purchased: state.order.purchased
  };
}

export default connect(mapStateToProps)(Checkout);