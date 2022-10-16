export const generarId = () => {
    const random = Math.random().toString(36).substring(2)
    const fecha = Date.now()
    return random + fecha
}

export const formatearFecha = fecha => {
    const fechaNueva = new Date(fecha)
    const options = {
        year : 'numeric',
        month : 'long',
        day : '2-digit'
    }

    return fechaNueva.toLocaleDateString('es-MX', options)
}
