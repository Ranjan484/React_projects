import {
  Row,
  Col,
  Nav,
  Navbar,
  Card,
  Container,
  Button,
  Form,
  FormControl,
} from "react-bootstrap";
import CardInfos from "../data/cardInfo";
import BodyNav from "./bodyNav.Screen";

const Home = () => {
  const img =
    "https://images.pexels.com/photos/6195662/pexels-photo-6195662.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
  return (
    <>
      <Card>
        <Card.Img
          className="hero"
          src="https://images.pexels.com/photos/169573/pexels-photo-169573.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt="Card image"
        />
        <Card.ImgOverlay>
          <Card.Title className="text-center">
            <h6 className="hero-text">
              Achiever Group and research center blogs
            </h6>
            <Form
              style={{ display: "flex", maxWidth: "50rem", margin: "2% auto" }}
            >
              <FormControl
                className="formControl"
                type="text"
                placeholder="Search blogs"
              ></FormControl>
              <i className="fa fa-search fa-2x" aria-hidden="true"></i>
            </Form>
          </Card.Title>
        </Card.ImgOverlay>
      </Card>

      <BodyNav />

      <Row xs={1} md={3} sm={2}>
        {CardInfos.map((cardInfo) => {
          console.log(cardInfo);
          const { views, likes, comments, img, title, card_text } = cardInfo;
          return (
            <Col>
              <Card className="card-container" key={cardInfo.id}>
                <Card.Img variant="top" src={img} height="200em" />
                <Card.Body>
                  <Card.Title
                    style={{ fontSize: "1.5em" }}
                    className="text-center"
                  >
                    <h3>{title}</h3>
                  </Card.Title>
                  <Card.Text style={{ fontSize: "1em" }}>{card_text}</Card.Text>
                </Card.Body>

                <Button variant="success" className="card-btn">
                  Read
                </Button>
              </Card>
            </Col>
          );
        })}
      </Row>
    </>
  );
};
export default Home;
