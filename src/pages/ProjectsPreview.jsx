import Technologies from "../components/Technologies/Technologies";
import VideoComponent from "../components/VideoComponent/VideoComponent";
import { PiGithubLogoDuotone } from "react-icons/pi";
import "./ProjectsPreview.css";
const ProjectsPreview = () => {
  return (
    <section id="projects">
      <div className="container">
      <section className="card border">
        <h1>Proyectos</h1>
        <ul className="card-list">
          <li className="card border shadow">
            <img src="./muebles502xela.png" alt="" />
            <div className="name-git">
              <h2>
                <a href="https://muebles502xela.netlify.app/">Muebles502Xela</a>
              </h2>

              <a href="https://github.com/tahayk3/Muebles2024DRFReact">
                <PiGithubLogoDuotone style={{ fontSize: "50px", paddingBottom:"50px" }} />
              </a>
            </div>
            <Technologies
              items={[
                "React",
                "Django",
                "Firebase",
                "Railway",
                "Postgresql",
                "Supabase",
                "Blender",
                "Axios",
                "Jsonwebtokens",
              ]}
            />
            <span className="top"></span>
            <span className="right"></span>
            <span className="bottom"></span>
            <span className="left"></span>
          </li>
          <li className="card border shadow">
            <img src="./familab.png" alt="" />
            <div className="name-git">
              <h2>
                <a href="https://familabxela.netlify.app/">Familab</a>
              </h2>

              <a href="https://github.com/tahayk3/familab">
                <PiGithubLogoDuotone style={{ fontSize: "50px", paddingBottom:"50px" }} />
              </a>
            </div>
            <Technologies items={["Emailjs", "React"]} />
            <span className="top"></span>
            <span className="right"></span>
            <span className="bottom"></span>
            <span className="left"></span>
          </li>
          <li className="card border shadow">
            <img src="./mueblesxela.png" alt="" />
          
            <div className="name-git">
              <h2>
              <a href="https://tahayk3.github.io/CatalogoMuebles/">
                Catálogo muebles
              </a>
              </h2>

              <a href="https://github.com/tahayk3/CatalogoMuebles">
                <PiGithubLogoDuotone style={{ fontSize: "50px", paddingBottom:"50px" }} />
              </a>
            </div>
            <Technologies items={["React", "Emailjs"]} />
            <span className="top"></span>
            <span className="right"></span>
            <span className="bottom"></span>
            <span className="left"></span>
          </li>
          <li className="card border shadow">
            <img src="./portafolio.png" alt="" />
            <div className="name-git">
              <h2>
              <a href="/">
                Este portafolío
              </a>
              </h2>

              <a href="https://github.com/tahayk3/portafolio">
                <PiGithubLogoDuotone style={{ fontSize: "50px", paddingBottom:"50px" }} />
              </a>
            </div>
            <Technologies items={["Supabase", "React"]} />
            <span className="top"></span>
            <span className="right"></span>
            <span className="bottom"></span>
            <span className="left"></span>
          </li>
          <li className="card border shadow">
            <VideoComponent />
            <div className="name-git">
              <h2>
              <a href="/">
                Api de la nasa
              </a>
              </h2>

              <a href="https://github.com/tahayk3/reactNativeApiNasa">
                <PiGithubLogoDuotone style={{ fontSize: "50px", paddingBottom:"50px" }} />
              </a>
            </div>
            <Technologies items={["React"]} />
            <span className="top"></span>
            <span className="right"></span>
            <span className="bottom"></span>
            <span className="left"></span>
          </li>

          <li className="card border shadow">
            <img src="./calculate.png" alt="" />
            <div className="name-git">
              <h2>
              <a href="https://ubiquitous-vacherin-9d80c4.netlify.app/">
                Calculadora moderma
              </a>
              </h2>

              <a href="https://github.com/tahayk3/back-modern-calculator">
                <PiGithubLogoDuotone style={{ fontSize: "50px", paddingBottom:"50px" }} />
              </a>
            </div>
            <Technologies items={["React", "Gemini", "Go", "Netlify", "Railway", "Emailjs"]} />
            <span className="top"></span>
            <span className="right"></span>
            <span className="bottom"></span>
            <span className="left"></span>
          </li>
        </ul>
      </section>
    </div>
    </section>
  );
};

export default ProjectsPreview;
