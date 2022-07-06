import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Table, Button } from "react-bootstrap";
import moment from "moment";
import { listRequest } from "../../redux/Slices/listScheduleSlice.js";
import { list } from "../../redux/Select/index.js";
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
  useEffect(async () => {
    var refreshToken = getCookie("refreshToken");
    if (refreshToken) {
      dispatch(listRequest({ person_id }));
    } else {
      navigate("/login");
    }
  }, []);

  return (
    <div>
      <h1>Hello World</h1>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Date of Birth</th>
            <th>Date of Appointment</th>
            <th>Faculities</th>
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
              </tr>
            ))}
        </tbody>
      </Table>
      <Button onClick={() => navigate(-1)}>Back</Button>
    </div>
  );
}
