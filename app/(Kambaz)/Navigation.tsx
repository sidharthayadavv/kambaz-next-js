"use client"
// Kambaz Navigation Component
import { AiOutlineDashboard, AiTwotoneExperiment } from "react-icons/ai";
import {
  FaBookOpenReader,
  FaCalendarCheck,
  FaRegCircleUser,
} from "react-icons/fa6";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Image, ListGroup, ListGroupItem } from "react-bootstrap";
import { FiInbox } from "react-icons/fi";
export default function KambazNavigation() {
  const pathname = usePathname();
  const links = [
    { id: 1, label: "Dashboard", path: "/Dashboard", icon: AiOutlineDashboard },
    { id: 2, label: "Courses",   path: "/Dashboard", icon: FaBookOpenReader },
    { id: 3, label: "Calendar",  path: "/Calendar",  icon: FaCalendarCheck },
    { id: 4, label: "Inbox",     path: "/Inbox",     icon: FiInbox },
    { id: 5, label: "Labs",      path: "/Labs",      icon: AiTwotoneExperiment },
  ];
  return (
    <div id="wd-kambaz-navigation">
      <ListGroup
        className="rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2"
        style={{ width: 120 }}
        id="wd-kambaz-navigation"
      >
        <ListGroupItem
          className="bg-black border-0 text-center"
          as="a"
          target="_blank"
          href="https://www.northeastern.edu/"
          id="wd-neu-link"
        >
          <Image
            src="/images/neuhuskylogo.jpg"
            width="75px"
            alt="Northeastern University"
          />
        </ListGroupItem>
        <ListGroupItem as={Link} href="/Account"
        className={`text-center border-0 bg-black
            ${pathname.includes("Account") ? "bg-white text-danger" : "bg-black text-white"}`}>
        <FaRegCircleUser
          className={`fs-1 ${pathname.includes("Account") ? "text-danger" : "text-white"}`} />
        <br />
        Account
      </ListGroupItem>
      {links.map((link) => (
        <ListGroupItem key={link.id} as={Link} href={link.path}
          className={`bg-black text-center border-0
              ${pathname.includes(link.label) ? "text-danger bg-white" : "text-white bg-black"}`}>
          {link.icon({ className: "fs-1 text-danger"})}
          <br />
          {link.label}
        </ListGroupItem>
      ))}
      </ListGroup>
    </div>
  );
}
