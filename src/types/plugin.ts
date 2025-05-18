
import {fastify} from "fastify"

export interface Plugin {
    initialize?: (instance:ReturnType<typeof fastify>) => void|Promise<void>,
    name: string
}