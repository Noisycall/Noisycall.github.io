import React, { Component } from "react";
import { Col, Container, Jumbotron, Row } from "react-bootstrap";

class Eklavya extends Component {
  render():
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | string
    | number
    | {}
    | React.ReactNodeArray
    | React.ReactPortal
    | boolean
    | null
    | undefined {
    return (
      <div>
        <Jumbotron className="text-center">
          <h2>Eklavya Level 2</h2>
        </Jumbotron>
        <Container>
          <Row>
            <Col style={{ fontFamily: "Verdana" }}>
              <p>
                A university has only One Auditorium. There is a manager who
                looks after bookings of the auditorium.
                <br /> There are 17 different schools which operate under the
                university.
                <br /> Each school can have multiple student groups.
                <br /> A student group has a faculty mentor, to whom students
                report.
                <br /> Student groups organize several activities throughout a
                year.
              </p>
              <p>
                Design and develop an online auditorium reservation system for a
                particular time slot of a particular day.
                <br />
                Students from a specific group can request for the booking slot.
                <br />
                This request needs to be approved by the faculty mentor.
                <br />
                Such approved requests will be queued at the dashboard of
                Auditorium Manager. Upon approving the request, the slot will
                freeze.
                <br />
                Students and Mentors will get confirmation notification.
              </p>
              <ul>
                <li>
                  The system should also handle request cancellation option for
                  a booked slot with “reason to cancel tag”.
                </li>
                <li>
                  After the cancellation next booking request (if there is any)
                  should get booked and the Students and Mentor should be
                  notified.
                </li>
                <li>Logs for all transaction should get stored.</li>
                <li>
                  Manager should have ability to raise the priority of the
                  booking request in certain exceptional cases (University Level
                  Program, Urgent meetings from Managements).
                </li>
                <li>
                  Students and Mentor would have a separate login and separate
                  dashboard.
                </li>
                <li>Booking for next 2 months only shall be open.</li>
                <li>
                  Booked slots should be displayed in a calendar widget on the
                  system. Any bonus features are appreciated
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default Eklavya;
