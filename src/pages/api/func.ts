import { funcType, funcObj } from '../../../components/func';
import type { NextApiRequest, NextApiResponse } from 'next';

const handler = (_: NextApiRequest, res: NextApiResponse<funcType>): void => res.json(funcObj);
export default handler;
