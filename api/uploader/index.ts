import { ApiError, ArkavidiaBaseApi } from '~/api/base';
import {
  FileStatus,
} from './types';

export class ArkavidiaUploaderApi extends ArkavidiaBaseApi {

  async uploadFile(file: FormData, description: string): Promise<void> {
    try {
      const data = { file, description };
      await this.axios.post(`/uploader/uploaded-file`, data, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
    }
    catch (e) {
      throw new ApiError<FileStatus>(FileStatus.ERROR, e.toString());
    }
  }

  async retrieveFile(fileId: string): Promise<void> {
    try {
      await this.axios.get(`/uploader/uploaded-file` + fileId);
    }
    catch (e) {
      throw new ApiError<FileStatus>(FileStatus.ERROR, e.toString());
    }
  }
}
