import { Row, Card, Col } from "react-bootstrap";
import clsx from "clsx";
import styles from "./Content.module.scss";
function Content() {
  return (
    <div className={clsx(styles.wrapper)}>
      <Row xs={1} sm={2} className="g-4">
        {Array.from({ length: 4 }).map((_, idx) => (
          <Col>
            <Card>
              <Card.Img
                variant="top"
                src="https://photo-cms-plo.zadn.vn/w850/Uploaded/2022/vocgmvpi/2022_07_05/3-6857.jpg"
              />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Content;
