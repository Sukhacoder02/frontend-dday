import * as React from 'react';
import './ContentTypesPage.css';
import { useNavigate } from 'react-router-dom';
import authHeader from '../../services/auth.header';
import SideBar from '../../components/SideBar';
import Header from '../../components/Header';
import CollectionEntryHeading from '../../components/CollectionEntryHeading';
import iconSearch from '../../assets/icon-search/icon-search-dark.png';
import CollectionEntry from '../../components/CollectionEntry';
import iconPencil from './../../assets/icon-pencil/user-pencil-write-ui-education.png';
import Field from '../../components/Field';

const ContentTypesPage: React.FC = (): JSX.Element => {
  return (
    <div className="homepage">
      <div className="sidebar">
        <SideBar />
      </div>
      <div className="sideContainer">
        <div className="topbar">
          <Header title="Content Types" />
        </div>
        <div className="belowbar ">
          <div className="left">
            <div className="padding-entry">
              <div className="title-search">
                <p className="text-gray font-bold text-sm">7 Types</p>
                <img src={iconSearch} alt="" className="text-gray-400" />
              </div>
              <div className="add-new-type">
                <button className="add-new-type-button w-full font-bold py-2 px-4 rounded " type="submit">
                  + New Type
                </button>
              </div>
              <div className="collection-entry">
                <CollectionEntry fields={['Company_Profile']} actions={false} />
                <CollectionEntry fields={['Company_Profile']} actions={false} />
                <CollectionEntry fields={['Company_Profile']} actions={false} />
                <CollectionEntry fields={['Company_Profile']} actions={false} />
                <CollectionEntry fields={['Company_Profile']} actions={false} />
                <CollectionEntry fields={['Company_Profile']} actions={false} />
              </div>
            </div>
          </div>
          <div className="right">
            <div className="padding-entry">
              <div className="first-div">
                <p className="text-gray font-bold text-3xl">Company_Profile</p>
                <img src={iconPencil} alt="" />
              </div>
              <div>13 Fields</div>
              <div className="add-new-type">
                <button className="add-new-type-button w-full font-bold py-2 px-4 rounded " type="submit">
                  Add another field
                </button>
              </div>
              <div className="collection-entry">
                <Field name="Name" />
                <Field name="Revenue" />
                <Field name="Contact Email" />
                <Field name="Name" />
                <Field name="Name" />
                <Field name="Name" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentTypesPage;
