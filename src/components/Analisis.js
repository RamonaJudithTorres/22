import { Card, Button } from "react-bootstrap";
import pic3 from '../assets/foto1.jpg'

export default function Analisis() {
  return (
    <div className="mt-5 mx-5 d-flex">
      <div className="container-fluid">
        <div className="row mb-5 align-items-center">
          <div className="col-md-6 mb-md-0 mb-3">
            <Card style={{ width: "40rem" }}>
              <Card.Img variant="top" src={pic3} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
          
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-6 mb-md-0 mb-3 ">
          <Card style={{ width: "30rem" }}>
              <Card.Body>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
            
          </div>
        </div>

        <div className="row mb-5">
          <div className="col-md-6 mb-md-0 mb-3">
          </div>
          <div className="col-md-6 mb-md-0 mb-3">
            <Card style={{ width: "40rem" }}>
              <Card.Img variant="top" src={pic3} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
        </div>

        <div className="row mb-5">
          <div className="col-md-6 mb-md-0 mb-3">
            <Card style={{ width: "40rem" }}>
              <Card.Img variant="top" src={pic3} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-6 mb-md-0 mb-3">
            <Card style={{ width: "40rem" }}>
              <Card.Img variant="top" src={pic3} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
