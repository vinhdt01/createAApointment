import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

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

  const navigate = useNavigate();
  const today = new Date();
  let tomorrow = new Date();
  tomorrow.setDate(today.getDate() + 1);
  var value = localStorage.getItem("token");

  const OnSubmit = (data) => {
    if (!value) {
      navigate("/login");
      return;
    }
    var person_id = localStorage.getItem("person_id");
    data.person_id = person_id;

    dispatch(scheduleRequest({ data }));
    navigate("/result");
  };

  return (
    <form className={clsx(styles.total)} onSubmit={handleSubmit(OnSubmit)}>
      <p>Đặt lịch khám , chữa bệnh</p>
      <div className={clsx(styles.container)}>
        <div className={clsx(styles.container1)}>
          <div className={clsx(styles.item1)}>
            <label for="name">Họ và tên</label>
            <input
              id="name"
              type="text"
              name="name"
              {...register("name", { required: true, maxLength: 20 })}
            />
            {errors.name?.type === "required" && "Name is required"}
          </div>
          <div className={clsx(styles.item2)}>
            <label for="phone">Số điện thoại</label>
            <input
              id="phone"
              type="text"
              name="phone"
              {...register("phone", {
                required: true,
                minLength: 7,
                maxLength: 11,
              })}
            />
            {errors.phone?.type === "required" && "phonenumber is unvalid"}
            {errors.phone?.type === "minLength" && "phonenumber is too short"}
            {errors.phone?.type === "maxLength" && "phonenumber is too long"}
          </div>
        </div>
        <div className={clsx(styles.container2)}>
          <div className={clsx(styles.item1)}>
            <label for="dateofbirth">Ngày sinh *</label>
            <input
              id="dateofbirth"
              type="date"
              name="dateofbirth"
              {...register("dateofbirth", { required: true })}
            />
            {errors.dateofbirth?.type === "required" &&
              "dateofbirth is required"}
          </div>
          <div className={clsx(styles.item2)}>
            <label for="dateofappointment">Ngày đặt</label>
            <input
              id="dateofappointment"
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
            <label for="faculities">Nhu cầu khám bệnh</label>

            <select
              id="faculities"
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
            {errors.faculities?.type === "required" && "faculities is required"}

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
  );
}
export default Schedule;
