import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import SupportRequest from 'App/Models/SupportRequest'
import User from 'App/Models/User'

export default class SupportRequestsController {

  async index ({ response }: HttpContextContract) {

    const supportRequests = await SupportRequest.all()
    response.status(200).json({
        message: 'Support requests retrieved successfully.',
        data: supportRequests
    })
  }

/*  async store({ request, response }: HttpContextContract) {
    const { first_name, last_name, email, support_message_title, support_message_text, file } = request.only([ 'first_name', 'last_name', 'email', 'support_message_title', 'support_message_text', 'file']);

    const support_request = await SupportRequest.create({ first_name, last_name, email, support_message_title, support_message_text, file });

    response.status(201).json({
        message: 'Support request created successfully.',
        data: support_request
    });
  }
*/

  async store({ request, response }: HttpContextContract) {
    try {
      const {
        first_name,
        last_name,
        email,
        support_message_title,
        support_message_text,
        file,
      } = request.only([
        'first_name',
        'last_name',
        'email',
        'support_message_title',
        'support_message_text',
        'file',
      ]);

      // Look up user by email
      const user = await User.findBy('email', email);

      if (user) {
        // Create support request and link to user
        const supportRequest = await SupportRequest.create({
          first_name,
          last_name,
          email,
          support_message_title,
          support_message_text,
          file,
          user_id: user.id,
        });

        return response.status(201).json({
          message: 'Support request created successfully.',
          data: supportRequest,
        });
      } else {
        return response.status(404).json({
          message: 'User not found.',
        });
      }
    } catch (error) {
      console.error(error);
      return response.status(500).json({
        message: 'An error occurred while processing the request.',
        error: error.message,
      });
    }
  }



  async show({ response, params: { id, user_id } }) {
    const support_request = await SupportRequest.find(id, user_id);

    if (support_request) {
        response.status(200).json({
            message: 'Support request retrieved successfully.',
            data: support_request
        });
    } else {
        response.status(404).json({
            message: 'Support request not found.',
            id, user_id
        });
    }
  }

  async update({ request, response, params: { id } }: HttpContextContract) {
    const support_request = await SupportRequest.find(id);

    if (support_request) {

        const { first_name, last_name, email, support_message_title, support_message_text, file } = request.only([ 'first_name', 'last_name', 'email', 'support_message_title', 'support_message_text', 'file']);

        if (first_name !== undefined) {
            support_request.first_name = first_name;
        }

        if (last_name !== undefined) {
            support_request.last_name = last_name;
        }

        if (email !== undefined) {
            support_request.email = email;
        }

        if (support_message_title !== undefined) {
            support_request.support_message_title = support_message_title;
        }

        if (support_message_text !== undefined) {
            support_request.support_message_text= support_message_text;
        }

        if (file !== undefined) {
            support_request.file = file;
        }

        await support_request.save();

        response.status(200).json({
            message: 'Support request updated successfully.',
            data: support_request
        });
    } else {
        response.status(404).json({
            message: 'Support request not found.',
            id
        });
    }
 }

  async delete({ response, params: { id } }: HttpContextContract) {
    const support_request = await SupportRequest.find(id);

    if (support_request) {
        await support_request.delete();

        response.status(200).json({
            message: 'Support request deleted successfully.',
            id
        });
    } else {
        response.status(404).json({
            message: 'Support request not found.',
            id
        });
    }
  }
}

