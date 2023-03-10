const BACKEND_URL = 'http://localhost:2222';

const GET_ALL_CONTENT_TYPES = {
  url: `${BACKEND_URL}/api/content-type`,
  method: 'get',
};
const GET_ALL_COLLECTION_ENTRIES_WITh_CONTENT_TYPE = (contentTypeId: number) => {
  return {
    url: `${BACKEND_URL}/api/collection-entries/${contentTypeId}`,
    method: 'get',
  };
};
const DELETE_COLLECTION_ENTRY = (collectionEntryId: number) => {
  return {
    url: `${BACKEND_URL}/api/collection-entries/${collectionEntryId}`,
    method: 'delete',
  };
};
const CREATE_CONTENT_TYPE = {
  url: `${BACKEND_URL}/api/content-type`,
  method: 'post',
};
const GET_CONTENT_TYPE_BY_ID = (contentTypeId: number) => {
  return {
    url: `${BACKEND_URL}/api/content-type/${contentTypeId}`,
    method: 'get',
  };
};
const POST_FIELD_NAME_FOR_CONTENT_TYPE = (contentTypeId: number) => {
  return {
    url: `${BACKEND_URL}/api/content-type/${contentTypeId}/fields/add`,
    method: 'post',
  };
};
const DELETE_FIELD_FROM_CONTENT_TYPE = (contentTypeId: number) => {
  return {
    url: `${BACKEND_URL}/api/content-type/${contentTypeId}/fields/delete`,
    method: 'delete',
  };
};
export {
  BACKEND_URL,
  CREATE_CONTENT_TYPE,
  GET_ALL_CONTENT_TYPES,
  GET_ALL_COLLECTION_ENTRIES_WITh_CONTENT_TYPE,
  DELETE_COLLECTION_ENTRY,
  GET_CONTENT_TYPE_BY_ID,
  POST_FIELD_NAME_FOR_CONTENT_TYPE,
  DELETE_FIELD_FROM_CONTENT_TYPE,
};
