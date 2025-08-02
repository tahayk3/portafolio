import { BrowserRouter as Router} from 'react-router-dom';
import Home from '../pages/Home';
import ProjectsPreview from '../pages/ProjectsPreview';
import Navbar from '../components/Navbar/Navbar';
import Contact from '../pages/Contact';
import Certificates from '../pages/Certificates';
import DuolingoCard from '../pages/DuolingoCard';
import GithubActiveDays from '../pages/GithubActiveDays';
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
        <DuolingoCard />
        <Certificates />
        <GithubActiveDays username="tahayk3"  />
        <Contact />
        <Footer />
      </Router>
  );
};

export default AppRoutes;