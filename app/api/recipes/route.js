import { NextResponse } from "next/server";

export async function GET(request){
    const {searchParams} = new URL(request.url);
    const search = searchParams.get("search");

    if(!search){
        return NextResponse.json([]);
    }

    const response = await fetch(
        `https://recipeapi.io/api/v1/recipes?search=${encodeURIComponent(search)}`,
        {
        headers: {
                    Authorization: `Bearer ${process.env.RECIPE_API_KEY}`,
                    },
        }
    );

    const data = await response.json();
    return NextResponse.json(data.data);

}