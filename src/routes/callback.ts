import Elysia from "elysia";
const client_id = process.env.SPOTIFY_ID
export const callback = new Elysia({}) 
        .get("/callback", ({ query, redirect, }) => {
            const { code, error } = query;
            
        })