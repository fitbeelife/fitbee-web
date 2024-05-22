"use server"

import {Category, Course} from "@/interface";

interface HomePageComponent {
    componentType: string;
    items: Category[] | Course[];
}

export async function getHomePageComponents() {
    const url = `${process.env.NEXT_PUBLIC_API_URL}/pages/home`;
    const res = await fetch(url);
    return await res.json() as HomePageComponent[];
}
