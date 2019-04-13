import { serve } from "https://deno.land/std@v0.3.2/http/server.ts";

const start = async () => {
  const body = new TextEncoder().encode("Hello, Deno!\n");

  for await (const req of serve(":8080")) {
    req.respond({ body });
  }
};

start();
