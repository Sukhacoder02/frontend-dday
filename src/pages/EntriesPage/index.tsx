import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import authHeader from '../../services/auth.header';
import SideBar from '../../components/SideBar';
import Header from '../../components/Header';
import './EntriesPage.css';
import editIcon from '../../assets/icon-pencil/user-pencil-write-ui-education.png';
import binIcon from '../../assets/icon-trash/trash-delete-recycle-bin-bucket-waste@3x.png';
import CollectionEntry from '../../components/CollectionEntry';
import CollectionEntryHeading from '../../components/CollectionEntryHeading';
import Modal from '../../components/Modal';

const EntriesPage: React.FC = (): JSX.Element => {
  const navigate = useNavigate();
  return (
    <div className="homepage">
      <div className="sidebar">
        <SideBar />
      </div>
      <div className="sideContainer">
        <div className="topbar">
          <Header title="Company_Profile" />
        </div>
        <div className="belowbar entry-page">
          <div className="padding-entry">
            <div className="top">
              <div className="count-and-add">
                <div className="count-entries">
                  <p className="text-3xl font-bold">13 Entries Found</p>
                </div>
                <div className="add-entry">
                  <button type="submit">
                    <p className="text-lg font-bold">Add a new Entry</p>
                  </button>
                </div>
              </div>
            </div>
            <div className="entries">
              <div className="padding-entry">
                <CollectionEntryHeading fields={['ID', 'Name', 'Website', 'Contact']} noActions={false} />
                <CollectionEntry fields={['Sukhman', '12094i1304', 'sukhman@gmail.com', 'dafad']} actions={true} />
                <CollectionEntry fields={['Sukhman', '12094i1304', 'sukhman@gmail.com', 'dafad']} actions={true} />
                <CollectionEntry fields={['Sukhman', '12094i1304', 'sukhman@gmail.com', 'dafad']} actions={true} />
                <CollectionEntry fields={['Sukhman', '12094i1304', 'sukhman@gmail.com', 'dafad']} actions={true} />
                <CollectionEntry fields={['Sukhman', '12094i1304', 'sukhman@gmail.com', 'dafad']} actions={true} />
                <CollectionEntry fields={['Sukhman', '12094i1304', 'sukhman@gmail.com', 'dafad']} actions={true} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EntriesPage;
