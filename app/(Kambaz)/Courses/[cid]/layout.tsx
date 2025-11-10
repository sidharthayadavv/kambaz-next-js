/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { ReactNode, useEffect, useState } from "react";
import CourseNavigation from "./Navigation";
import { FaAlignJustify } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useParams, useRouter } from "next/navigation";
import { RootState } from "../../store";

export default function CoursesLayout({ children }: { children: ReactNode }) {
  const { cid } = useParams();
  const router = useRouter();
  const { courses } = useSelector((state: RootState) => state.coursesReducer);
  const { currentUser } = useSelector((state: RootState) => state.accountReducer);
  const { enrollments } = useSelector((state: RootState) => state.enrollmentsReducer);
  const [isNavCollapsed, setIsNavCollapsed] = useState(false);
  
  const course = courses.find((course: any) => course._id === cid);
  useEffect(() => {
        if (!currentUser) {
            router.push("/Dashboard");
            return;
        }
        if (currentUser.role === "FACULTY") {
            return;
        }
        const isEnrolled = enrollments.some(
            (e: any) => e.user === currentUser._id && e.course === cid
        );
        if (!isEnrolled) {
            router.push("/Dashboard");
        }
    }, [currentUser, enrollments, cid, router]);

    if (currentUser && currentUser.role !== "FACULTY") {
        const isEnrolled = enrollments.some(
            (e: any) => e.user === currentUser._id && e.course === cid
        );
        if (!isEnrolled) {
            return null;
        }
    }
  return (
    <div id="wd-courses">
      <h2 className="text-danger">
        <FaAlignJustify 
          className="me-4 fs-4 mb-1" 
          onClick={() => setIsNavCollapsed(!isNavCollapsed)}
          style={{ cursor: 'pointer' }}
          role="button"
          aria-label="Toggle navigation"
        />
        {course?.name}
      </h2>
      <hr />
      <div className="d-flex">
        {!isNavCollapsed && (
          <div className="d-none d-md-block">
            <CourseNavigation />
          </div>
        )}
        <div className="flex-fill">
          {children}
        </div>
      </div> 
    </div>
  );
}