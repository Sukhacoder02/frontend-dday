import * as React from 'react';
import iconPencil from './../../assets/icon-pencil/user-pencil-write-ui-education.png';
import iconTrash from './../../assets/icon-trash/trash-delete-recycle-bin-bucket-waste@2x.png';
import './Field.css';
interface FieldProps {
  name: string;
  deleteFieldHandler: (fieldName: string) => Promise<void>;
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
        <button
          onClick={() => {
            console.log('Pencil clicked');
          }}>
          <img src={iconPencil} alt="" />
        </button>
        <button
          onClick={() => {
            props.deleteFieldHandler(props.name);
          }}>
          <img src={iconTrash} alt="" />
        </button>
      </div>
    </div>
  );
};
export default Field;
