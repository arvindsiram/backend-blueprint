import server from "../dist/server/server.js";

export default async function handler(request, response) {
  const protocol = request.headers["x-forwarded-proto"] || "https";
  const host = request.headers.host || "localhost";
  const url = new URL(request.url || "/", `${protocol}://${host}`);
  const body = ["GET", "HEAD"].includes(request.method)
    ? undefined
    : await readBody(request);
  const headers = new Headers();

  for (const [name, value] of Object.entries(request.headers)) {
    if (value !== undefined) headers.set(name, Array.isArray(value) ? value.join(", ") : value);
  }

  const result = await server.fetch(
    new Request(url, { method: request.method, headers, body, duplex: "half" }),
    {},
    {},
  );

  response.status(result.status);
  result.headers.forEach((value, name) => response.setHeader(name, value));
  response.send(Buffer.from(await result.arrayBuffer()));
}

function readBody(request) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    request.on("data", (chunk) => chunks.push(chunk));
    request.on("end", () => resolve(Buffer.concat(chunks)));
    request.on("error", reject);
  });
}