import React from "react"

const ResturantCard = (props) => {
    console.log(props);
    const newPaymentArray = Object.entries(props.payment_methods).map(item => item[1] ? item[0] : "")
    return (
        <>
        <div style={{
            border : "2px solid black",
            margin : "10px"}}>
            <div style={{display:"flex", justifyContent:"center", alignItem:"center"}}>
                <div style={{flex : 2}}>
                    <img src={props.image} alt={props.username} width="200px" height="200px" />
                </div>
                <div>
                    <h3>{props.username}</h3>
                    <p>{props.address}</p>
                    <p>Cost : {props.costforone}</p>
                    <p>Accepts : {newPaymentArray.join(",")}</p>
                </div>
                <div>
                    <div style={{backgroundColor : "green", padding:"10px", borderRadius:"50px" }}>{props.rating}</div>
                    <div>{props.votes}</div>
                    <div>{props.reviews}</div>
                </div>
            </div>
        </div>
        </>
    )
}

export { ResturantCard }