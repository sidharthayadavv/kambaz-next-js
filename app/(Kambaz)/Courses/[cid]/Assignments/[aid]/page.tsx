"use client"
import {
  Button,
  Col,
  Form,
  FormCheck,
  FormControl,
  FormLabel,
  FormSelect,
  Row,
} from "react-bootstrap";
import "./style.css";

export default function AssignmentEditor1() {
  return (
    <div id="wd-assignments-editor" className="assignment-editor-container">
      <Form>
        {/* Assignment Name */}
        <Row className="mb-3" controlid="wd-name">
          <FormLabel column sm={2}>
            Assignment Name
          </FormLabel>
          <Col sm={10}>
            <FormControl id="wd-name" defaultValue="A1 - ENV + HTML" />
          </Col>
        </Row>

        {/* Description */}
        <Row className="mb-3">
          <Col sm={{ span: 10, offset: 2 }}>
            <FormControl
              as="textarea"
              rows={3}
              id="wd-description"
              defaultValue="The assignment is available online Submit a link to the landing page of"
            />
          </Col>
        </Row>

        {/* Points */}
        <Row className="mb-3" controlid="wd-points">
          <FormLabel column sm={2}>
            Points
          </FormLabel>
          <Col sm={10}>
            <FormControl id="wd-points" defaultValue="100" />
          </Col>
        </Row>

        {/* Assignment Group */}
        <Row className="mb-3" controlid="wd-group">
          <FormLabel column sm={2}>
            Assignment Group
          </FormLabel>
          <Col sm={10}>
            <FormSelect id="wd-group" defaultValue="SOLO">
              <option value="SOLO">Solo</option>
              <option value="DUO">Duo</option>
              <option value="GROUP">Group</option>
            </FormSelect>
          </Col>
        </Row>

        {/* Grade Scale */}
        <Row className="mb-3" controlid="wd-display-grade-as">
          <FormLabel column sm={2}>
            Grade Scale
          </FormLabel>
          <Col sm={10}>
            <FormSelect id="wd-display-grade-as" defaultValue="PERCENTAGE">
              <option value="PERCENTAGE">Percentage</option>
              <option value="GRADE">Grade</option>
              <option value="MARKS">Marks</option>
            </FormSelect>
          </Col>
        </Row>

        {/* Submission Type */}
        <Row className="mb-3" controlid="wd-submission-type">
          <FormLabel column sm={2}>
            Submission Type
          </FormLabel>
          <Col sm={10}>
            <FormSelect id="wd-submission-type" defaultValue="ONLINE">
              <option value="ONLINE">Online</option>
              <option value="OFFLINE">Offline</option>
            </FormSelect>
          </Col>
        </Row>

        {/* Online Entry Type */}
        <fieldset>
          <Row className="mb-3">
            <FormLabel as="legend" column sm={2}>
              Online Entry Type
            </FormLabel>
            <Col sm={10}>
              <FormCheck
                type="checkbox"
                id="wd-text-entry"
                label="Text Entry"
                defaultChecked
              />
              <FormCheck
                type="checkbox"
                id="wd-website-url"
                label="Website URL"
              />
              <FormCheck
                type="checkbox"
                id="wd-media-recordings"
                label="Media Recordings"
              />
              <FormCheck
                type="checkbox"
                id="wd-student-annotation"
                label="Student Annotation"
              />
              <FormCheck
                type="checkbox"
                id="wd-file-upload"
                label="File Upload"
              />
            </Col>
          </Row>
        </fieldset>

        {/* Assign */}
        <Row className="mb-3" controlid="wd-assign-to">
          <FormLabel column sm={2}>
            Assign
          </FormLabel>
          <Col sm={10}>
            <FormControl
              id="wd-assign-to"
              defaultValue="Everyone"
              suppressHydrationWarning={true}
              type="text"
            />
          </Col>
        </Row>

        {/* Due Date */}
        <Row className="mb-3" controlid="wd-due-date">
          <FormLabel column sm={2}>
            Due Date
          </FormLabel>
          <Col sm={10}>
            <FormControl
              type="date"
              id="wd-due-date"
              defaultValue="2004-01-24"
            />
          </Col>
        </Row>

        {/* Available From + Until */}
        <Row className="mb-3" controlid="wd-available-from">
          <FormLabel column sm={2}>
            Available From
          </FormLabel>
          <Col sm={10} className="d-flex align-items-center gap-3">
            <FormControl
              type="date"
              id="wd-available-from"
              defaultValue="2004-01-24"
            />
            <FormLabel className="until-label mb-0">Until</FormLabel>
            <FormControl
              type="date"
              id="wd-available-until"
              defaultValue="2004-01-24"
            />
          </Col>
        </Row>

        {/* Buttons */}
        <Row className="mt-4">
          <Col sm={{ span: 10, offset: 2 }}>
            <Button
              variant="danger"
              type="button"
              id="wd-save-button"
              onClick={() => alert("Saved successfully!")}
              suppressHydrationWarning={true}
              className="me-2"
            >
              Save
            </Button>
            <Button
              variant="secondary"
              type="button"
              id="wd-cancel-button"
              onClick={() => alert("Cancelled!")}
              suppressHydrationWarning={true}
            >
              Cancel
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
}
