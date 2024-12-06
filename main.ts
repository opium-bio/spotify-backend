import { config } from "https://deno.land/x/dotenv/mod.ts";

config({"path": ".env"}); 

const requiredVars = [
    "PORT",
    "SPOTIFY_ID",
    "SPOTIFY_SECRET"
]

for (const envvars of requiredVars) {
    if (!Deno.env.get(envvars)) {
      console.error(`Missing required environment variable: ${envvars}`)
      Deno.exit(1)
    }
  }

//deno boilerplate lol
Deno.serve(async (req) => {
  console.log("Method:", req.method);

  const url = new URL(req.url);
  console.log("Path:", url.pathname);
  console.log("Query parameters:", url.searchParams);

  console.log("Headers:", req.headers);

  if (req.body) {
    const body = await req.text();
    console.log("Body:", body);
  }

  return new Response("Hello, world", {
    status: 200,
    headers: {
      "content-type": "text/plain; charset=utf-8",
    },
  });
});