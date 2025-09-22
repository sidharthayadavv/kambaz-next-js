import Link from "next/link";

export default function Assignments() {
  return (
    <div id="wd-assignments">
      <input placeholder="Search for Assignments"
             id="wd-search-assignment" />
      <button id="wd-add-assignment-group">+ Group</button>
      <button id="wd-add-assignment">+ Assignment</button>
      <h3 id="wd-assignments-title">
        ASSIGNMENTS 40% of Total <button>+</button> </h3>
      <ul id="wd-assignment-list">
        <li className="wd-assignment-list-item">
          <Link href="/Courses/1234/Assignments/123"
             className="wd-assignment-link" >
            A1 - ENV + HTML
          </Link>
          <p>Due Date: 22 oct 11:59 | 100 pts</p></li>
        <li className="wd-assignment-list-item">
          <Link href="/Courses/1234/Assignments/123"
             className="wd-assignment-link" >
            A2 - React.js
          </Link><p>Due Date: 25 oct 11:59 | 100 pts</p>
        </li>
        <li className="wd-assignment-list-item">
          <Link href="/Courses/1234/Assignments/123"
             className="wd-assignment-link" >
            A3 - Next.js
          </Link><p>Due Date: 27 oct 11:59 | 100 pts</p>
        </li>
        <li className="wd-assignment-list-item">
          <Link href="/Courses/1234/Assignments/123"
             className="wd-assignment-link" >
            A4 - MongoDB
          </Link><p>Due Date: 3 nov 08:59 | 100 pts</p>
        </li>
        <li className="wd-assignment-list-item">
          <Link href="/Courses/1234/Assignments/123"
             className="wd-assignment-link" >
            A5 - API
          </Link><p>Due Date: 7 nov 9:00 | 100 pts</p>
        </li>
      </ul>
    </div>
);}
