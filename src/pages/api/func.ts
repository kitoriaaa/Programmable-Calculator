import { func, obj } from '../../../components/func';
import type { NextApiRequest, NextApiResponse } from 'next';

export default (req: NextApiRequest, res: NextApiResponse<func>): void => res.json(obj);
