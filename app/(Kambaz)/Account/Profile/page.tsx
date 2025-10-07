import Link from "next/link";
import "./style.css";
import { Button, FormControl, FormSelect } from "react-bootstrap";
export default function Profile() {
  return (
    <div id="wd-profile-screen">
      <h3>Profile</h3>
      <FormControl
        defaultValue="alice"
        placeholder="username"
        className="wd-username"
      />
      <FormControl
        defaultValue="123"
        placeholder="password"
        type="password"
        className="wd-password"
      />
      <FormControl
        defaultValue="Alice"
        placeholder="First Name"
        id="wd-firstname"
      />
      <FormControl
        defaultValue="Wonderland"
        placeholder="Last Name"
        id="wd-lastname"
      />
      <FormControl defaultValue="2000-01-01" type="date" id="wd-dob" />
      <FormControl defaultValue="alice@wonderland" type="email" id="wd-email" />
      <FormSelect id="wd-role" defaultValue="FACULTY">
        <option value="USER">User</option>
        <option value="FACULTY">Faculty</option>
        <option value="ADMIN">Admin</option>
        <option value="STUDENT">Student</option>
      </FormSelect><br/>
      <Button>
        <Link href="Signin" id="wd-signout-link" className="text-white">
          Sign out
        </Link>
      </Button>
    </div>
  );
}
