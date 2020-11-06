import React, {Component} from 'react';
import './cart.css';
import Axios from 'axios';
import {Link} from 'react-router-dom';


class Cart extends Component {
    OrderNo = 0;
    OrderTime = 0;
    TotalAmt = 0;
    

    order = [
        {
            name: "Order No",
            value: "Rs " + this.OrderNo
        },
        {
            name: "Order Time",
            value: "Rs " + this.OrderTime
        },
        {
            name: "Payment Mode",
            value: "Credits"
        },
        {
            name: "Total Amount",
            value: "Rs " + this.TotalAmt
        }
    ]

    state = {
        data : []
    }

    
    componentWillMount(){
        window.scrollTo(0,0);
            Axios.get("https://localhost:4001/getOrders")
            .then((res) => {
                this.setState({
                    data : res.data                    
                })
            });
    }

    removeCart = (cart, pid) => {
        for(let i=0;i<cart.length; i++){
            if( cart[i].itemdata.id === pid){
                cart.splice(i,1);
            }
        }
        return cart;
    }
    removeItem = (id) => {
            Axios.put("https://localhost:4001/getOrders/create" , {
                "pid" : id
            })
            .then(res => {
                console.log(res.data);
                this.setState({data: res.data});
                console.log(this.state.data);
            })
            .catch(err => {
                console.log(err);
            })
      
    }

    
    render(){
        this.itemTotal = 0;
        this.state.data.map((item) => {
            this.itemTotal += (parseInt(item.itemdata.price))*(item.selectedProps.quantity);
            return null;
        })
        this.gst = 0;
        this.gst += Math.ceil(this.itemTotal*18/100)
        this.total = 0;
        this.total = this.itemTotal + this.gst
        return (
            <div>
                <h1 style={{textAlign: "center", fontWeight: "bold", marginTop: '10px', padding: '0 0 20px 0'}}>My Cart</h1>
                <div className="cart-grid">
                    <div className="cart-items" > 
                    <p className="menu-items" style={{fontSize: "26px"}}>
                        <b>Item Name</b> : Samosa
                    </p>
                    <p className="menu-items" style={{fontSize: "26px"}}>
                        <b>Item Quantity</b> : 2
                    </p>
                    <p className="menu-items" style={{fontSize: "26px"}}>
                        <b>Price</b> : 30/-
                    </p>
                    <hr></hr>
                    <p className="menu-items" style={{fontSize: "26px"}}>
                        <b>Item Name</b> : Sandwich
                    </p>
                    <p className="menu-items" style={{fontSize: "26px"}}>
                        <b>Item Quantity</b> : 2
                    </p>
                    <p className="menu-items" style={{fontSize: "26px"}}>
                        <b>Price</b> : 80/-
                    </p>
                    </div>
                    <div className="cart-details-grid" >
                        <div className="cart-details" style={{height: '100%'}}>                                                
                            <div className="cart-order-details" style={{marginBottom: "-20px", paddingBottom: '10px'}}>
                                <span style={{color: "gray", fontSize: "15px"}}>Billing Details</span>
                                <div style={{border: "1px solid #000000", display: "flex", flexDirection: "column", borderBottom: "none", marginTop: '10px'}}>
                                    <div style={{justifyContent: "space-between", display: "flex", padding: "20px 15px", borderBottom: "1px solid #000000"}}>
                                        <span style={{color: "gray",fontWeight: 'bold'}}>Order No</span>
                                        <span style={{fontWeight: "bold"}}> 2</span>
                                    </div>
                                    <div style={{justifyContent: "space-between", display: "flex", padding: "20px 15px", borderBottom: "1px solid #000000"}}>
                                        <span style={{color: "gray",fontWeight: 'bold'}}>GST</span>
                                        <span style={{fontWeight: "bold"}}>5%</span>
                                    </div>
                                    <div style={{justifyContent: "space-between", display: "flex", padding: "20px 15px", borderBottom: "1px solid #000000"}}>
                                        <span style={{color: "gray",fontWeight: 'bold'}}>Payment Mode</span>
                                        <span style={{fontWeight: "bold"}}>Credits</span>
                                    </div>
                                    <div style={{justifyContent: "space-between", display: "flex", padding: "20px 15px", borderBottom: "1px solid #000000"}}>
                                        <span style={{color: "gray",fontWeight: 'bold'}}>Total Amount</span>
                                        <span style={{fontWeight: "bold"}}>Rs 114</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="cart-order-details" style={{textAlign: 'end', marginTop: '-40px'}}>
                         <button style={{
                                background: "#02bae9",
                                color: "black",
                                fontWeight: "bold",
                                fontSize: "22px"}}>PROCEED TO CHECKOUT</button>
                            </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Cart;