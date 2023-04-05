import { Button, Col, Container, Row } from "react-bootstrap";
import avatar from "../img/avatar.png";
import { Paypal } from "react-bootstrap-icons";

const SettingsPage = () => (
  <main className="bg-light">
    <Container>
      <h2 className="fs-3 pt-5">Account</h2>
      <hr />
      <Row>
        <Col xs={4}>
          <h3 className="fs-6 text-muted fw-semibold">MEMBERSHIP &amp; BILLING</h3>
          <Button type="button" className="btn btn-secondary px-3">
            Cancel Membership
          </Button>
        </Col>
        <Col xs={8}>
          <Row>
            <Col xs={6}>
              <ul>
                <li className="fw-bold">student@strive.school</li>
                <li className="text-muted">Password: *********</li>
                <li className="text-muted">Phone: 321 044 1279</li>
              </ul>
            </Col>
            <Col xs={6}>
              <ul>
                <li className="text-end">
                  <a href="#mail">Change account email</a>
                </li>
                <li className="text-end">
                  <a href="#password">Change password</a>
                </li>
                <li className="text-end">
                  <a href="#phone">Change phone number</a>
                </li>
              </ul>
            </Col>
          </Row>
          <hr />
          <Row>
            <Col xs={6}>
              <Paypal size={20} className="ms-4"></Paypal>
              <span className="fw-bold"> admin@strive.school</span>
            </Col>
            <Col xs={6}>
              <ul>
                <li className="text-end">
                  <a href="#a">Update payment info</a>
                </li>
                <li className="text-end">
                  <a href="#a">Billing details</a>
                </li>
              </ul>
            </Col>
            <hr />
            <Row className="m-0 p-0">
              <Col xs={6} className="text-start" />
              <Col xs={6}>
                <ul>
                  <li className="text-end">
                    <a href="#Promo">Redeem gift card or promo code </a>
                  </li>
                  <li className="text-end">
                    <a href="#Gift">Where to buy gift cardss</a>
                  </li>
                </ul>
              </Col>
            </Row>
            <hr />
          </Row>
        </Col>
        <Row>
          <Col xs={4}>
            <h3 className="fs-6 text-muted fw-semibold">PLAN DETAILS</h3>
          </Col>
          <Col xs={8}>
            <Row>
              <Col xs={6} className="text-start ps-2rem fw-semibold">
                PREMIUM ULTRA HD
              </Col>
              <Col xs={6} className="text-end">
                <a href="#Change">Change plan</a>
              </Col>
            </Row>
          </Col>
        </Row>
        <hr className="mt-2" />
        <Row>
          <Col xs={4}>
            <h3 className="fs-6 text-muted fw-semibold">SETTINGS</h3>
          </Col>
          <Col xs={8}>
            <Row>
              <Col xs={6} className="text-start ps-2rem fw-semibold">
                <a className="d-block" href="#link">
                  Parental controls{" "}
                </a>
                <a className="d-block" href="#link">
                  Test participation Manage download devices{" "}
                </a>
                <a className="d-block" href="#link">
                  Activate a device{" "}
                </a>
                <a className="d-block" href="#a">
                  Recent device streaming activity{" "}
                </a>
                <a className="d-block" href="#a">
                  Sign out Of all devices{" "}
                </a>
              </Col>
              <Col xs={6} className=" text-end"></Col>
            </Row>
          </Col>
        </Row>
      </Row>
      <hr />
      <Row>
        <Col xs={4}>
          <h3 className="fs-6 text-muted fw-semibold">MY PROFILE</h3>
        </Col>
        <Col xs={8}>
          <Row>
            <Col xs={6}>
              <img className="ms-4" src={avatar} alt="User Avatar" width="48px" />
              <span className="fw-bold ms-2">Strive Student</span>
            </Col>
            <Col xs={6}>
              <ul>
                <li className="text-end">
                  <a href="#a">Manage profile</a>
                </li>
                <li className="text-end">
                  <a href="#a">Add profile email</a>
                </li>
              </ul>
            </Col>
          </Row>
          <Row className="mt-2">
            <Col xs={5}>
              <ul>
                <li>
                  <a href="#a">Language</a>
                </li>
                <li>
                  <a href="#a">Playback settings</a>
                </li>
                <li>
                  <a href="#a">Subtitle appearance</a>
                </li>
              </ul>
            </Col>
            <Col xs={7} className="text-end">
              <ul>
                <li>
                  <a href="#a">Viewing activity</a>
                </li>
                <li>
                  <a href="#a">Ratings</a>
                </li>
              </ul>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  </main>
);

export default SettingsPage;
