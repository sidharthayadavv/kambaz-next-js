"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ListGroup, ListGroupItem, NavLink } from "react-bootstrap";
import { useSelector } from "react-redux";
import { RootState } from "../store";

export default function AccountNavigation() {
  const { currentUser } = useSelector(
    (state: RootState) => state.accountReducer
  );
  const links = currentUser ? ["Profile"] : ["Signin", "Signup"];

  const pathname = usePathname();

  return (
    <div id="wd-account-navigation" className="wd list-group rounded-0 fs-6">
      {links.map((link) => (
        <Link
          key={link}
          href={`/Account/${link}`}
          id={`wd-course-${link.toLowerCase()}-link`}
          className={`list-group-item border-0
              ${pathname.includes(`/${link}`) ? "active" : "text-danger"}`}
        >
          {link}
        </Link>
      ))}
      {currentUser && currentUser.role === "ADMIN" && (
        <NavLink
          as={Link}
          href="/Account/Users"
          className="list-group-item border-0"
          active={pathname.endsWith("Users")}
        >
          Users
        </NavLink>
      )}

    </div>
  );
}
