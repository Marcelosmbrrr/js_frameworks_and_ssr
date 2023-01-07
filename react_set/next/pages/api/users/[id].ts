import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {

    const { id } = req.query;

    if (req.method === "PATCH") {
        res.status(200).json({ name: 'Patch User | Id: ' + id })
    } else if (req.method === "DELETE") {
        res.status(200).json({ name: 'Delete User | Id: ' + id })
    }

}