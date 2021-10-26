
import React, { useState, useContext } from 'react'
//context
import { StoreContext } from '../../context/StoreContext'

const Form = () => {

    const {cart, name, setName, surname, setSurname, email, setEmail, phoneNumber, setPhoneNumber, 
        handlePurchase} = useContext(StoreContext)


    return (
        <form onSubmit={handlePurchase}>
            <div className="form_group_inline">
                <div className='form-group'>
                    <label className="form-label" htmlFor="name">
                        Nombre
                    </label>
                    <input 
                        type="text" 
                        placeholder="Nombre"
                        className="form-control"
                        id='name'
                        value={name}
                        required
                        onChange={(e)=>{
                            setName(e.target.value)
                        }}
                    />
                </div>
                <div className='form-group'>
                    <label className="form-label" htmlFor="surname">
                        Apellido
                    </label>
                    <input 
                        type="text" 
                        placeholder="Apellido"
                        className="form-control"
                        id='surname'
                        required
                        value={surname}
                        onChange={(e)=>{setSurname(e.target.value)}}
                    />
                </div>
            </div>
            
            <div className="form-group">
                <label className="form-label" htmlFor="email">
                    Email
                </label>
                <input 
                    type="email" 
                    placeholder="juan@ejemplo.com" 
                    className="form-control"
                    id='email'
                    required
                    value={email}
                    onChange={(e)=>{setEmail(e.target.value)}}
                />
            </div>
            <div className="form-group">
                <label className="form-label" htmlFor="phoneNumber">
                    Teléfono
                </label>
                <input 
                    type="text" 
                    placeholder="153153153" 
                    id='phoneNumber'
                    required
                    className="form-control"
                    value={phoneNumber}
                    onChange={(e)=>{setPhoneNumber(e.target.value)}}
                />
            </div>
            <button className='btn btn-primary btn-final'>Finalizar Compra</button>
        </form>
    )
}

export default Form