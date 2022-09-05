import Link from "next/link";
import React, { Children } from "react";

const Layout = ({ children }) => {
  return (
    <>
      <div className="flex min-h-screen flex-col justify-between">
        <header>
          <nav className="flex h-12 item-center p-4 justify-between shadow-md">
            <Link href="/">
              <a className="text-lg font-bold">amazon</a>
            </Link>
            <div>
              <Link href="/cart">
                <a className="p-2">Cart</a>
              </Link>
              <Link href="/login">
                <a className="p-2">Login</a>
              </Link>
            </div>
          </nav>
        </header>
        <main className="container m-auto mt-4 px-4">{Children}</main>
        <footer className="flex justify-center item-center h-10 shadow-inner">
          Copyright © 2022 Amazon
        </footer>
      </div>
    </>
  );
};
export default Layout;
