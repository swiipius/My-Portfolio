import type { NextApiRequest, NextApiResponse } from 'next';
import { sanityClient, urlFor } from '../../sanity';
import { groq } from "next-sanity";
import {Project} from '../../typings';

const query = groq`
    *[_type == "projects"] {
        ...,
        technologies[]->,
    }
    `;

type Data = {
    projects: Project[]
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const projects: Project[] = await sanityClient.fetch(query);
    res.status(200).json({ projects })
}