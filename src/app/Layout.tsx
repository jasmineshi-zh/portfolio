import { Outlet, ScrollRestoration } from 'react-router';
import { Analytics } from '@vercel/analytics/react';

export function Layout() {
  return (
    <>
      <ScrollRestoration />
      <Outlet />
      <Analytics />
    </>
  );
}
