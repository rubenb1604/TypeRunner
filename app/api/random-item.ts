import { NextApiRequest, NextApiResponse } from 'next';

const items: string[] = ['Apfel', 'Banane', 'Kirsche', 'Traube', 'Mango'];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const randomIndex = Math.floor(Math.random() * items.length);

    const randomItem = items[randomIndex];

    res.status(200).json({ item: randomItem });
}
