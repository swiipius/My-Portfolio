import {Experience} from '../typings';

export const fetchExperience = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SANITY_URL}/api/getExperience`);
    const data = await res.json();
    const experience: Experience[] = data.experience;

    // console.log("fetching", pageInfo);

    return experience;
}