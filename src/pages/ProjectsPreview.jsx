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
            <span className="top"></span>
            <span className="right"></span>
            <span className="bottom"></span>
            <span className="left"></span>
          </li>
          <li className="card border shadow">
            <img src="./mueblesxela.png" alt="" />
            <h2>
              <a href="https://tahayk3.github.io/CatalogoMuebles/">
                Catalogo muebles
              </a>
            </h2>
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
