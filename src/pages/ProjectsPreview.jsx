import Technologies from "../components/Technologies/Technologies";
import VideoComponent from "../components/VideoComponent/VideoComponent";
import { PiGithubLogoDuotone } from "react-icons/pi";
import "./ProjectsPreview.css";
import {Sparkles} from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
const ProjectsPreview = () => {
  return (
    
    <section id="projects">
      <div className="container">
      <h1>Proyectos</h1>
      <section className="card border">
      <Canvas className="canvas-container">
        <Sparkles
          size={2}
          scale={[30, 5, 10]}
          speed={0.7}
          color="rgb(88, 88, 228)"
        />
      </Canvas>
        <ul className="card-list">
          <li className="card-internal border shadow">
            <img src="./muebles502xela.png" alt="" />
            <div className="name-git" style={{ fontSize: "30px", paddingBottom:"25px" }}>
                <a href="https://mueblesnomadachapin.netlify.app">Muebles 2025</a>
                <a href="https://github.com/tahayk3/Muebles2024DRFReact" ><PiGithubLogoDuotone style={{ fontSize: "60px" }} /></a>
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
          <li className="card-internal border shadow">
            <img src="./familab.png" alt="" />
            <div className="name-git" style={{ fontSize: "30px", paddingBottom:"25px" }}>
                <a href="https://familabxela.netlify.app/">Familab</a>
                <a href="https://github.com/tahayk3/familab"> <PiGithubLogoDuotone style={{ fontSize: "60px" }} /></a>
            </div>
            <Technologies items={["Emailjs", "React"]} />
            <span className="top"></span>
            <span className="right"></span>
            <span className="bottom"></span>
            <span className="left"></span>
          </li>
          <li className="card-internal border shadow">
            <img src="./mueblesxela.png" alt="" />
          
            <div className="name-git" style={{ fontSize: "30px", paddingBottom:"25px" }}>
              <a href="https://tahayk3.github.io/CatalogoMuebles/">Catálogo muebles</a>
              <a href="https://github.com/tahayk3/CatalogoMuebles"><PiGithubLogoDuotone style={{ fontSize: "60px" }} /></a>
            </div>

            <Technologies items={["React", "Emailjs"]} />
            <span className="top"></span>
            <span className="right"></span>
            <span className="bottom"></span>
            <span className="left"></span>
          </li>
          <li className="card-internal border shadow">
            <img src="./portafolio.png" alt="" />

            <div className="name-git" style={{ fontSize: "30px", paddingBottom:"25px" }}>
              <a href="/">Portafolío</a>
              <a href="https://github.com/tahayk3/portafolio"><PiGithubLogoDuotone style={{ fontSize: "60px" }} /></a>
            </div>

            <Technologies items={["Supabase", "React"]} />
            <span className="top"></span>
            <span className="right"></span>
            <span className="bottom"></span>
            <span className="left"></span>
          </li>
          <li className="card-internal border shadow">
            <VideoComponent />
            <div className="name-git" style={{ fontSize: "30px", paddingBottom:"25px" }}>
              <a href="/">Api de la nasa</a>
              <a href="https://github.com/tahayk3/reactNativeApiNasa"><PiGithubLogoDuotone style={{ fontSize: "60px" }} /></a>
            </div>
            <Technologies items={["React"]} />
            <span className="top"></span>
            <span className="right"></span>
            <span className="bottom"></span>
            <span className="left"></span>
          </li>
          

          <li className="card-internal border shadow">
            <img src="./calculate.png" alt="" />
            <div className="name-git" style={{ fontSize: "30px", paddingBottom:"25px" }}>
              <a href="https://ubiquitous-vacherin-9d80c4.netlify.app/">Calculadora</a>
              <a href="https://github.com/tahayk3/back-modern-calculator"><PiGithubLogoDuotone style={{ fontSize: "60px" }} /></a>
            </div>
            <Technologies items={["React", "Gemini", "Go", "Netlify", "Railway", "Emailjs"]} />
            <span className="top"></span>
            <span className="right"></span>
            <span className="bottom"></span>
            <span className="left"></span>
          </li>
        </ul>
              <Canvas className="canvas-container">
        <Sparkles
          size={2}
          scale={[30, 5, 10]}
          speed={0.7}
          color="rgb(88, 88, 228)"
        />
      </Canvas>
      </section>
    </div>
    </section>
  );
};

export default ProjectsPreview;
