import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect, useCallback } from "react";
import moment from "moment";
import clsx from "clsx";
import { scheduleRequest } from "../../redux/Slices/scheduleSlice";
import styles from "./index.module.scss";
import { useNavigate } from "react-router-dom";

function Schedule() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const [display, setDisplay] = useState(false);
  const values = (state) => state.schedule.status;
  const a = useSelector(values);
  const navigate = useNavigate();
  const today = new Date();
  let tomorrow = new Date();
  tomorrow.setDate(today.getDate() + 1);
  const OnSubmit = (data) => {
    var person_id = localStorage.getItem("person_id");
    data.person_id = person_id;

    dispatch(scheduleRequest({ data }));
    navigate("/result");
  };

  var value = localStorage.getItem("token");
  useEffect(() => {
    if (value !== null) {
      setDisplay(true);
    } else {
      setDisplay(false);
    }
  }, []);

  return (
    display && (
      <>
        <form className={clsx(styles.total)} onSubmit={handleSubmit(OnSubmit)}>
          <p>Đặt lịch khám , chữa bệnh</p>
          <div className={clsx(styles.container)}>
            <div className={clsx(styles.container1)}>
              <div className={clsx(styles.item1)}>
                <label>Họ và tên</label>
                <input
                  type="text"
                  name="name"
                  {...register("name", { required: true, maxLength: 20 })}
                />
                {errors.name?.type === "required" && "Name is required"}
              </div>
              <div className={clsx(styles.item2)}>
                <label>Số điện thoại</label>
                <input
                  type="text"
                  name="phone"
                  {...register("phone", {
                    required: true,
                    minLength: 7,
                    maxLength: 11,
                  })}
                />
                {errors.phone?.type === "required" && "phonenumber is unvalid"}
                {errors.phone?.type === "minLength" &&
                  "phonenumber is too short"}
                {errors.phone?.type === "maxLength" &&
                  "phonenumber is too long"}
              </div>
            </div>
            <div className={clsx(styles.container2)}>
              <div className={clsx(styles.item1)}>
                <label>Ngày sinh *</label>
                <input
                  type="date"
                  name="dateofbirth"
                  {...register("dateofbirth", { required: true })}
                />
                {errors.dateofbirth?.type === "required" &&
                  "dateofbirth is required"}
              </div>
              <div className={clsx(styles.item2)}>
                <label>Ngày đặt</label>
                <input
                  type="date"
                  name="dateofappointment"
                  min={moment(tomorrow).format("YYYY-MM-DD")}
                  {...register("dateofappointment", { required: true })}
                />
                {errors.dateofappointment?.type === "required" &&
                  "dateofappointment is required"}
              </div>
            </div>
            <div className={clsx(styles.container3)}>
              <div className={clsx(styles.item1, styles.need)}>
                <label>Nhu cầu khám bệnh</label>

                <select
                  style={{ height: "40px" }}
                  name="faculities"
                  {...register("faculities", { required: true })}
                >
                  <option value="Tiêu Hóa">Tiêu Hóa</option>
                  <option value="Hô Hấp">Hô Hấp</option>
                  <option value="Thần Kinh">Thần Kinh</option>
                  <option value="Xương Khớp">Xương Khớp</option>
                  <option value="Tim Mạch">Tim Mạch</option>
                </select>
                {errors.faculities?.type === "required" &&
                  "faculities is required"}

                <button
                  type="submit"
                  style={{
                    height: "40px",
                    backgroundColor: "#286ba6",
                    color: "#fff",
                    border: "none",
                    marginTop: "42px",
                    cursor: "pointer",
                  }}
                >
                  Đặt lịch
                </button>
              </div>
            </div>
          </div>
        </form>
        <div></div>
      </>
    )
  );
}
export default Schedule;
