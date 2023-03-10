import * as React from 'react';
import iconPencil from './../../assets/icon-pencil/user-pencil-write-ui-education.png';
import iconTrash from './../../assets/icon-trash/trash-delete-recycle-bin-bucket-waste@2x.png';
import './Field.css';
interface FieldProps {
  name: string;
}
const Field: React.FC<FieldProps> = (props: FieldProps) => {
  return (
    <div className="field w-full flex flex-row">
      <div className="photo">
        <p className="text-white">Ab</p>
      </div>
      <div className="field-title">
        <p>{props.name}</p>
      </div>
      <div className="field-type">
        <p>Text</p>
      </div>
      <div className="field-actions flex flex-row">
        <img src={iconPencil} alt="" />
        <img src={iconTrash} alt="" />
      </div>
    </div>
  );
};
export default Field;
