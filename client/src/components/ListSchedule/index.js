import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import clsx from "clsx";
import { Table, Button } from "react-bootstrap";
import moment from "moment";
import { listRequest } from "../../redux/Slices/listScheduleSlice.js";
import { list } from "../../redux/Select/index.js";
import styles from "./ListSchedule.module.scss";
export default function ListSchedule() {
  const dispatch = useDispatch();
  const person_id = localStorage.getItem("person_id");
  const [bio, setBio] = useState([]);
  const select = useSelector(list);
  const navigate = useNavigate();
  function getCookie(name) {
    let cookie = {};
    document.cookie.split(";").forEach(function (el) {
      let [k, v] = el.split("=");
      cookie[k.trim()] = v;
    });
    return cookie[name];
  }
  const myFunction = (id) => {
    let text;
    if (window.confirm("Press a button!") == true) {
      console.log("You pressed OK!", id);
    } else {
      console.log("You canceled!");
    }
  };
  useEffect(async () => {
    var refreshToken = getCookie("refreshToken");
    if (refreshToken) {
      dispatch(listRequest({ person_id }));
    } else {
      navigate("/login");
    }
  }, []);

  return (
    <div className={clsx(styles.wrapper)}>
      <h1>List Schedule</h1>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
            <th>#</th>
          </tr>
        </thead>
        <tbody>
          {select &&
            select.map((value, index) => (
              <tr>
                <td>{value.name}</td>
                <td>{moment(value.dateofbirth).format("MMM DD,YYYY")}</td>
                <td>
                  {moment(value.dateofappointment).format(" MMM DD,YYYY")}
                </td>
                <td>{value.faculities}</td>
                <td>
                  <a href="#" onClick={() => myFunction(value._id)}>
                    Xóa
                  </a>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
      <Button className={clsx(styles.btn)} onClick={() => navigate(-1)}>
        Back
      </Button>
    </div>
  );
}
