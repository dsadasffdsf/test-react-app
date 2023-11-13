import { NextApiRequest, NextApiResponse } from 'next';
import {products} from './data/products'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // Обработка запроса
  if (req.method === 'GET') {
    // Если это GET-запрос, вернуть приветствие
    res.status(200).json(products);
  } else {
    // Если это не GET-запрос, вернуть ошибку метода
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
