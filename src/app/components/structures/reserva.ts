export interface Reserva {
    id: number;
    id_cliente: number;
    id_habitacion: number;
    id_hotel: number;
    fecha_entrada: Date;
    fecha_salida: Date;
    cantidad_personas: number;
}
