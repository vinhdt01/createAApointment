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
  useEffect(async () => {
    dispatch(listRequest({ person_id }));
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
