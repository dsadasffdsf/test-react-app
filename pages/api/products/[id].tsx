import { NextApiRequest, NextApiResponse } from 'next';
import { products } from '../data/products';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const {
    query: { id },
    method,
  } = req;

  switch (method) {
    case 'GET':
      const productId = parseInt(id as string, 10); //преобразование в число 10 системы
      const product = products.find((p) => p.id === productId); // проверка на наличие id

      if (product) {
        res.status(200).json(product);
      } else {
        res.status(404).json({ error: 'Product not found' });
      }
      break;
    default:
      res.status(405).json({ error: 'Method Not Allowed' });
  }
}
