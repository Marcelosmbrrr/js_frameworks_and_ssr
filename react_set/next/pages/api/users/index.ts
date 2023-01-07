import type { NextApiRequest, NextApiResponse } from 'next';

/*
Documentation: https://nextjs.org/docs/api-routes/introduction
In essence, Next. js API Routes eliminate the need for creating an additional backend server in your full-stack web applications. 
With Next. js API Routes, you can access or store data in your database like you would if you were using a separate backend application
*/

export default function handler(req: NextApiRequest, res: NextApiResponse) {

    if (req.method === " GET") {
        res.status(200).json({ name: 'Get Users' })
    } else if (req.method === "POST") {
        res.status(200).json({ name: 'Post Users' })
    }

}