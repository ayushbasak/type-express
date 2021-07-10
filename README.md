# type-express
sample express application using Typescript and TypeORM

#### Installation
* clone the repository
* run `$ yarn` to install dependencies

#### Configuration
* replace **database** config in `ormconfig.ts`

####  Commands

* `$ yarn dev` for development server  
* `$ yarn start` for production server  
<!-- * `$ yarn build` create a javascript build   -->


#### API endpoints
* `/person` GET all persons
* `/person` POST one person
* `/person/:id` GET person with id
* `/query/<lower_bound>&<upper_bound>` GET people between ages  
   **lower_bound** and **upper_bound**

[MIT](LICENSE)