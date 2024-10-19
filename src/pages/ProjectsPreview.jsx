import Technologies from "../components/Technologies/Technologies";
import VideoComponent from "../components/VideoComponent/VideoComponent";
import "./ProjectsPreview.css";
const ProjectsPreview = () => {
  return (
    <div className="container">
      <section className="card border">
        <h1>Proyectos</h1>
        <ul className="card-list">
          <li className="card border shadow">
            <img src="./muebles502xela.png" alt="" />
            <h2>
              <a href="https://muebles502xela.netlify.app/">Muebles502Xela</a>
            </h2>
            <Technologies items={["React", "Django", "Firebase", "Railway", "Postgresql", "Supabase", "Blender", "Axios", "Jsonwebtokens"]}/>
            <span className="top"></span>
            <span className="right"></span>
            <span className="bottom"></span>
            <span className="left"></span>
          </li>
          <li className="card border shadow">
            <img src="./familab.png" alt="" />
            <h2>
              <a href="https://familabxela.netlify.app/">Familab</a>
            </h2>
            <Technologies items={["Emailjs", "React"]}/>
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
            <Technologies items={["React", "Emailjs"]}/>
            <span className="top"></span>
            <span className="right"></span>
            <span className="bottom"></span>
            <span className="left"></span>
          </li>
          <li className="card border shadow">
            <img src="./portafolio.png" alt="" />
            <h2>
              <a href="https://tahayk3.github.io/CatalogoMuebles/">
                Este portafolío
              </a>
            </h2>
            <Technologies items={["Supabase", "React"]}/>
            <span className="top"></span>
            <span className="right"></span>
            <span className="bottom"></span>
            <span className="left"></span>
          </li>
          <li className="card border shadow">
            <VideoComponent/>
            <h2>
              <a href="https://tahayk3.github.io/CatalogoMuebles/">
                Api de la nasa
              </a>
            </h2>
            <Technologies items={["React"]}/>
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
