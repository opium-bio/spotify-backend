import { Elysia } from "elysia";
import { login } from "./routes/login";
import { callback } from "./routes/callback";
const requiredVars = [
  "PORT",
  "SPOTIFY_ID",
  "SPOTIFY_SECRET"
]

requiredVars.forEach((envVar) => {
  if (!process.env[envVar]) {
    console.error(`Missing required environment variable: ${envVar}`);
    process.exit(1);
  }
});

const app = new Elysia()
.use(login)
.use(callback)
.get("/", () => {
  return {
    success: true,
    "meow!": ":3",
  };
})
.listen(process.env.PORT!);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
