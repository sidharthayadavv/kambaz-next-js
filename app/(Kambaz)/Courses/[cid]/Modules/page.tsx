/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { FormControl, ListGroup, ListGroupItem } from "react-bootstrap";
import ModulesControls from "./ModulesControls";
import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "./LessonControlButtons";
import ModuleControlButtons from "./ModuleControlButtons";
import { setModules, addModule, editModule, updateModule, deleteModule } from "./reducer";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../store";
import * as client from "../../client";

export default function Modules() {
  const { cid } = useParams();
  // Ensure courseId is always a string
  const courseId = Array.isArray(cid) ? cid[0] : cid;
  
  const [moduleName, setModuleName] = useState("");
  const { modules } = useSelector((state: RootState) => state.modulesReducer);
  const dispatch = useDispatch();
  const courseModules = modules.filter((module: any) => module.course === courseId);
  
  const fetchModules = async () => {
    if (!courseId) return;
    const modules = await client.findModulesForCourse(courseId);
    dispatch(setModules(modules));
  };
  
  useEffect(() => {
    fetchModules();
  }, [courseId]);
  
  const onCreateModuleForCourse = async () => {
    if (!courseId) return;
    const newModule = { name: moduleName, course: courseId };
    // eslint-disable-next-line @next/next/no-assign-module-variable
    const module = await client.createModuleForCourse(courseId, newModule);
    dispatch(setModules([...modules, module]));
  };
  
  const onRemoveModule = async (moduleId: string) => {
    await client.deleteModule(moduleId);
    dispatch(setModules(modules.filter((m: any) => m._id !== moduleId)));
  };
  
  const onUpdateModule = async (module: any) => {
    await client.updateModule(module);
    const newModules = modules.map((m: any) => m._id === module._id ? module : m );
    dispatch(setModules(newModules));
  };

  return (
    <div>
      <ModulesControls
        moduleName={moduleName}
        setModuleName={setModuleName}
        addModule={onCreateModuleForCourse}
      />
      <br />
      <br />
      <br />
      <ListGroup id="wd-modules" className="rounded-0">
        {courseModules.map((module: any) => (
          <ListGroupItem
            key={module._id}
            className="wd-module p-0 mb-5 fs-5 border-gray"
          >
            <div className="wd-title p-3 ps-2 bg-secondary">
              <BsGripVertical className="me-2 fs-3" />{" "}
              {!module.editing && module.name}
              {module.editing && (
                <FormControl
                  className="w-50 d-inline-block"
                  onChange={(e) =>
                    dispatch(updateModule({ ...module, name: e.target.value }))
                  }
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      onUpdateModule({ ...module, editing: false });
                    }
                  }}
                  defaultValue={module.name}
                />
              )}
              <ModuleControlButtons
                moduleId={module._id}
                deleteModule={(moduleId) => onRemoveModule(moduleId)}
                editModule={(moduleId) => dispatch(editModule(moduleId))}
              />
            </div>
            <ListGroup className="wd-lessons rounded-0">
              {module.lessons && module.lessons.length > 0 ? (
                module.lessons.map((lesson: any) => (
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