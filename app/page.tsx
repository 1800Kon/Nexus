import { getSession } from '@auth0/nextjs-auth0';
import { redirect } from 'next/navigation';
export default async function Home() {
  const session = await getSession();
  const user = session?.user;
  if (session != null && user != null) {
    redirect('/dashboard');
  } else {
    redirect('/login');
  }
}
