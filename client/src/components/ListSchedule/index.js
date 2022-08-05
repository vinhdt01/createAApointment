import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import clsx from "clsx";
import { Table, Modal, Button, Form } from "react-bootstrap";
import moment from "moment";
import { listRequest } from "../../redux/Slices/listScheduleSlice.js";
import { deleteRequest } from "../../redux/Slices/deleteSlice.js";
import { list, updateStatus } from "../../redux/Select/index.js";
import styles from "./ListSchedule.module.scss";
import { updateRequest } from "../../redux/Slices/updateSlice";
export default function ListSchedule() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const person_id = localStorage.getItem("person_id");
  const select = useSelector(list);
  const selectStatus = useSelector(updateStatus);
  console.log(useSelector(updateStatus));
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [showUpdate, setShowUpdate] = useState(false);
  const today = new Date();
  let tomorrow = new Date();
  tomorrow.setDate(today.getDate() + 1);
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
    setShowUpdate(false);
  };
  const handleShow = (_id) => {
    setShow(true);
    setId(_id);
  };
  const handleShowUpdate = (_id) => {
    setShowUpdate(true);
    setId(_id);
  };
  const handleDelete = async () => {
    setShow(false);
    dispatch(deleteRequest(id));
  };
  // const handleUpdate = async () => {
  //   setShow(false);
  //   console.log("123");
  // };

  const OnSubmit = (data) => {
    data.id = id;
    setShowUpdate(false);
    dispatch(updateRequest(data));
    window.location.reload();
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

        <Modal show={showUpdate} onHide={handleClose}>
          <form onSubmit={handleSubmit(OnSubmit)}>
            <Modal.Header closeButton>
              <Modal.Title>Update</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className={clsx(styles.updateContainer)}>
                <div className={clsx(styles.items)}>
                  <label>Full Name</label>
                  <Form.Control
                    type="text"
                    placeholder="Full Name"
                    name="name"
                    {...register("name", { required: true, maxLength: 20 })}
                  />
                  {errors.name?.type === "required" && "Name is required"}
                </div>
                <div className={clsx(styles.items)}>
                  <label>Phone</label>

                  <Form.Control
                    type="text"
                    placeholder="Phone"
                    name="phone"
                    {...register("phone", { required: true, maxLength: 20 })}
                  />
                  {errors.phone?.type === "required" &&
                    "phonenumber is unvalid"}
                  {errors.phone?.type === "minLength" &&
                    "phonenumber is too short"}
                  {errors.phone?.type === "maxLength" &&
                    "phonenumber is too long"}
                </div>
              </div>
              <div className={clsx(styles.updateContainer)}>
                <div className={clsx(styles.items)}>
                  <label>Date of Birth</label>
                  <Form.Control
                    className={clsx(styles.sub)}
                    type="date"
                    placeholder="Date of Birth"
                    name="dateofbirth"
                    {...register("dateofbirth", {
                      required: true,
                      maxLength: 20,
                    })}
                  />
                  {errors.dateofbirth?.type === "required" &&
                    "dateofbirth is required"}
                </div>
                <div className={clsx(styles.items)}>
                  <label className={clsx(styles.label)}>Appointment</label>
                  <Form.Control
                    className={clsx(styles.sub)}
                    type="date"
                    placeholder="Date of Birth"
                    min={moment(tomorrow).format("YYYY-MM-DD")}
                    name="dateofappointment"
                    {...register("dateofappointment", {
                      required: true,
                      maxLength: 20,
                    })}
                  />
                  {errors.dateofappointment?.type === "required" &&
                    "dateofappointment is required"}
                </div>
              </div>
              <div className={clsx(styles.updateContainer)}>
                <div className={clsx(styles.items)}>
                  <label>Examination Department</label>
                  <Form.Select
                    aria-label="Default select example"
                    name="faculities"
                    {...register("faculities", { required: true })}
                  >
                    <option value="Tiêu Hóa">Tiêu Hóa</option>
                    <option value="Hô Hấp">Hô Hấp</option>
                    <option value="Thần Kinh">Thần Kinh</option>
                    <option value="Xương Khớp">Xương Khớp</option>
                    <option value="Tim Mạch">Tim Mạch</option>
                  </Form.Select>
                  {errors.faculities?.type === "required" &&
                    "faculities is required"}
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" type="submit">
                Save Changes
              </Button>
            </Modal.Footer>
          </form>
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
            <th>Examination Department</th>
            <th></th>
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
                  <a
                    className={clsx(styles.textA)}
                    href="#"
                    onClick={() => handleShowUpdate(value._id)}
                  >
                    Sửa
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
