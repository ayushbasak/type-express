import 'reflect-metadata'
import express, {Application, Request, Response} from 'express'
import { createConnection , Between} from  'typeorm'
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

    app.get('/q/:range', async (req: Request, res: Response)=>{
        const range = req.params.range.split("&");
        if(range.length !== 2)
            return res.send('Invalid Request')
        const lower_bound : number = Number(range[0]) || 18;
        const upper_bound : number = Number(range[1]) || 120;

        const result =  await personRepository.find({
                                age: Between(lower_bound, upper_bound)
                        })
        res.send(result)
    })


    app.post('/person', async (req: Request, res: Response)=>{
        const person = new Person()
        person.name = req.body.name
        person.age = req.body.age

        const results = await personRepository.save(person)
        res.send(results)
    })

})
