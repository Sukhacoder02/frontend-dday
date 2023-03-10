import * as React from 'react';
import { useNavigate } from 'react-router-dom';
interface CollectionEntryHeadingProps {
  fields: string[];
  noActions: boolean;
}
const CollectionEntryHeading: React.FC<CollectionEntryHeadingProps> = (
  props: CollectionEntryHeadingProps
): JSX.Element => {
  const navigate = useNavigate();
  const divs = props.fields.map(field => {
    return <div key={Math.random()}>{field}</div>;
  });
  return (
    <div className="heading">
      <div className="heading-left">
        {divs}
        {!props.noActions ? (
          <div className="heading-actions">
            <div>
              <p>Actions</p>
            </div>
          </div>
        ) : (
          <div className="heading-actions"></div>
        )}
      </div>
    </div>
  );
};
export default CollectionEntryHeading;
