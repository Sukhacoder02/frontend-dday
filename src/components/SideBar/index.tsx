import * as React from 'react';
import authHeader from '../../services/auth.header';
import { useNavigate } from 'react-router-dom';
import './SideBar.css';
import iconSearch from '../../assets/icon-search/icon-search-dark.png';

const mockCollections = ['Company_Profile', 'Idv_functionals', 'Payment_functionals', 'Trials', 'users', '+2 more'];

const SideBar: React.FC = (): JSX.Element => {
  const [collections, setCollections] = React.useState([]);
  const navigate = useNavigate();
  // React.useEffect(() => {
  //   const header = authHeader();
  //   if (Object.keys(header).length === 0) {
  //     navigate('/login');
  //   }
  // }, []);
  const c = mockCollections.map(collection => {
    return (
      <button key={1}>
        <li key={1} className="text-gray-400 text-base">
          {collection}
        </li>
      </button>
    );
  });

  return (
    <div className="sidebar-container">
      <div className="title">
        <div className="padding">
          <p className="text-3xl font-black text-white">CMS+</p>
        </div>
      </div>
      <div className="bottom-black">
        <div className="collections">
          <div className="padding">
            <div className="title-search">
              <p className="text-white font-bold text-sm">COLLECTION TYPES</p>
              <img src={iconSearch} alt="" className="text-gray-400" />
            </div>
            <div className="list-collections">{c}</div>
          </div>
        </div>
        <div className="builder">
          <div className="padding">
            <button className="text-white">CONTENT-TYPE BUILDER</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SideBar;
