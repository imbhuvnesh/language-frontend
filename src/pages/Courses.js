import CardComponent from "../components/Card";

import { Stack, Row, Col, Placeholder } from "react-bootstrap";

const Courses = () => {
  const coursesData = [
    {
      title: "Level A1",
      price: "1000",
      description: [
        "You will be able to read easy elementary school level material and children's storybooks, as well as texts that incorporate language connected to daily routine tasks.",
        "You can fill out application forms or provide your personal information. You'll be able to create emails inviting people to birthday parties and write easily about daily activities with basic syntax and sentence structure.",
        "You will be able to comprehend simple Monolog discussions like announcements in a train station or airport, even if a native speaker speaks in a very low phase.",
        "The opportunity to introduce oneself, You'll be able to discuss your interests and occupations, You will be able to discuss commonplace daily tasks.",
      ],
    },
    {
      title: "Level A2",
      price: "1000",
      description: [
        "In ordinary circumstances, comprehend and use words and basic expressions.",
        "Make oneself understandable in straightforward situations requiring communication about well-known and widely-discussed subjects.",
        "Simply describe your background and schooling, your immediate surroundings, and any other issues related to your urgent needs. ",
      ],
    },
    {
      title: "Level B1",
      price: "1000",
      description: [
        "Recognise key information in chats and communications on recurring topics relevant to work, school, pleasure, etc. when lucid, conventional language is employed.",
        "Deal with most situations typically encountered when travelling.",
        "When speaking about known subjects and areas of personal interest, be clear and concise.",
        "Report on experiences and events, express goals, dreams, and aspirations, and offer succinct justifications.",
      ],
    },
    {
      title: "Level B2",
      price: "1000",
      description: [
        "Being able to comprehend the main ideas of complicated writings on concrete and abstract subjects, as well as technical debates in your field of expertise.",
        "Connect with native speakers so easily and naturally that a typical conversation is achievable without much effort on either side.",
        "Explain your perspective on a current subject, convey your views clearly and in depth, and list the advantages and disadvantages of several options.",
      ],
    },
    {
      title: "Level C1",
      price: "1000",
      description: [
        "Comprehend a variety of complex, lengthy texts, as well as implicit meanings",
        "Spontaneously and fluidly convey oneself without overusing words.",
        "Use the language flexibly and effectively in your training and studies, as well as in your social and professional life.",
        "Make concise, well-organized, and thorough statements about difficult subjects.",
      ],
    },
    {
      title: "Level C2",
      price: "1000",
      description: [
        "Easily comprehend almost everything that is read or heard in German",
        "Sum up data from numerous written and oral sources, rationally reciting justifications and justifications",
        "When addressing more complicated subjects, express yourself impromptu with a high degree of fluency and accuracy and make subtler subtleties of meaning obvious.",
      ],
    },
  ];
  return (
    <div className="container-fluid">
      <h3 className="text-center fw-bold display-6">Courses</h3>
      <div as="div" className="courses">
        <Stack className="col-md-5 mx-auto">
          {coursesData.map((course) => (
            <CardComponent
              title={course.title}
              description={course.description}
              price={course.price}
              key={course.title}
            ></CardComponent>
          ))}
        </Stack>
      </div>
    </div>
  );
};

export default Courses;
