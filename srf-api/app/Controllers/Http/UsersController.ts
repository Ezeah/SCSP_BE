import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class UserController {
    async index ({ response }: HttpContextContract) {

        const users = await User.all()
        response.status(200).json({
            message: 'Users retrieved successfully.',
            data: users
        })
    }

    async store({ request, response }: HttpContextContract) {
        const { full_name, email } = request.only([ 'full_name', 'email']);

        const user = await User.create({ full_name, email });

        response.status(201).json({
            message: 'User created successfully.',
            data: user
        });
    }

    async show({ response, params: { id } }) {
        const user = await User.find(id);

        if (user) {
            response.status(200).json({
                message: 'User retrieved successfully.',
                data: user
            });
        } else {
            response.status(404).json({
                message: 'User not found.',
                id
            });
        }
    }

    async update({ request, response, params: { id } }: HttpContextContract) {
        const user = await User.find(id);
    
        if (user) {

            const { full_name, email } = request.only(['full_name', 'email']);
    
            if (full_name !== undefined) {
                user.full_name = full_name;
            }
    
            if (email !== undefined) {
                user.email = email;
            }
    
            await user.save();
    
            response.status(200).json({
                message: 'User updated successfully.',
                data: user
            });
        } else {
            response.status(404).json({
                message: 'User not found.',
                id
            });
        }
    }    

    async delete({ response, params: { id } }: HttpContextContract) {
        const user = await User.find(id);

        if (user) {
            await user.delete();

            response.status(200).json({
                message: 'User deleted successfully.',
                id
            });
        } else {
            response.status(404).json({
                message: 'User not found.',
                id
            });
        }
    }
}


