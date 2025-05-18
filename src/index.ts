import { Plugin } from "./types/plugin.js";

export const plugin = (config:Partial<Plugin>) : Plugin => {
    return {
        name:"UNNAMED PLUGIN",
        ...config
    }
}