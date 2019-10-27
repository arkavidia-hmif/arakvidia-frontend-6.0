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
  ChangeTeamStatus
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
        if (e.response.data.code === 'unknown_error') {
          throw new ApiError<RegisterTeamStatus>(RegisterTeamStatus.ERROR, e.response.data.detail);
        }
      }

      throw new ApiError<RegisterTeamStatus>(RegisterTeamStatus.ERROR, e.toString());
    }
  }

  async addMember(teamId: number, name: string, email: string): Promise<void> {
    try {
      const data = { name, email };
      await this.axios.post(`/competition/teams/` + teamId + `/members`, data);
    }
    catch (e) {
      if (e.response) {
        if (e.response.data.code === 'unknown_error') {
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

  async changeTeam(team_id: number, name: string, teamLeaderEmail: string, institution: string): Promise<void> {
    try {
      const data = { name, teamLeaderEmail, institution };
      await this.axios.put(`/competition/teams/${team_id}/`, data);
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

  async deleteTeam(team_id: number): Promise<void> {
    try {
      await this.axios.delete(`/competition/teams/${team_id}/`);
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
}
