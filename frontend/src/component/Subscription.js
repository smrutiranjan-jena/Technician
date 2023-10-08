import { Card, CardBody, CardTitle, ListGroup, ListGroupItem, CardText, CardLink, Button } from 'reactstrap'
import subscribe from '../assets/images/2953955.jpg'
import axios from 'axios'
import { useState } from 'react'
import Swal from 'sweetalert2'
const Subscription = (props) => {
    const [duration, setDuration] = useState('')
    const [amount, setAmount] = useState(0)
    const subcribeData = [
        { duration: '1 month', amount: 500 },
        { duration: '6 month', amount: 2900 },
        { duration: '1 year', amount: 5500 }
    ]
    const subscribeItem = (duration,amount) => {
        setDuration(duration)
        setAmount(amount)
    }
    console.log(duration,amount)
     // 3rd open Razorpay payment comp
     const handleOpenRazorpay = (orderData) => {
        const options = {
            key: 'rzp_test_fVgZJ4nfMBNcvA',
            amount: orderData.amount * 100,
            currency: orderData.currency,
            name: 'Technician.com',
            description: 'xyz',
            order_id: orderData.id,
            handler: function (response) {//call after succesful payment
                console.log(response)
                axios.post('http://localhost:3004/api/payments/verify', response)
                    .then((response) => {
                        console.log(response.data)
                        Swal.fire(
                            'Good job!',
                            'Now You Are Added as a Technician Of Our Community!',
                            'success'
                          )
                        props.props.history.push('/details')
                    })
            },
            theme: {
                "color": "#4472C4"
            }
        }
        const rzp = new window.Razorpay(options)
        rzp.open()
    }
    // 2nd payment button handle
    const handlePayment = (amount) => {
        const data = {
            amount: amount
        }
        axios.post('http://localhost:3004/api/payments/order', data)
            .then((response) => {
                console.log(response.data)
                handleOpenRazorpay(response.data.orderData)
            })
            .catch((err) => {
                console.log(err)
            })
    }
    return (
        <div>
            <h1 className="commonHeading" >To Add Your Details follow Here </h1>
            <p style={{textAlign:"center",fontSize:"15px",color:"#4472C4"}}>Subscribe To Reach Out to 1000+ Customers And Get Benifits...</p>
            <br/>
            <Card
                style={{
                    width: '18rem',
                    textAlign: "center",
                    margin: "auto",
                    marginBottom:"20px"
                }}
            >
                <img
                    alt="Card"
                    src={subscribe}
                />
                <CardBody >
                    <CardText tag="h5">
                        Pricing Amount
                    </CardText>
                </CardBody>
                <ListGroup flush style={{cursor:"pointer"}}>
                    {subcribeData.map((ele) => {
                        return <ListGroupItem style={{ backgroundColor: "#4472C4", color: "white", marginBottom:"5px"}}
                            onClick={()=>{
                                subscribeItem(ele.duration,ele.amount)
                            }}
                        >
                            For {ele.duration} - Rs. <span style={{fontSize:"20px"}}>{ele.amount}/-</span>
                        </ListGroupItem>
                    })}

                </ListGroup>
                <CardBody>
                    <Button
                        color="primary"
                        outline
                        onClick={()=>{
                            handlePayment(amount)
                        }}
                    >
                        Pay Now
                    </Button>
                </CardBody>
            </Card>
        </div>
    )
}
export default Subscription