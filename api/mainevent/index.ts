import {
  MainEvent, Registrant, SubmitTaskResponseStatus,
  TaskResponse
} from './types';
import { ApiError, ArkavidiaBaseApi } from '~/api/base';
import {
  DeleteStatus,
  GetEventListStatus,
  GetRegistrantDetailStatus,
  GetRegistrantListStatus,
  RegisterStatus
} from '~/api/mainevent/types';

export class ArkavidiaMainEventApi extends ArkavidiaBaseApi {
  async getMainEventList() : Promise<Array<MainEvent>> {
    try {
      const response = await this.axios.get(`/mainevent/`);
      return response.data as MainEvent[];
    }
    catch (e) {
      throw new ApiError<GetEventListStatus>(GetEventListStatus.ERROR, e.toString());
    }
  }

  async getMainEventDetails(maineventId) : Promise<MainEvent> {
    try {
      const response = await this.axios.get(`/mainevent/${maineventId}`);
      if (Array.isArray(response.data)) {
        return response.data[0] as MainEvent;
      }
      else {
        return response.data as MainEvent;
      }
    }
    catch (e) {
      throw new ApiError<GetEventListStatus>(GetEventListStatus.ERROR, e.toString());
    }
  }

  async getRegistrantList(): Promise<Array<Registrant>> {
    try {
      const response = await this.axios.get(`/mainevent/registrants/`);
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
      const response = await this.axios.get(`/mainevent/registrants/${registrantId}/`);
      return response.data as Registrant;
    }

    catch (e) {
      throw new ApiError<GetRegistrantDetailStatus>(GetRegistrantDetailStatus.ERROR, e.toString());
    }
  }

  async register(maineventId: number): Promise<void> {
    try {
      const data = { maineventId };
      await this.axios.post(`/mainevent/register/`, data);
    }
    catch (e) {
      if (e.response) {
        if (e.response.data.code === 'mainevent_registration_closed') {
          throw new ApiError<RegisterStatus>(RegisterStatus.REGISTRATION_CLOSED, JSON.stringify(e.response.data.detail));
        }
        else if (e.response.data.code === 'mainevent_already_registered') {
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
      await this.axios.delete(`/mainevent/registrants/${registrantId}/`);
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
      const r = await this.axios.post(`/mainevent/registrants/${registrantId}/tasks/${taskId}/`, { response });
      return r.data as TaskResponse;
    }
    catch (e) {
      throw new ApiError<SubmitTaskResponseStatus>(SubmitTaskResponseStatus.ERROR, e.toString());
    }
  }
}
