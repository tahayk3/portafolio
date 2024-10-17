import { BrowserRouter as Router} from 'react-router-dom';
import Home from '../pages/Home';
import ProjectsPreview from '../pages/ProjectsPreview';
import Navbar from '../components/Navbar/Navbar';
import About from '../pages/About';

const AppRoutes = () => {
  return (
    <Router>
      <Navbar />
      <Home />
      <ProjectsPreview />
      <About/>
    </Router>
  );
};

export default AppRoutes;
