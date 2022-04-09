import React, { useState } from "react"
import "./ResturantDetails.css"
import data from "../db.json"
import { ResturantCard } from "./ResturantCard";


const ResturantDetails = () => {
    const [resdata, setResData] = useState(data);
    const [fliterRating, setFilterRating] = useState(0);
    const [paymentMethod, setPaymentMethod] = useState("all");

    const handleRating = (rating) => {
        //console.log("rating",rating);
        setFilterRating(rating);
    };

    const handlePayment = (payment_methods) => {
        //console.log(paymentType,paymentType);
        setPaymentMethod(payment_methods);
    }

    const change = (a,b) => {
        return a.data.costforone - b.data.costforone;
    }

    const filterLogic = ({rating, payment_methods}) => {
        //console.log("data",data);

        const { card, cash, upi } = payment_methods;
        
        let paymentMode = true;
        if(paymentMethod === "cash"){
            paymentMode= cash
        }else if(paymentMethod === "card"){
            paymentMode =  card;
        }else if(paymentMethod === "upi"){
            paymentMode = upi;
        }

        return rating >= fliterRating && paymentMode;
    }
    return (
    <>
    <h1>Resturant Details</h1>;
    {
        [4,3,2,1,0].map((rating) => {
            return <button key={rating} onClick={() => handleRating(rating)}>{rating? `${rating} and above` : "All"}</button>
        })
    };
    {["card","cash","upi","all"].map((payment_methods) => {
        return (
            <button key={payment_methods} onClick={() => handlePayment(payment_methods)}>{payment_methods}</button>
        )
    })}
    <button onClick={() => change(data)}>Low to High</button>
    <button onClick={()=> change(data)}>High to Low</button>
    <div className="restaurantcards">
    {resdata.filter(filterLogic)
    .map((item,index) => {
        return <ResturantCard key={item.id} {...item} />
    })}
    </div>
    </>
    )

}

export { ResturantDetails }