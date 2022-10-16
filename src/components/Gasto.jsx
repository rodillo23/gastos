import React from 'react'
import { formatearFecha } from '../helpers'

import iconoAhorro from '../img/icono_ahorro.svg'
import iconoCasa from '../img/icono_casa.svg'
import iconoComida from '../img/icono_comida.svg'
import iconoGastos from '../img/icono_gastos.svg'
import iconoOcio from '../img/icono_ocio.svg'
import iconoSalud from '../img/icono_salud.svg'
import iconoSuscripciones from '../img/icono_suscripciones.svg'


export const Gasto = ({gasto}) => {
    const {categoria, nombre, cantidad, id, fecha} = gasto

    const diccionarioIconos = {
        ahorro : iconoAhorro,
        comida : iconoComida,
        casa : iconoCasa,
        gastos : iconoGastos,
        ocio : iconoOcio,
        salud : iconoSalud,
        suscripciones : iconoSuscripciones
    }
  return (
    <div className='gasto sombra'>
        <div className="contenido-gasto">

            <img src={diccionarioIconos[categoria]}/>

            <div className="descripcion-gasto">
                <p className='categoria'>{categoria}</p>
                <p className="nombre-gasto">{nombre}</p>
                <p className='fecha-gasto'>Agregado el <span>{formatearFecha(fecha)}</span></p>
            </div>
        </div>
        <p className="cantidad-gasto">${cantidad}</p>
    </div>
  )
}
