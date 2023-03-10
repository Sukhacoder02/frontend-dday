import * as React from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import authHeader from '../../services/auth.header';
import SideBar from '../../components/SideBar';
import Header from '../../components/Header';
import './EntriesPage.css';
import editIcon from '../../assets/icon-pencil/user-pencil-write-ui-education.png';
import binIcon from '../../assets/icon-trash/trash-delete-recycle-bin-bucket-waste@3x.png';
import CollectionEntry from '../../components/CollectionEntry';
import CollectionEntryHeading from '../../components/CollectionEntryHeading';
import Modal from '../../components/Modal';
import makeRequest from '../../utils/MakeRequest';
import { DELETE_COLLECTION_ENTRY, GET_ALL_COLLECTION_ENTRIES_WITh_CONTENT_TYPE } from '../../constants/ApiEndPoints';
import NumberOfEntries from '../../components/NumberOfEntries';
import ModalRight from '../../components/ModalRight';

interface CollectionEntry {
  contentTypeId: number;
  createdAt: string;
  id: number;
  updatedAt: string;
  fields: [string[]];
  email: string;
}

const EntriesPage: React.FC = (): JSX.Element => {
  const [entries, setEntries] = React.useState([] as unknown as CollectionEntry[]);
  const [fields, setFields] = React.useState([] as unknown as string[]);
  const { contentTypeId } = useParams();
  const { state } = useLocation();

  const navigate = useNavigate();
  React.useEffect(() => {
    const header = authHeader();
    if (Object.keys(header).length === 0) {
      navigate('/login');
    }
    makeRequest(GET_ALL_COLLECTION_ENTRIES_WITh_CONTENT_TYPE(Number(contentTypeId)), {
      headers: authHeader(),
    }).then(data => {
      console.log(data, 'data got from make request in entries page');
      const f = data[0].fields.map((field: string[]) => {
        return field[0];
      });
      setFields(f);
      setEntries(data);
    });
  }, [contentTypeId]);

  const onDelete = async (id: number) => {
    await makeRequest(DELETE_COLLECTION_ENTRY(id), {
      headers: authHeader(),
    });
    const newEntries = entries.filter(entry => entry.id !== id);
    setEntries(newEntries);
  };
  const dataEntries = entries.map(entry => {
    const f = entry.fields.map((field: string[]) => {
      return field[1];
    });
    return <CollectionEntry key={entry.id} id={entry.id} fields={f} actions={true} onDelete={onDelete} />;
  });
  const [modalOpen, setModalOpen] = React.useState<boolean>(false);

  const handleModalClose = () => {
    setModalOpen(false);
  };
  const handleModalOpen = () => {
    setModalOpen(true);
  };
  return (
    <div className="homepage">
      <div className="sidebar">
        <SideBar />
      </div>
      <div className="sideContainer">
        <div className="topbar">
          <Header title={state.collectionName} />
        </div>
        <div className="belowbar entry-page">
          <div className="padding-entry">
            <div className="top">
              <div className="count-and-add">
                <div className="count-entries">
                  <NumberOfEntries length={entries.length === 1 ? 0 : entries.length} />
                </div>
                <div className="add-entry">
                  <button onClick={handleModalOpen}>
                    <p className="text-lg font-bold">Add a new Entry</p>
                  </button>
                  <ModalRight isOpen={modalOpen} onClose={handleModalClose}>
                    <h2>This is the modal content</h2>
                    <p>Heres some text inside the modal.</p>
                  </ModalRight>
                </div>
              </div>
            </div>
            <div className="entries">
              <div className="padding-entry">
                {fields.length > 0 && <CollectionEntryHeading fields={fields} noActions={false} />}
                {dataEntries}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EntriesPage;
