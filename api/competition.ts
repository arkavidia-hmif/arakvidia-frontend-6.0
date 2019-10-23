import { ApiError, ArkavidiaBaseApi } from '~/api/base';

export interface Competition {
    id: number;
    name: string;
    maxTeamMembers: string;
    minTeamMembers: string;
    isRegistrationOpen: boolean;
}

export interface Team {
    id?: number;
    competition?: Competition;
    name: string;
    teamLeaderEmail?: string;
    institution: string;
    isParticipating?: boolean;
    category?: string;
    teamMembers?: Array<Member>;
}

export interface Member {
    id?: number;
    fullName?: string;
    email: string;
    hasAccount?: boolean;
    isTeamLeader?: boolean;
}

export enum RegistrationStatus {
  NAME_EXISTS, ERROR
}

export class ArkavidiaCompetitionApi extends ArkavidiaBaseApi {
  async register(team: string, institution: string, email: string): Promise<void> {
    try {
      const data = { team, institution, email };
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
}
