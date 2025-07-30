import { BrowserRouter as Router} from 'react-router-dom';
import Home from '../pages/Home';
import ProjectsPreview from '../pages/ProjectsPreview';
import Navbar from '../components/Navbar/Navbar';
import Contact from '../pages/Contact';
import Certificates from '../pages/Certificates';
import { Toaster } from 'react-hot-toast';
import Footer from '../pages/Footer';

import { ConfigProvider } from 'antd';

const AppRoutes = () => {
  return (
      <Router>
        <Navbar />
        <Home />
        <ProjectsPreview />
        <Toaster />
        <Certificates />
        <Contact />
        <Footer />
      </Router>
  );
};

export default AppRoutes;