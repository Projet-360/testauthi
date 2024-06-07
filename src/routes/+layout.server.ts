import type { LayoutServerLoad } from "./$types"

export const load: LayoutServerLoad = async (event) => {
  const session = await event.locals.getSession()
  if (!session && event.url.pathname.startsWith('/protected')) {
    return new Response('Not authenticated', { status: 401 });
  }
  return { session }
}
