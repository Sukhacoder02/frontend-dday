import * as React from 'react';
import authHeader from '../../services/auth.header';
import { useNavigate } from 'react-router-dom';
import SideBar from '../../components/SideBar';
import './HomePage.css';
import Header from '../../components/Header';
import cmsImage from '../../assets/login-image/undraw-upload-re-pasx.png';

const HomePage: React.FC = (): JSX.Element => {
  const navigate = useNavigate();
  // React.useEffect(() => {
  //   const header = authHeader();
  //   if (Object.keys(header).length === 0) {
  //     navigate('/login');
  //   }
  // }, []);

  return (
    <div className="homepage">
      <div className="sidebar">
        <SideBar />
      </div>
      <div className="sideContainer">
        <div className="topbar">
          <Header title="Content Types" />
        </div>
        <div className="belowbar">
          <img src={cmsImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
