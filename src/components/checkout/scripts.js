import React from 'react'
import { useState } from 'react';
import { cart, cartNum } from '../bagcontext'
import './styles.css'
import { Stepper, Step, StepLabel } from '@mui/material'

import AddressForm from './addressform';
import PaymentForm from './paymentform';

function Checkout() {
    const steps = ["Shipping address", 'Payment details']
    const [activeStep, setActiveStep] = useState(0)
    const [checkoutToken, setCheckoutToken] = useState(null)
    const [shippingData, setShippingData] = useState(null)


    const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1)
    const backStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1)

    const Form = () => activeStep === 0
        ? <AddressForm checkoutToken={checkoutToken} next={next} />
        : <PaymentForm />

    function Confirmation() {
        return (
            <div>Confim</div> 
        )
    }

    const next = (data) => {
        setShippingData(data)
        nextStep()
    }

    return (
        <>
            <div id="title">Checkout</div>
            <Stepper activeStep={activeStep}>
                {steps.map((step) => (
                    <Step key={step}>
                        <StepLabel>{step}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            {activeStep === steps.length ? <Confirmation /> : <Form />}
        </>
    )
}

export default Checkout