import { Card } from "react-bootstrap";

const CardComponent = ({ title, description, price }) => {
  return (
    <Card className="m-2 w-100">
      <Card.Header className="text-bold" style={{ background: "#ff5722" }}>
        {title}
      </Card.Header>
      <Card.Body>
        <Card.Text>
          {description.map((desc) => {
            return (
              <ul>
                <li  className="fw-bold">{desc}</li>
              </ul>
            );
          })}
        </Card.Text>
        <hr />
        <Card.Subtitle>{price}€</Card.Subtitle>
      </Card.Body>
    </Card>
  );
};

export default CardComponent;
