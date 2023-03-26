import { json } from "@vercel/remix";

function generateData() {
  const data = [];
  for (let i = 0; i < 100000;; i++) {
    data.push({
      id: i,
      name: `name ${i}`,
      email: `email ${i}`,
    });
  }
  return data;
}

export const config = { runtime: "edge" };

// This `loader` now runs as an Edge Function
//@ts-expect-error
export async function loader({ request }) {
  // You have access to the incoming request headers
  // including powerful geolocation headers added by Vercel
  const city = request.headers.get("x-vercel-ip-city");

  return json({ city, data: generateData() });
}
