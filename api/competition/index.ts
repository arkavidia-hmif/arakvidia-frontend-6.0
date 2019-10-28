import {
  Competition,
  Team,
  GetCompetitionListStatus,
  RegisterTeamStatus,
  GetTeamListStatus,
  GetTeamDetailStatus,
  AddMemberStatus,
  RemoveMemberStatus,
  DeleteTeamStatus,
  ChangeTeamStatus,
  TaskResponse,
  SubmitTaskResponseStatus
} from './types';
import { ApiError, ArkavidiaBaseApi } from '~/api/base';

export class ArkavidiaCompetitionApi extends ArkavidiaBaseApi {
  async getCompetitionList() : Promise<Array<Competition>> {
    try {
      const response = await this.axios.get(`/competition/`);
      return response.data as Competition[];
    }
    catch (e) {
      throw new ApiError<GetCompetitionListStatus>(GetCompetitionListStatus.ERROR, e.toString());
    }
  }

  async getTeamDetail(teamId: number): Promise<Team> {
    try {
      const response = await this.axios.get(`/competition/teams/${teamId}/`);
      return response.data as Team;
    }
    catch (e) {
      throw new ApiError<GetTeamDetailStatus>(GetTeamDetailStatus.ERROR, e.toString());
    }
  }

  async registerTeam(competitionId: number, name: string, institution: string): Promise<void> {
    try {
      const data = { competitionId, name, institution };
      await this.axios.post(`/competition/register-team/`, data);
    }
    catch (e) {
      if (e.response) {
        if (e.response.data.code === 'competition_registration_closed') {
          throw new ApiError<RegisterTeamStatus>(RegisterTeamStatus.REGISTRATION_CLOSED, e.response.data.detail);
        }
        else if (e.response.data.code === 'competition_already_registered') {
          throw new ApiError<RegisterTeamStatus>(RegisterTeamStatus.ALREADY_REGISTERED, e.response.data.detail);
        }
        else if (e.response.data.code === 'create_team_fail') {
          throw new ApiError<RegisterTeamStatus>(RegisterTeamStatus.CREATE_TEAM_FAIL, e.response.data.detail);
        }
        else if (e.response.data.code === 'unknown_error') {
          throw new ApiError<RegisterTeamStatus>(RegisterTeamStatus.ERROR, e.response.data.detail);
        }
      }

      throw new ApiError<RegisterTeamStatus>(RegisterTeamStatus.ERROR, e.toString());
    }
  }

  async addMember(teamId: number, fullName: string, email: string): Promise<Team> {
    try {
      const data = { fullName, email };
      const response = await this.axios.post(`/competition/teams/` + teamId + `/members/`, data);
      const memberData = response.data;
      return memberData;
    }
    catch (e) {
      if (e.response) {
        if (e.response.data.code === 'competition_registration_closed') {
          throw new ApiError<AddMemberStatus>(AddMemberStatus.REGISTRATION_CLOSED, e.response.data.detail);
        }
        else if (e.response.data.code === 'team_not_participating') {
          throw new ApiError<AddMemberStatus>(AddMemberStatus.NOT_PARTICIPATING, e.response.data.detail);
        }
        else if (e.response.data.code === 'team_full') {
          throw new ApiError<AddMemberStatus>(AddMemberStatus.FULL, e.response.data.detail);
        }
        else if (e.response.data.code === 'unknown_error') {
          throw new ApiError<AddMemberStatus>(AddMemberStatus.EMAIL_EXISTS, e.response.data.detail);
        }
      }

      throw new ApiError<AddMemberStatus>(AddMemberStatus.ERROR, e.toString());
    }
  }

  async getTeamList(): Promise<Array<Team>> {
    try {
      const response = await this.axios.get(`/competition/teams/`);
      return response.data as Team[];
    }
    catch (e) {
      if (e.response) {
        if (e.response.data.code === 'unknown_error') {
          throw new ApiError<GetTeamListStatus>(GetTeamListStatus.ERROR, e.response.data.detail);
        }
      }

      throw new ApiError<GetTeamListStatus>(GetTeamListStatus.ERROR, e.toString());
    }
  }

  async removeMember(teamId: number, teamMemberId: number): Promise<void> {
    try {
      await this.axios.delete(`/competition/teams/${teamId}/members/${teamMemberId}/`);
    }
    catch (e) {
      if (e.response) {
        if (e.response.data.code === 'unknown_error') {
          throw new ApiError<RemoveMemberStatus>(RemoveMemberStatus.ERROR, e.response.data.detail);
        }
      }

      throw new ApiError<RemoveMemberStatus>(RemoveMemberStatus.ERROR, e.toString());
    }
  }

  async changeTeam(teamId: number, name: string, teamLeaderEmail: string, institution: string): Promise<void> {
    try {
      const data = { name, teamLeaderEmail, institution };
      await this.axios.put(`/competition/teams/${teamId}/`, data);
    }
    catch (e) {
      if (e.response) {
        if (e.response.data.code === 'unknown_error') {
          throw new ApiError<ChangeTeamStatus>(ChangeTeamStatus.ERROR, e.response.data.detail);
        }
      }

      throw new ApiError<ChangeTeamStatus>(ChangeTeamStatus.ERROR, e.toString());
    }
  }

  async deleteTeam(teamId: number): Promise<void> {
    try {
      await this.axios.delete(`/competition/teams/${teamId}/`);
    }
    catch (e) {
      if (e.response) {
        if (e.response.data.code === 'unknown_error') {
          throw new ApiError<DeleteTeamStatus>(DeleteTeamStatus.ERROR, e.response.data.detail);
        }
      }

      throw new ApiError<DeleteTeamStatus>(DeleteTeamStatus.ERROR, e.toString());
    }
  }
  async submitTaskResponse(teamId: number, taskId: number, response: string): Promise<TaskResponse> {
    try {
      const r = await this.axios.post(`/competition/teams/${teamId}/tasks/${taskId}/`, { response });
      return r.data as TaskResponse;
    }
    catch (e) {
      if (e.response) {
        if (e.response.data.code === 'team_not_participating') {
          throw new ApiError<SubmitTaskResponseStatus>(SubmitTaskResponseStatus.NOT_PARTICIPATING, e.response.data.detail);
        }
        else if (e.response.data.code === 'unknown_error') {
          throw new ApiError<SubmitTaskResponseStatus>(SubmitTaskResponseStatus.ERROR, e.response.data.detail);
        }
      }

      throw new ApiError<boolean>(false, e.toString());
    }
  }
}
