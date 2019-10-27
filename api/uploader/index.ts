import {
  FileStatus,
  File
} from './types';
import { ApiError, ArkavidiaBaseApi } from '~/api/base';

export class ArkavidiaUploaderApi extends ArkavidiaBaseApi {
  async uploadFile(file: Blob, description: string, onUploadProgress: { (progressEvent: ProgressEvent): void }|undefined = undefined): Promise<File> {
    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('description', description);

      const response = await this.axios.post(`/uploader/uploaded-file`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        onUploadProgress
      });

      return response.data as File;
    }
    catch (e) {
      throw new ApiError<FileStatus>(FileStatus.ERROR, e.toString());
    }
  }

  async retrieveFile(fileId: string): Promise<File> {
    try {
      const response = await this.axios.get(`/uploader/uploaded-file` + fileId);
      return response.data as File;
    }
    catch (e) {
      throw new ApiError<FileStatus>(FileStatus.ERROR, e.toString());
    }
  }
}
