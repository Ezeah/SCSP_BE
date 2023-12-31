/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'world' }
})

Route.get('/users', 'UsersController.index')
Route.post('/user', 'UsersController.store')
Route.get('/user/:id', 'UsersController.show')
Route.patch('/user/:id', 'UsersController.update')
Route.delete('/user/:id', 'UsersController.delete')

Route.get('/SupportRequests', 'SupportRequestsController.index')
Route.post('/SupportRequest', 'SupportRequestsController.store')
Route.get('/SupportRequest/:id', 'SupportRequestsController.show')
Route.patch('/SupportRequest/:id', 'SupportRequestsController.update')
Route.delete('/SupportRequest/:id', 'SupportRequestsController.delete')