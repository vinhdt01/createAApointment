import { useSelector } from "react-redux";
function Result() {
  const status = (state) => state.schedule.status;
  const number = (state) => state.schedule.number;

  const value_1 = useSelector(status);
  const value_2 = useSelector(number);

  if (value_1 === "successfully") {
    return (
      <>
        <p>Chúc mừng bạn đã đăng kí thành công!</p>
        <p>Số thứ tự</p>
        <p style={{ color: "green", fontWeight: "bold", fontSize: "3rem" }}>
          {value_2}
        </p>
        <div
          style={{
            color: "grey",
            maxWidth: "500px",
            margin: "0 auto",
            fontStyle: "italic",
          }}
        >
          Xin lưu ý , thông thường mỗi lần khám bệnh mỗi bệnh nhân sẽ trung bình
          15 - 20 phút. Do đó căn cứ dựa vào số thứ tự và tình hình giao thông
          bạn nên cân nhắn đến đúng giờ tránh lỡ hẹn.
        </div>
      </>
    );
  } else {
    return (
      <>
        <p>Vui lòng thử lại sau.</p>
      </>
    );
  }
}
export default Result;
