import * as React from 'react';
import './ContentTypesPage.css';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import authHeader from '../../services/auth.header';
import SideBar from '../../components/SideBar';
import Header from '../../components/Header';
import CollectionEntryHeading from '../../components/CollectionEntryHeading';
import iconSearch from '../../assets/icon-search/icon-search-dark.png';
import CollectionEntry from '../../components/CollectionEntry';
import iconPencil from './../../assets/icon-pencil/user-pencil-write-ui-education.png';
import Field from '../../components/Field';
import makeRequest from '../../utils/MakeRequest';
import {
  CREATE_CONTENT_TYPE,
  DELETE_FIELD_FROM_CONTENT_TYPE,
  GET_ALL_CONTENT_TYPES,
  GET_CONTENT_TYPE_BY_ID,
  POST_FIELD_NAME_FOR_CONTENT_TYPE,
} from '../../constants/ApiEndPoints';
import { setSyntheticTrailingComments } from 'typescript';
import Modal from '../../components/Modal';
interface ContentTypes {
  id: number;
  name: string;
}
const ContentTypesPage: React.FC = (): JSX.Element => {
  const [names, setNames] = React.useState([] as unknown as ContentTypes[]);
  const [fields, setFields] = React.useState([]);
  const { contentTypeId } = useParams();
  const { state } = useLocation();
  React.useEffect(() => {
    console.log(state, 'state');

    console.log(contentTypeId);

    makeRequest(GET_ALL_CONTENT_TYPES, {
      headers: authHeader(),
    }).then(data => {
      setNames(data);
    });
  }, []);

  React.useEffect(() => {
    if (contentTypeId) {
      makeRequest(GET_CONTENT_TYPE_BY_ID(Number(contentTypeId)), {
        headers: authHeader(),
      }).then(data => {
        setFields(data.fields);
      });
    }
  }, [contentTypeId]);
  const contentTypeEntries = names.map((nameObject: any) => {
    return <CollectionEntry key={nameObject.id} id={nameObject.id} fields={[nameObject.name]} actions={false} />;
  });
  const deleteFieldHandler = async (fieldName: string) => {
    await makeRequest(DELETE_FIELD_FROM_CONTENT_TYPE(Number(contentTypeId)), {
      headers: authHeader(),
      data: {
        fieldName: fieldName,
      },
    });
    const newFields = fields.filter(field => field[0] !== fieldName);
    setFields(newFields);
  };
  const fieldEntries = fields.map((field: any) => {
    return <Field key={Math.random()} name={field[0]} deleteFieldHandler={deleteFieldHandler} />;
  });
  const [newTypeName, setNewTypeName] = React.useState('');

  const addNewType = () => {
    if (newTypeName.length === 0) return;
    makeRequest(CREATE_CONTENT_TYPE, {
      headers: authHeader(),
      data: {
        name: newTypeName,
      },
    }).then(data => {
      const newNames = [...names, { name: data.name, id: data.id }];
      setNames(newNames);
      window.location.reload();
    });
  };
  const [newField, setNewField] = React.useState('');

  const addNewField = async () => {
    if (newField.length === 0) return;
    await makeRequest(POST_FIELD_NAME_FOR_CONTENT_TYPE(Number(contentTypeId)), {
      headers: authHeader(),
      data: {
        fieldName: newField,
      },
    });
    const newFields = [...fields, [newField, 'Text']];
    setFields(newFields as React.SetStateAction<never[]>);
  };

  const updateFieldName = (oldFieldName: string, newFieldName: string) => {
    const newFields = fields.map(field => {
      if (field[0] === oldFieldName) {
        field[0] = newFieldName as never;
      }
      return field;
    });
    setFields(newFields);
  };

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
            <input type="text" onChange={e => setNewTypeName(e.target.value)} />
            <div className="padding-entry">
              <div className="title-search">
                <p className="text-gray font-bold text-sm">{names.length} Types</p>
                <img src={iconSearch} alt="" className="text-gray-400" />
              </div>
              <div className="add-new-type">
                <button className="add-new-type-button w-full font-bold py-2 px-4 rounded " onClick={addNewType}>
                  + New Type
                </button>
              </div>
              <div className="collection-entry">{contentTypeEntries}</div>
            </div>
          </div>
          {contentTypeId ? (
            <div className="right">
              <input
                type="text"
                onChange={e => {
                  setNewField(e.target.value);
                }}
              />
              <div className="padding-entry">
                <div className="first-div">
                  <p className="text-gray font-bold text-3xl">{state.name}</p>

                  <img src={iconPencil} alt="" />
                </div>
                <div>{fieldEntries.length} fields</div>
                <div className="add-new-type">
                  <button
                    className="add-new-type-button w-full font-bold py-2 px-4 rounded "
                    type="submit"
                    onClick={addNewField}>
                    Add another field
                  </button>
                </div>
                <div className="collection-entry">{fieldEntries}</div>
              </div>
            </div>
          ) : (
            <div className="right"></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContentTypesPage;
