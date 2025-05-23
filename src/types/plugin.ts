
import {fastify} from "fastify"

export interface Frontend {
    id:string,
    name:string,
    description?:string
}

export interface Plugin {
    initialize?: (instance:ReturnType<typeof fastify>) => void|Promise<void>,
    name: string,
    frontends: Frontend[]
}