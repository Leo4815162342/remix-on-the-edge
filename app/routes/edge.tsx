import { json } from "@vercel/remix";

export const config = { runtime: "edge" };

// This `loader` now runs as an Edge Function
//@ts-expect-error
export async function loader({ request }) {
  // You have access to the incoming request headers
  // including powerful geolocation headers added by Vercel
  const city = request.headers.get("x-vercel-ip-city");

  return json({ city });
}
