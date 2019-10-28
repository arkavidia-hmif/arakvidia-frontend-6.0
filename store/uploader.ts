import arkavidiaApi from '~/api/api';
import { File } from '~/api/uploader/types';

export interface UploaderState {
  files: {
    [id: string]: File;
  };
}

export const namespaced = true;

export const state = () => ({
  files: {}
});

export const getters = {
  getFilesMap(state: UploaderState): { [id: string]: File } {
    return state.files;
  }
};

export const mutations = {
  setFile(state: UploaderState, file) {
    state.files[file.id] = file;
  }
};

export const actions = {
  async uploadFile({ commit }, { file, description, onUploadProgress }) {
    const fileResponse = await arkavidiaApi.uploader.uploadFile(file, description, onUploadProgress);
    commit('setFile', fileResponse);
    return fileResponse;
  },
  async fetchFile({ commit }, { fileId }) {
    const file = await arkavidiaApi.uploader.getFile(fileId);
    commit('setFile', file);
    return file;
  }
};
