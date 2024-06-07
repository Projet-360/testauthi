import type { LayoutServerLoad } from "./$types"

export const load: LayoutServerLoad = async (event) => {
  const session = await event.locals.getSession()
  if (!session) {
    return {
      status: 302,
      redirect: '/signin'
    };
  }
  return { session }
}
