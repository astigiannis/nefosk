import Fastify from "fastify";
import {routes} from "./router.js";

const fastify = Fastify({
    logger: true
})

fastify.register(routes)



const start = async() => {
    await fastify.listen({port:3000, host: '0.0.0.0'}, function(err, address){
        if (err){
            fastify.log.error(err)
            process.exit(1)
        }
        fastify.log.info(`server listening on ${address}`)
    })
    
}
start()