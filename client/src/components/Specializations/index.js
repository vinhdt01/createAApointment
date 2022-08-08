import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import clsx from "clsx";
import styles from "./Specialization.module.scss";
function Specialization() {
  return (
    <Container className={clsx(styles.container)}>
      <h3 className={clsx(styles.title)}>Các chuyên khoa</h3>
      <Row className={clsx(styles.row)}>
        <Col className={clsx(styles.col)} xxl={3} lg={6}>
          <img
            className={clsx(styles.img)}
            src="https://cdn.benhvienthucuc.vn/wp-content/uploads/2021/06/kham-tieu-hoa-la-kham-nhung-gi.jpg"
            alt="photoErorr"
          />
          <p className={clsx(styles.content)}>Tiêu hóa</p>
        </Col>
        <Col xxl={3} lg={6}>
          <img
            className={clsx(styles.img)}
            src="https://filethcs.hcm.edu.vn//UploadImages/thcsnguyenduq1/phuongha/20190927_024627_630788_Do_chuc_nang_ho_hap.max-1800x1800.jpg?w=1130"
            alt="photoErorr"
          />
          <p className={clsx(styles.content)}> Hô hấp</p>
        </Col>

        <Col xxl={3} lg={6}>
          <img
            className={clsx(styles.img)}
            src="https://vinmec-prod.s3.amazonaws.com/images/20200425_034556_632300_kham-noi-than-kinh.max-1800x1800.jpg"
            alt="photoErorr"
          />
          <p className={clsx(styles.content)}>Thần kinh</p>
        </Col>

        <Col xxl={3} lg={6}>
          <img
            className={clsx(styles.img)}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjMB2I0M05ikwUuL0HqAf7qoP9AQzwDE8few&usqp=CAU"
            alt="photoErorr"
          />
          <p className={clsx(styles.content)}>Xương khớp </p>
        </Col>
        <Col xxl={3} lg={6}>
          <img
            className={clsx(styles.img)}
            src="https://thuocdantoc.vn/wp-content/uploads/2019/05/phong-kham-bs-nguyen-thuong-nghia-chuyen-khoa-tim-mach.jpg"
            alt="photoErorr"
          />
          <p className={clsx(styles.content)}>Tim mạch</p>
        </Col>
      </Row>
    </Container>
  );
}

export default Specialization;
