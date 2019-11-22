import {
  PreEvent, Registrant, SubmitTaskResponseStatus,
  TaskResponse
} from './types';
import { ApiError, ArkavidiaBaseApi } from '~/api/base';
import {
  DeleteStatus,
  GetPreEventListStatus,
  GetRegistrantDetailStatus,
  GetRegistrantListStatus,
  RegisterStatus
} from '~/api/preevent/types';

export class ArkavidiaPreEventApi extends ArkavidiaBaseApi {
  async getPreEventList() : Promise<Array<PreEvent>> {
    try {
      const response = await this.axios.get(`/preevent/`);
      return response.data as PreEvent[];
    }
    catch (e) {
      throw new ApiError<GetPreEventListStatus>(GetPreEventListStatus.ERROR, e.toString());
    }
  }

  async getRegistrantList(): Promise<Array<Registrant>> {
    try {
      const response = await this.axios.get(`/preevent/registrants/`);
      return response.data as Registrant[];
    }
    catch (e) {
      if (e.response) {
        if (e.response.data.code === 'unknown_error') {
          throw new ApiError<GetRegistrantListStatus>(GetRegistrantListStatus.ERROR, e.response.data.detail);
        }
      }

      throw new ApiError<GetRegistrantListStatus>(GetRegistrantListStatus.ERROR, e.toString());
    }
  }

  async getRegistrantDetail(registrantId: number): Promise<Registrant> {
    try {
      const response = await this.axios.get(`/preevent/registrants/${registrantId}/`);
      return response.data as Registrant;
    }

    catch (e) {
      throw new ApiError<GetRegistrantDetailStatus>(GetRegistrantDetailStatus.ERROR, e.toString());
    }
  }

  async register(preeventId: number): Promise<void> {
    try {
      const data = { preeventId };
      await this.axios.post(`/preevent/register/`, data);
    }
    catch (e) {
      if (e.response) {
        if (e.response.data.code === 'preevent_registration_closed') {
          throw new ApiError<RegisterStatus>(RegisterStatus.REGISTRATION_CLOSED, JSON.stringify(e.response.data.detail));
        }
        else if (e.response.data.code === 'preevent_already_registered') {
          throw new ApiError<RegisterStatus>(RegisterStatus.ALREADY_REGISTERED, JSON.stringify(e.response.data.detail));
        }
        else if (e.response.data.code === 'unknown_error') {
          throw new ApiError<RegisterStatus>(RegisterStatus.ERROR, JSON.stringify(e.response.data.detail));
        }
      }

      throw new ApiError<RegisterStatus>(RegisterStatus.ERROR, e.toString());
    }
  }

  async deleteRegistration(registrantId: number): Promise<void> {
    try {
      await this.axios.delete(`/preevent/registrants/${registrantId}/`);
    }
    catch (e) {
      if (e.response) {
        if (e.response.data.code === 'unknown_error') {
          throw new ApiError<DeleteStatus>(DeleteStatus.ERROR, e.response.data.detail);
        }
      }

      throw new ApiError<DeleteStatus>(DeleteStatus.ERROR, e.toString());
    }
  }

  async submitTaskResponse(registrantId: number, taskId: number, response: string): Promise<TaskResponse> {
    try {
      const r = await this.axios.post(`/preevent/registrants/${registrantId}/tasks/${taskId}/`, { response });
      return r.data as TaskResponse;
    }
    catch (e) {
      throw new ApiError<SubmitTaskResponseStatus>(SubmitTaskResponseStatus.ERROR, e.toString());
    }
  }
}
