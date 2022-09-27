import React from 'react'
import { useState } from 'react'
import { Mensaje } from './Mensaje'

export const NuevoPresupuesto = ({presupuesto, setPresupuesto, setIsValidPresupuesto}) => {

    const [mensaje, setMensaje] = useState('')

    const handleInputChange = (e) => {
        setPresupuesto(Number(e.target.value))
    }

    const handlePresupuesto = (e) => {
        e.preventDefault()
        if(!presupuesto || presupuesto < 0){
            setMensaje('No es un presupuesto válido');
            return
        }

        setMensaje('')
        setIsValidPresupuesto(true)

    }

  return (
    <div className='contenedor-presupuesto contenedor sombra'>
        <form className='formulario' onSubmit={handlePresupuesto}>

            <div className="campo">
                <label>Definir Presupuesto</label>
                <input 
                    type="number" 
                    className="nuevo-presupuesto" 
                    placeholder='Agrega tu presupuesto'
                    value={presupuesto}
                    onChange={handleInputChange}
                />
            </div>

            <input type="submit" value="Añadir" />
            {
                mensaje && <Mensaje tipo='error'>{mensaje}</Mensaje>
            }
        </form>
    </div>
  )
}
