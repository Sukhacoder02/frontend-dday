import * as React from 'react';
import editIcon from '../../assets/icon-pencil/user-pencil-write-ui-education.png';
import binIcon from '../../assets/icon-trash/trash-delete-recycle-bin-bucket-waste@3x.png';
import './CollectionEntry.css';
interface CollectionEntryProps {
  fields: string[];
  actions: boolean;
}

const CollectionEntry: React.FC<CollectionEntryProps> = (props: CollectionEntryProps): JSX.Element => {
  const divs = props.fields.map(field => {
    return (
      <div key={Math.random()}>
        <p className="font-bold">{field}</p>
      </div>
    );
  });
  return (
    <div className="entry">
      <div className="entry-left heading-left">{divs}</div>
      {props.actions ? (
        <div className="entry-actions heading-actions">
          <div>
            <img src={editIcon} alt="" />
          </div>
          <div>
            <img src={binIcon} alt="" />
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
