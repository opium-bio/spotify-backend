import Elysia, { redirect } from "elysia";
const client_id = process.env.SPOTIFY_ID
const redirect_uri = 'http://localhost:3000/callback';
var scope = 'user-read-currently-playing';
export const login = new Elysia({}) 
        .get("/login", ({ redirect }) => {
            return redirect(`https://accounts.spotify.com/authorize?client_id=${client_id}&redirect_uri=${redirect_uri}&scope=${scope}&response_type=token&show_dialog=true`)
        })