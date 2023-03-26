import { json } from "@vercel/remix";

export const config = { runtime: "node" };

function generateData() {
  const data = [];
  for (let i = 0; i < 10000; i++) {
    data.push({
      id: i,
      name: `name ${i}`,
      email: `email ${i}`,
    });
  }
  return data;
}

// This `loader` now runs as an Edge Function
//@ts-expect-error
export async function loader({ request }) {
  // You have access to the incoming request headers
  // including powerful geolocation headers added by Vercel
  const city = request.headers.get("x-vercel-ip-city");

  return json({ city, data: generateData() });
}
