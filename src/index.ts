import { Plugin } from "./types/plugin.js";
export * from "./types/plugin.js"

export const plugin = (config:Partial<Plugin>) : Plugin => {
    return {
        name:"UNNAMED PLUGIN",
        frontends:[],
        ...config
    }
}