import { ApiError, ArkavidiaBaseApi } from '~/api/base';

export interface CompetitionList {
  competitions?: Array<Competition>;
}

export interface Competition {
  id?: number;
  name: string;
  maxTeamMembers?: number;
  minTeamMembers?: number;
  isRegistrationOpen?: boolean;
  slug: string;
  viewIcon: string;
}

export interface TeamList {
  teams?: Array<Team>;
}

export interface Team {
  id: number;
  competition?: Competition;
  name: string;
  teamLeaderEmail?: string;
  institution: string;
  isParticipating?: boolean;
  category?: string;
  teamMembers?: Array<Member>;
  activeStageId?: number;
  stages?: Array<Stage>;
  taskResponses?: Array<TaskResponse>;
  createdAt?: string;
}

export interface Member {
  id?: number;
  fullName?: string;
  email: string;
  hasAccount?: boolean;
  isTeamLeader?: boolean;
}

export interface Stage {
  id?: number;
  name?: string;
  order: number;
  tasks: Array<Task>;
}

export interface Task {
  id?: number;
  name?: string;
  category?: string;
  widget?: string;
  widgetParameters?: string;
}

export interface TaskResponse {
  taskId?: number;
  response?: string;
  status: string;
  lastSubmittedAt: string;
}

export interface File {
  id?: string;
  originalFilename?: string;
  fileSize: number;
  description?: string;
  uploadedBy?: string;
  uploadedAt: string;
  fileLink: string;
}

export enum RegistrationStatus {
  NAME_EXISTS, ERROR
}

export enum CreateMemberStatus {
  EMAIL_EXISTS, ERROR
}

export enum GetListTeamStatus {
  ERROR
}

export enum DeleteMemberStatus {
  ERROR
}

export enum FileStatus {
  ERROR
}

export enum CompetitionListStatus {
  ERROR
}

export enum TeamDetailStatus {
  ERROR
}

export class ArkavidiaCompetitionApi extends ArkavidiaBaseApi {
  async getCompetitionList() : Promise<Array<Competition>> {
    try {
      const response = await this.axios.get(`/competition/`);
      return response.data;
    }
    catch (e) {
      throw new ApiError<CompetitionListStatus>(CompetitionListStatus.ERROR, e.toString());
    }
  }

  async getTeamDetail(teamId: number): Promise<Team> {
    try {
      const response = await this.axios.get(`/competition/teams/${teamId}`);
      return response.data;
    }
    catch (e) {
      throw new ApiError<TeamDetailStatus>(TeamDetailStatus.ERROR, e.toString());
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
          throw new ApiError<RegistrationStatus>(RegistrationStatus.NAME_EXISTS, e.response.data.detail);
        }
      }

      throw new ApiError<RegistrationStatus>(RegistrationStatus.ERROR, e.toString());
    }
  }

  async registerMember(teamId: number, name: string, email: string): Promise<void> {
    try {
      const data = { name, email };
      await this.axios.post(`/competition/teams/` + teamId + `/members`, data);
    }
    catch (e) {
      if (e.response) {
        if (e.response.data.code === 'unknown_error') {
          throw new ApiError<CreateMemberStatus>(CreateMemberStatus.EMAIL_EXISTS, e.response.data.detail);
        }
      }

      throw new ApiError<CreateMemberStatus>(CreateMemberStatus.ERROR, e.toString());
    }
  }

  async getTeamList(): Promise<Array<Team>> {
    try {
      return await this.axios.get(`/competition/teams/`);
    }
    catch (e) {
      if (e.response) {
        if (e.response.data.code === 'unknown_error') {
          throw new ApiError<GetListTeamStatus>(GetListTeamStatus.ERROR, e.response.data.detail);
        }
      }

      throw new ApiError<GetListTeamStatus>(GetListTeamStatus.ERROR, e.toString());
    }
  }

  async DeleteMember(teamId: number, team_member_id: number): Promise<void> {
    try {
      await this.axios.delete(`/competition/teams/` + teamId + `/members` + team_member_id);
    }
    catch (e) {
      if (e.response) {
        if (e.response.data.code === 'unknown_error') {
          throw new ApiError<DeleteMemberStatus>(DeleteMemberStatus.ERROR, e.response.data.detail);
        }
      }

      throw new ApiError<DeleteMemberStatus>(DeleteMemberStatus.ERROR, e.toString());
    }
  }
  
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

export const competitionMap: Record<string, number> = {
  'competitive-programming': 1,
  'capture-the-flag': 2,
  'datavidia': 3,
  'arkalogica': 4,
  'hackavidia': 5
} as const;
