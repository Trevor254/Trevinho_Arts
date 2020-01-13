import React from 'react';
import {Link} from 'react-router-dom';
import {ProductConsumer} from '../Context';

class Gallery2 extends React.Component{
  
    render(){
        const {id,title,img,price,inCart} = this.props.product;
        return (
              <div className="col-9 mx-auto col-md-6 col-lg-3 my-3">
                <div className="card">
                    <div className="img-container p-5" onClick={()=>console.log('you clicked me')}>
                        <Link to="/details">
                          <img src={img} alt="" className="card-img-top"/>
                        </Link>
                        <br/>
                        <button className="cart-btn" disabled={inCart?true:false}
                        onClick={
                            ()=>{
                                console.log('added to cart')
                                }
                                }
                        >
                        {
                            inCart?(<p className="text-capitalize mb-0" disabled> in Cart</p>):(<i className="fas fa-cart-plus"/>)
                            }
                        </button>
                    </div>
                </div>
            </div> 
        )
    }
}

export default Gallery2;

          