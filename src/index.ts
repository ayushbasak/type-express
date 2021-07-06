import express, {Application, Request, Response} from 'express'
const app: Application = express()

const server_port: number = Number(process.env.PORT) || 5000

app.listen(server_port, ()=>{
    console.log(`Server Open at : ${server_port}`)
})

app.get('/', (req: Request, res: Response)=>{
    res.send('Hello World')
})