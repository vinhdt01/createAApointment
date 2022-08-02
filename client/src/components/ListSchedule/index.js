import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import clsx from "clsx";
import { Table, Modal, Button } from "react-bootstrap";
import moment from "moment";
import { listRequest } from "../../redux/Slices/listScheduleSlice.js";
import { deleteRequest } from "../../redux/Slices/deleteSlice.js";
import { list } from "../../redux/Select/index.js";
import styles from "./ListSchedule.module.scss";
export default function ListSchedule() {
  const dispatch = useDispatch();
  const person_id = localStorage.getItem("person_id");
  const select = useSelector(list);
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [id, setId] = useState("");
  function getCookie(name) {
    let cookie = {};
    document.cookie.split(";").forEach(function (el) {
      let [k, v] = el.split("=");
      cookie[k.trim()] = v;
    });
    return cookie[name];
  }
  console.log("select", select);
  useEffect(() => {
    var refreshToken = getCookie("refreshToken");
    if (refreshToken) {
      dispatch(listRequest({ person_id }));
    } else {
      navigate("/login");
    }
  }, []);

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = (_id) => {
    setShow(true);
    setId(_id);
  };
  const handleDelete = async () => {
    setShow(false);
    dispatch(deleteRequest(id));
  };
  return (
    <div className={clsx(styles.wrapper)}>
      <div className={clsx(styles.popup)}>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Warming!!!</Modal.Title>
          </Modal.Header>
          <Modal.Body>Your action won't be revive</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={() => handleDelete()}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
      <h1>List Schedule</h1>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Full Name</th>
            <th>Date of Birth</th>
            <th>Appointment</th>
            <th>Turn number</th>
            <th>Faculity</th>
            <th>Examination Department</th>
          </tr>
        </thead>
        <tbody>
          {select &&
            select.map((value, index) => (
              <tr key={index}>
                <td>{index}</td>
                <td>{value.name}</td>
                <td>{moment(value.dateofbirth).format("MMM DD,YYYY")}</td>
                <td>
                  {moment(value.dateofappointment).format(" MMM DD,YYYY")}
                </td>
                <td>{value.numberTurn}</td>

                <td>{value.faculities}</td>
                <td>
                  <a
                    className={clsx(styles.textA)}
                    href="#"
                    onClick={() => handleShow(value._id)}
                  >
                    Xóa
                  </a>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
      {select.length === 0 ? (
        <h1 style={{ color: "#d4bbbb" }}>None to display</h1>
      ) : (
        <br />
      )}

      <Button className={clsx(styles.btn)} onClick={() => navigate("/")}>
        Back
      </Button>
    </div>
  );
}
