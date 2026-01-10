import type { LoaderFunction } from "@remix-run/cloudflare";

export const loader: LoaderFunction = () => {
  return new Response(JSON.stringify({}), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "public, max-age=3600",
    },
  });
};
