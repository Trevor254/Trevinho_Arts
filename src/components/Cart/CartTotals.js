import React from 'react'
import {Link} from 'react-router-dom';

export default function CartTotals({value}) {
    const {cartSubtotal, cartTax, cartTotal, clearCart} = value;
    return (
        <div>
            
                <div className="row">
                    <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
                       <Link to="/gallery">
                          <button 
                          className="btn btn-outline-danger text-uppercase mb-3 px-5" 
                          type="button"
                          onClick={()=> {
                              clearCart()
                          }}
                          >clear cart</button>
                       </Link>
                       <h5>
                           <span className="text-light">
                               subtotal :
                           </span>
                           <strong className="strong">
                               $ {cartSubtotal}
                           </strong>
                       </h5>

                       <h5>
                           <span className="text-light">
                               tax :
                           </span>
                           <strong className="strong">
                               $ {cartTax}
                           </strong>
                       </h5>
                       
                       <h5>
                           <span className="text-light">
                               total :
                           </span>
                           <strong className="strong">
                               $ {cartTotal}
                           </strong>
                       </h5>
                    </div>
                </div>
            
        </div>
    )
}
