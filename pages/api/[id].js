import { ObjectId } from 'mongodb';
import { connectToDatabase } from '../../lib/connects';

export default async function handler(req, res) {
    // switch the methods
    switch (req.method) {
        case 'GET': {
            return getPost(req, res);
        }
    }
}

async function getPost(req,res){

    const pid = req.query;
    try {
        // connect to the database
        let { db } = await connectToDatabase();
        // fetch the posts
        const user =  await db.collection('posts').findOne({_id: ObjectId(pid)});
        return res.json({
            data: user,
            message: "finding routes",
            success: true,
        });
        
    } catch (error) {
        // return the error
        return res.json({
            message: new Error(error).message,
            success: false,
        });
    }
}


