import { BrowserRouter as Router} from 'react-router-dom';
import Home from '../pages/Home';
import ProjectsPreview from '../pages/ProjectsPreview';
import Navbar from '../components/Navbar/Navbar';
import Contact from '../pages/Contact';
import { Toaster } from 'react-hot-toast';

const AppRoutes = () => {
  return (
    <Router>
      <Navbar />
      <Home />
      <ProjectsPreview />
      <Toaster />
      <Contact/>
    </Router>
  );
};

export default AppRoutes;
