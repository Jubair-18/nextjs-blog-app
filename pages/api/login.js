
import {connectToDatabase} from '../../lib/connects';
import { signToken } from '../../lib/auth';

export default async function handler(req, res) {
  // switch the methods
  switch (req.method) {

      case 'POST': {
          return addUser(req, res);
      }

  }
}

async function addUser(req, res) {
    try {
        // connect to the database
        let { db } = await connectToDatabase();
        // add the post
        
        const data = JSON.parse(req.body)
        console.log(data)
        const email =data.email
        const password = data.password
        const user = await db.collection('users').findOne({
            email
        });
        // return a message
        if (password, user.password) {
            const token = signToken(user);
            res.send({
                token,
                message: 'Post added successfully',
                success: true,
            });
          } else {
            res.status(401).send({ message: 'Invalid email or password' });
          }
    } catch (error) {
        // return an error
        return res.json({
            message: new Error(error).message,
            success: false,
        });
    }
}
