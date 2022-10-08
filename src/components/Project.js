import ecommerce from '../assets/ecommerce.png';
import pwa from '../assets/pwa.png';
import teamWork from'../assets/teamWork.png';
import weatherApi from '../assets/weatherApi.png';
import noteTaker from '../assets/noteTaker.png';

function Project(){
// the all of the project i have made in a array
const portfolioList = [
  {
    id: 0,
    title: "Just Another Note Application",
    img: pwa,
    description:
      "Just Anoter Note Appliaction where it can be download and use offline",
    gitHubRepo: "https://github.com/Bryguy20/Text-Editor-Application",
    deployed: " https://just-another-text-edit.herokuapp.com/",
  },
  {
    id: 1,
    title: "Team Profile Generator",
    img: teamWork,
    description:
      "This is a node.js command-line application that allows the user to build teams for the jobs.",
    gitHubRepo: "https://github.com/Bryguy20/The-employee-list",
    deployed: null,
  },
  {
    id: 2,
    title: "ecommerce Website",
    img: ecommerce,
    description:
      "This is a group project of making a ecommerce website.",
    gitHubRepo: "https://github.com/Bryguy20/ecommerce-website",
    deployed: "https://nik-nak.herokuapp.com/",
  },
  {
    id: 3,
    title: "Weather Api",
    img: weatherApi,
    description:
      "This is a weather Api where you can see the forcast for the week in your location",
    gitHubRepo: "https://github.com/Bryguy20/Weather-Dashboard",
    deployed: "https://bryguy20.github.io/Weather-Dashboard/",
  },
  {
    id: 4,
    title: "note Taker",
    img: noteTaker,
    description:
      "this is a note taker applcation where you can take notes and save or even delete when needed. ",
    gitHubRepo: "https://github.com/Bryguy20/Note-Taker",
    deployed: "https://note-taker-cha.herokuapp.com/",
  }
]
return (
  <section>
    <div className="container">
      <div className="app-list">
        {portfolioList.map((project) => (
          <div className="card m-2 p-2 customCard" key={project.id}>
            <img
              src={project.img}
              alt={`Screenshot of ${project.title}`}
              className="cardImage"
            />
            <div className="cardInfo">
              <h3 className="m-1">{project.title}</h3>
              <p className="m-1">{project.description}</p>
              <p className="m-0">
                <a
                  href={project.gitHubRepo}
                >
                </a>
                {project.deployed !== null && (
                  <a
                    href={project.deployed}
                  >
                  </a>
                )}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
}

export default Project;
