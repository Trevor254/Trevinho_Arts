import React, { Component } from 'react'
import {ProductConsumer} from '../Context';
import {Link} from 'react-router-dom';
import {ButtonContainer} from './Button';


export default class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                { value => {
                   const {id,title,img,price,info,inCart} = value.detailProduct;
                   return (
                       <div className = "container py-5">
                           {/* title */}
                           <div className="row">
                               <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                                   <h1 className="header">{title}</h1>
                               </div>
                           </div>
                           {/* end title */}
                           {/*Product information */}
                           <div className="row">
                               <div className="col-10 mx-auto col-md-6 my-3">
                                   <img src={img}  className="img-fluid" alt=""/>
                               </div>
                               {/*Product text */}
                               <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                   <h2 className="header"> title : {title}</h2>
                                   <br/>
                                   <h4 className="text-blue">
                                       <strong>
                                       <span>$</span>   price : {price} 
                                       </strong>
                                   </h4>
                                   <p className="text-capitalize font-weight-bold text-black mt-3 mb-0"> Information about sketch</p>
                                   <p className="text-muted lead">{info}</p>
                                   {/*buttons */}
                                   <div>
                                       <Link to='/Gallery'>
                                         <ButtonContainer>
                                             Back to products
                                         </ButtonContainer>
                                       </Link>
                                       <ButtonContainer 
                                        cart  
                                        disabled = {inCart ? true:false}
                                        onClick={()=>{
                                             value.addToCart(id);
                                             value.openModal(id);
                                         }}>
                                           {inCart ? "inCart" : "add to cart"}
                                       </ButtonContainer>
                                   </div>
                               </div>
                           </div>
                       </div>
                   )
                }}
            </ProductConsumer>
        )
    }
}
