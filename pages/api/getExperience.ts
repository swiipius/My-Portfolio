import type { NextApiRequest, NextApiResponse } from 'next';
import { sanityClient, urlFor } from '../../sanity';
import { groq } from "next-sanity";
import {Experience} from '../../typings';

const query = groq`
    *[_type == "experience"] {
        ...,
        technologies[]->,
    }
    `;

type Data = {
    experience: Experience[]
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const experience: Experience[] = await sanityClient.fetch(query);
    res.status(200).json({ experience })
}