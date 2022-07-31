import { Row, Card, Col } from "react-bootstrap";
import clsx from "clsx";
import styles from "./Content.module.scss";
function Content() {
  const data = [
    {
      photoUrl:
        "https://vinmec-prod.s3.amazonaws.com/images/vicaread/20210602_120205_960094_ai-0.jpeg",
      title: "Sàng lọc đột quỵ nhanh",
      content:
        "Với đội ngũ có tay nghề , cùng với việc đầu tư các thiết bị đạt chuẩn chất lượng hàng đầu thế giới việc xét nghiệm đột vị vô cùng nhanh chóng",
    },
    {
      photoUrl:
        "https://vinmec-prod.s3.amazonaws.com/images/vicaread/20210602_115921_943199_ICon.jpeg",
      title: "Hợp tác chiến lược",
      content:
        "Chúng tôi luôn hợp tác với các CDC tại các quốc gia có nền y học nổi tiếng trên thế giới , nhằm chia sẻ trao đổi kinh nghiệm các phát đồ điều trị các chứng bệnh",
    },
    {
      photoUrl:
        "https://vinmec-prod.s3.amazonaws.com/images/vicaread/20210602_115652_716747_Bweb_Tim.ori.jpg",
      title: "Mổ tim không đau",
      content:
        "Thấu hiểu được tâm lý sợ đau khi mổ tim , chúng tôi cũng có những bí quyết và những công nghệ giảm thiểu mức độ xâm lấn và tổn thương khi mổ tim",
    },
  ];
  return (
    <div className={clsx(styles.wrapper)}>
      <Row xs={1} sm={2} className="g-4">
        {data.map((value, index) => (
          <Col key={index}>
            <Card>
              <Card.Img variant="top" src={value.photoUrl} />
              <Card.Body>
                <Card.Title>{value.title}</Card.Title>
                <Card.Text>{value.content}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Content;
