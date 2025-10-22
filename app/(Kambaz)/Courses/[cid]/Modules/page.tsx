"use client";
import { useParams } from "next/navigation";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import ModulesControls from "./ModulesControls";
import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "./LessonControlButtons";
import ModuleControlButtons from "./ModuleControlButtons";
import * as db from "../../../Database";


export default function Modules() {
  const { cid } = useParams();
  const modulesData = db.modules;
  const courseModules = modulesData.filter((module) => module.course === cid);
  return (
    <div>
      <ModulesControls />
      <br />
      <br />
      <br />
      <ListGroup id="wd-modules" className="rounded-0">
        {courseModules.map((module) => (
          <ListGroupItem
            key={module._id}
            className="wd-module p-0 mb-5 fs-5 border-gray"
          >
            <div className="wd-title p-3 ps-2 bg-secondary">
              <BsGripVertical className="me-2 fs-3" /> {module.name}{" "}
              <ModuleControlButtons />
            </div>
            <ListGroup className="wd-lessons rounded-0">
              {module.lessons && module.lessons.length > 0 ? (
                module.lessons.map((lesson) => (
                  <ListGroupItem
                    key={lesson._id}
                    className="wd-lesson p-3 ps-1"
                  >
                    <BsGripVertical className="me-2 fs-3" /> {lesson.name}{" "}
                    <LessonControlButtons />
                  </ListGroupItem>
                ))
              ) : (
                <ListGroupItem className="wd-lesson p-3 ps-1 text-muted">
                  No lessons for this module.
                </ListGroupItem>
              )}
            </ListGroup>
          </ListGroupItem>
        ))}
      </ListGroup>
    </div>
  );
}
