import { Placeholder } from "react-bootstrap";

const AboutUs = () => {
  return (
    <div className="container-fluid">
      <h3 className="display-5 fw-bold text-center main-color">About Us</h3>
      <div className="d-flex justify-content-center align-items-center">
        <Placeholder
          as="p"
          animation="wave"
          className="w-100 p-2 text-justify fs-3"
          bg="light"
          style={{ borderRadius: "10px" }}
        >
          The Language Seekho offers classes in German and other languages at different levels. With
          our own methods, we offer outstanding instruction for learning German. It is founded on
          imagination, enjoyment, and a conducive learning environment. Using our special methods,
          we do evaluate the candidate. We offer comprehensive instruction on how to pick up the
          language quickly. In order to develop future leaders who can apply their knowledge in the
          cutthroat global economy, it is our objective to provide ongoing, high-quality training.
          Foreign language instruction is offered in Bangalore through the Indian Institute of
          Foreign Languages. Writing, reading, listening, and speaking skills are practised
          practically by the students. Both the necessary corporate communication abilities and
          effective communication techniques are learned by students.
        </Placeholder>
      </div>
    </div>
  );
};

export default AboutUs;
