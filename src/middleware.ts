

import { NextRequest } from "next/server";
import { getSessions } from "./app/_backend/utils/sessions";


export const middleware = async (request: NextRequest) => {
  const session = await getSessions()
  if (request.url === ('http://localhost:3000/auth') && session) {
    return Response.redirect(new URL('/dashboard', request.url))
  }

  if (request.url.includes('dashboard') && !session) {
    return Response.redirect(new URL('/auth', request.url))
  }

  if (request.url === ('http://localhost:3000/') && !session) {
    return Response.redirect(new URL('/auth', request.url))
  }
  if (request.url === ('http://localhost:3000/') && session) {
    return Response.redirect(new URL('/dashboard', request.url))
  }
}
