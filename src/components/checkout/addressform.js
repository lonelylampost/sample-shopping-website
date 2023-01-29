import React from 'react'
import { useForm, FormProvider} from 'react-hook-form'
import { FormCreate } from './forms'
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react'

function AddressForm({checkoutToken, next}) {

    const navigate = useNavigate()
    const methods = useForm()

    function goToBag() {
        navigate('/shopping-cart')
    }

    return (
    <>
        <div id='title-spec'>Shipping</div>
        <div id='checkout-sides'>
            <FormProvider {...methods}>
                <form className='checkout-form'onSubmit={methods.handleSubmit((data) => next({ ...data }))}>
                    <FormCreate required name='firstName' label='First name' />
                    <FormCreate required name='listName' label='Last name' />
                    <FormCreate required name='address' label='Address' />
                    <FormCreate required name='email' label='Email' />
                    <FormCreate required name='city' label='City' />
                    <FormCreate required name='zip' label='Postal Code' />
                    <div id='checkout-btns'>
                        <button className='checkout-btn' onClick={goToBag}>Back to shopping cart</button>
                        <button className='checkout-btn' type='submit'>Next</button>
                    </div>
                </form>
            </FormProvider>
            <div id='checkout-side-r'>
                <div>Total</div>
                <div>Sub-total : {}</div>
                <div>Delivery : </div>
                <div className='checkout-finalcost'></div>
            </div>
        </div>
    </>
    )
}

export default AddressForm