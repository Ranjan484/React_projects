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
            <Form style={{ maxWidth: "30rem", margin: "2% auto" }}>
              <FormControl type="text" placeholder="Search blogs"></FormControl>
            </Form>
          </Card.Title>
        </Card.ImgOverlay>
      </Card>

      {/* 
      <Navbar bg="light" className="navbar">
        <Container>
          <Nav className="space-between">
            <Nav.Link href="#Admins">Admins</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#Students">Students</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#Teacher">Teacher</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#Users">Users</Nav.Link>
          </Nav>
        </Container>
      </Navbar> */}

      <Row xs={1} md={3}>
        {CardInfos.map((cardInfo) => {
          console.log(cardInfo);
          const { views, likes, comments, img, title, card_text } = cardInfo;
          return (
            <Col>
              <Card className="card-container" key={cardInfo.id}>
                <Card.Img variant="top" src={img} height="200em" />
                <Card.Body>
                  <Card.Title style={{ height: "1em" }} className="text-center">
                    <h3>{title}</h3>
                  </Card.Title>
                  <Card.Text style={{ height: "0.4em" }}>{card_text}</Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Button variant="success" className="card-btn">
                    Read
                  </Button>
                </Card.Footer>
              </Card>
            </Col>
          );
        })}
      </Row>
    </>
  );
};
export default Home;
