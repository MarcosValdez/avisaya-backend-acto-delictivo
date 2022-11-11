import { Entity, Schema } from 'redis-om'
import client from '../config/client.js'

/* entidad de delitos */
class Crime extends Entity {}

/* creacion de un esquema para usuarios */
const crimeSchema = new Schema(Crime, {
    titulo: { type: 'string' },
    descripcion: { type: 'string' },
    fecha: { type: 'string' },
    hora: { type: 'string' },
    lugar: { type: 'string' },
    referencia: { type: 'string' },
    evidencia: { type: 'string' },
})

/* usar el cliente para crear un Repositorio solo para usuarios */
export const crimeRepository = client.fetchRepository(crimeSchema)

/* crear el índice para usuario */
await crimeRepository.createIndex()