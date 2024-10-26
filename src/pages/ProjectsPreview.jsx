import Technologies from "../components/Technologies/Technologies";
import VideoComponent from "../components/VideoComponent/VideoComponent";
import { IoLogoGithub } from "react-icons/io";
import { PiGithubLogoDuotone } from "react-icons/pi";
import "./ProjectsPreview.css";
const ProjectsPreview = () => {
  return (
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
                <PiGithubLogoDuotone style={{ fontSize: "50px" }} />
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
                <PiGithubLogoDuotone style={{ fontSize: "50px" }} />
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
            <h2>
              <a href="https://tahayk3.github.io/CatalogoMuebles/">
                Catálogo muebles
              </a>
            </h2>

            <div className="name-git">
              <h2>
              <a href="https://tahayk3.github.io/CatalogoMuebles/">
                Catálogo muebles
              </a>
              </h2>

              <a href="https://github.com/tahayk3/CatalogoMuebles">
                <PiGithubLogoDuotone style={{ fontSize: "50px" }} />
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
              <a href="https://tahayk3.github.io/CatalogoMuebles/">
                Este portafolío
              </a>
              </h2>

              <a href="https://github.com/tahayk3/portafolio">
                <PiGithubLogoDuotone style={{ fontSize: "50px" }} />
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
                Api de la nasa
              </h2>

              <a href="https://github.com/tahayk3/reactNativeApiNasa">
                <PiGithubLogoDuotone style={{ fontSize: "50px" }} />
              </a>
            </div>
            <Technologies items={["React"]} />
            <span className="top"></span>
            <span className="right"></span>
            <span className="bottom"></span>
            <span className="left"></span>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default ProjectsPreview;
