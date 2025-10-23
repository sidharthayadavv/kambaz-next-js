"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ListGroup, ListGroupItem } from "react-bootstrap";
export default function AccountNavigation() {
  const pathname = usePathname();
  const links = ["Signin","Signup","Profile"];
 return (
   <div id="wd-account-navigation" className="wd list-group rounded-0 fs-6">
      {links.map((link) => (
                <Link
                    key={link}
                    href={link}
                    id={`wd-course-${link.toLowerCase()}-link`}
                    className={`list-group-item border-0
                        ${pathname.includes(`/${link}`) ? "active" : "text-danger"}`}
                >
                    {link}
                </Link>
            ))}
   </div>
);}
