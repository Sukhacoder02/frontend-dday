import * as React from 'react';
import authHeader from '../../services/auth.header';
import { useNavigate } from 'react-router-dom';
import makeRequest from '../../utils/MakeRequest';
import './SideBar.css';
import iconSearch from '../../assets/icon-search/icon-search-dark.png';
import { GET_ALL_CONTENT_TYPES } from '../../constants/ApiEndPoints';

const mockCollections = ['Company_Profile', 'Idv_functionals', 'Payment_functionals', 'Trials', 'users', '+2 more'];

interface Collection {
  name: string;
  createdAt: string;
  fields: [string[]];
  id: number;
  updatedAt: string;
}

const SideBar: React.FC = (): JSX.Element => {
  const [collections, setCollections] = React.useState([] as unknown as Collection[]);
  const navigate = useNavigate();
  React.useEffect(() => {
    const header = authHeader();
    if (Object.keys(header).length === 0) {
      navigate('/login');
    }
    makeRequest(GET_ALL_CONTENT_TYPES, {
      headers: authHeader(),
    }).then(data => {
      setCollections(data);
    });
  }, []);
  const c = collections.map(collection => {
    return (
      <button
        key={collection.id}
        onClick={() => {
          navigate(`/entries/${collection.id}`, {
            state: {
              collectionName: collection.name,
            },
          });
        }}>
        <li className="text-gray-400 text-base">{collection.name}</li>
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
            <button onClick={() => navigate('/content-types')} className="text-white">
              CONTENT-TYPE BUILDER
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SideBar;
