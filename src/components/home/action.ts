"use server"

import {Category, Course} from "../../interface";

interface HomePageComponent {
    componentType: string;
    items: Category[] | Course[];
}

export async function getHomePageComponents() {
    const url = 'http://localhost:3001/pages/home';
    const res = await fetch(url);
    return await res.json() as HomePageComponent[];
}
