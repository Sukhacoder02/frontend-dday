import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import editIcon from '../../assets/icon-pencil/user-pencil-write-ui-education.png';
import binIcon from '../../assets/icon-trash/trash-delete-recycle-bin-bucket-waste@3x.png';
import './CollectionEntry.css';
interface CollectionEntryProps {
  fields: string[];
  id?: number;
  actions: boolean;
  onDelete?: any;
}

const CollectionEntry: React.FC<CollectionEntryProps> = (props: CollectionEntryProps): JSX.Element => {
  const navigate = useNavigate();
  const divs = props.fields.map(field => {
    return (
      <div key={Math.random()}>
        <p className="font-bold">{field}</p>
      </div>
    );
  });
  const handleDelete = () => {
    props.onDelete(props.id);
  };
  return (
    <div
      className="entry"
      onClick={() => {
        if (!props.actions) {
          navigate(`/content-types/${props.id}`, {
            state: {
              name: props.fields,
            },
          });
        }
      }}>
      <div className="entry-left heading-left">{divs}</div>
      {props.actions ? (
        <div className="entry-actions heading-actions">
          <div>
            <button>
              <img src={editIcon} alt="" />
            </button>
          </div>
          <div>
            <button onClick={handleDelete}>
              <img src={binIcon} alt="" />
            </button>
          </div>
        </div>
      ) : (
        <div className="entry-actions heading-actions">
          <div></div>
          <div></div>
        </div>
      )}
    </div>
  );
};
export default CollectionEntry;
