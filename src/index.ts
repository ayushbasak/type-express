import 'reflect-metadata'
import express, {Application, Request, Response} from 'express'
import { createConnection } from  'typeorm'
import { Person } from './entity/Person'

createConnection().then(connection => {

    const personRepository = connection.getRepository(Person);

    const app: Application = express()
    app.use(express.json())
    app.listen(5000, ()=>{console.log(`Server Open`)})

    app.get('/', (req: Request, res: Response)=>{
        res.send(`
            <a href="/person">/person</a><br>
            example
            <a href="/person/1">/person/1</a>
        `)
    })

    app.get('/person/:id', async (req: Request, res: Response)=>{
        const person = await personRepository.findOne(req.params.id)
        return res.send(person)
    })

    app.get('/person', async (req: Request, res: Response)=>{
        const persons = await personRepository.find()
        return res.send(persons)
    })


    app.post('/person', async (req: Request, res: Response)=>{
        const person = new Person()
        person.name = req.body.name
        person.age = req.body.age

        const results = await personRepository.save(person)
        res.send(results)
    })

})
