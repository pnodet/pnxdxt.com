import type {NextApiRequest, NextApiResponse} from 'next';

type Data = {
	name: string;
};

export default function handler(
	_request: NextApiRequest,
	response: NextApiResponse<Data>,
) {
	response.status(200).json({name: 'John Doe'});
}
