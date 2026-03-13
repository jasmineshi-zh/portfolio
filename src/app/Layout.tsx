import { Outlet, ScrollRestoration } from 'react-router';

export function Layout() {
  return (
    <>
      <ScrollRestoration />
      <Outlet />
    </>
  );
}
