import arkavidiaApi from '~/api/api';

export const namespaced = true;

export const actions = {
  // eslint-disable-next-line no-empty-pattern
  uploadFile({ }, { file, description, onUploadProgress }) {
    return arkavidiaApi.uploader.uploadFile(file, description, onUploadProgress);
  }
};
