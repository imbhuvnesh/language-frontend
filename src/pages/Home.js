import { Placeholder } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../App.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="container-fluid home">
      <h1 className="p-2 display-2 m-2 fw-bold bg-transparent">
        Take <span className="main-color">Language</span> Classes{" "}
        <span className="main-color">online</span> from{" "}
        <span className="main-color">anywhere!</span>
      </h1>
      <p className="p-2 display-5 text-black m-2 fw-bold">Browse from wide variety of courses.</p>
      <p className="p-2 btn m-3 button" onClick={() => navigate("/courses")}>
        Courses &rarr;
      </p>
    </div>
  );
};

export default Home;
