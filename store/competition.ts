import api from '~/api';

export interface Competition {
  id?: number;
  name: string;
  maxTeamMembers?: number;
  minTeamMembers?: number;
  isRegistrationOpen?: boolean;

  // from getSpecificTeam
  slug: string;
  viewIcon: string;
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

  // from getSpecificTeam
  activeStageId: number;
  stages: Array<Stage>;
  taskResponses: Array<TaskResponse>;
  createdAt: string;
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

export interface CompetitionState {
  competitions: Array<Competition>;
}

export interface TeamsState {
  teams: Array<Team>;
}

export interface TeamState {
  team: Team;
}

export interface FileState {
  file: File;
}

export default {
  namespaced: true,
  state: () => ({
    competitions: [],
    teams: [],
    team: undefined,
    file: undefined
  }),
  getters: {
    getCompetitions(state: CompetitionState) {
      return state.competitions;
    },
    getTeams(state: TeamsState) {
      return state.teams;
    },
    getTeam(state: TeamState) {
      return state.team;
    },
    getFile(state: FileState) {
      return state.file;
    },
  },
  mutations: {
    setCompetition(state: CompetitionState, competitions: Array<Competition>) {
      state.competitions = competitions;
    },
    setTeams(state: TeamsState, teams: Array<Team>) {
      state.teams = teams;
    },
    setTeam(state: TeamState, team: Team) {
      state.team = team;
    },
    setFile(state: FileState, file: File) {
      state.file = file;
    },
  },
  actions: {
    async getCompetitionList({ commit, rootState }) {
      const bearerToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0eXBlIjoiYWNjZXNzIiwiZXhwIjoxNTcxOTkxNDI3LCJqdGkiOiJkOWZhNmZkZDdmNTA0MzgxYjQ0N2FmMDFlODFkMTdmOCIsImVtYWlsIjoidGVzdEBhcmthdmlkaWEuaWQiLCJuYW1lIjoiVGVzdCJ9.BzRfSSRmuSdgTSHgi54Av0rfAzo3tQMcyNohC-QrZws';
      const response = await api.get(`/competition/`, {
        headers: {
          Authorization: `Bearer ${bearerToken}`,
        }
      });
      commit('setCompetition', response.data);
    },
    async getTeamList({ commit, rootState }) {
      const bearerToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0eXBlIjoiYWNjZXNzIiwiZXhwIjoxNTcxOTkxNDI3LCJqdGkiOiJkOWZhNmZkZDdmNTA0MzgxYjQ0N2FmMDFlODFkMTdmOCIsImVtYWlsIjoidGVzdEBhcmthdmlkaWEuaWQiLCJuYW1lIjoiVGVzdCJ9.BzRfSSRmuSdgTSHgi54Av0rfAzo3tQMcyNohC-QrZws';
      const response = await api.get(`/competition/teams/`, {
        headers: {
          Authorization: `Bearer ${bearerToken}`,
        }
      });
      commit('setTeams', response.data);
    },
    async registerTeam({ commit, rootState }, data) {
      const bearerToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0eXBlIjoiYWNjZXNzIiwiZXhwIjoxNTcxOTkxNDI3LCJqdGkiOiJkOWZhNmZkZDdmNTA0MzgxYjQ0N2FmMDFlODFkMTdmOCIsImVtYWlsIjoidGVzdEBhcmthdmlkaWEuaWQiLCJuYW1lIjoiVGVzdCJ9.BzRfSSRmuSdgTSHgi54Av0rfAzo3tQMcyNohC-QrZws';
      const response = await api.post(`/competition/register-team/`, data, {
        headers: {
          Authorization: `Bearer ${bearerToken}`
        }
      });
    },
    async getSpecificTeam({ commit, rootState }, team_id) {
      const bearerToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0eXBlIjoiYWNjZXNzIiwiZXhwIjoxNTcxOTkxNDI3LCJqdGkiOiJkOWZhNmZkZDdmNTA0MzgxYjQ0N2FmMDFlODFkMTdmOCIsImVtYWlsIjoidGVzdEBhcmthdmlkaWEuaWQiLCJuYW1lIjoiVGVzdCJ9.BzRfSSRmuSdgTSHgi54Av0rfAzo3tQMcyNohC-QrZws';
      const response = await api.get(`/competition/teams/` + team_id + `/`, {
        headers: {
          Authorization: `Bearer ${bearerToken}`,
        }
      });
      commit('setTeam', response.data);
    },
    async createMember({ commit, rootState }, payload) {
      const bearerToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0eXBlIjoiYWNjZXNzIiwiZXhwIjoxNTcxOTkxNDI3LCJqdGkiOiJkOWZhNmZkZDdmNTA0MzgxYjQ0N2FmMDFlODFkMTdmOCIsImVtYWlsIjoidGVzdEBhcmthdmlkaWEuaWQiLCJuYW1lIjoiVGVzdCJ9.BzRfSSRmuSdgTSHgi54Av0rfAzo3tQMcyNohC-QrZws';
      const response = await api.post(`/competition/teams/` + payload.teamId + `/members/`, payload.data, {
        headers: {
          Authorization: `Bearer ${bearerToken}`
        }
      });
    },
    async deleteMember({ commit, rootState }, payload) {
      const bearerToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0eXBlIjoiYWNjZXNzIiwiZXhwIjoxNTcxOTkxNDI3LCJqdGkiOiJkOWZhNmZkZDdmNTA0MzgxYjQ0N2FmMDFlODFkMTdmOCIsImVtYWlsIjoidGVzdEBhcmthdmlkaWEuaWQiLCJuYW1lIjoiVGVzdCJ9.BzRfSSRmuSdgTSHgi54Av0rfAzo3tQMcyNohC-QrZws';
      const response = await api.delete(`/competition/teams/` + payload.teamId + `/members/` + payload.team_member_id + `/`, {
        headers: {
          Authorization: `Bearer ${bearerToken}`
        }
      });
    },
    async uploadFile({ commit, rootState }, payload) {
      const bearerToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0eXBlIjoiYWNjZXNzIiwiZXhwIjoxNTcxOTkxNDI3LCJqdGkiOiJkOWZhNmZkZDdmNTA0MzgxYjQ0N2FmMDFlODFkMTdmOCIsImVtYWlsIjoidGVzdEBhcmthdmlkaWEuaWQiLCJuYW1lIjoiVGVzdCJ9.BzRfSSRmuSdgTSHgi54Av0rfAzo3tQMcyNohC-QrZws';
      const response = await api.post(`/uploader/uploaded-file`, payload, {
        headers: {
          Authorization: `Bearer ${bearerToken}`,
          'Content-Type': 'multipart/form-data'
        }
      });
    },
    async retrieveFile({ commit, rootState }, file_id) {
      const bearerToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0eXBlIjoiYWNjZXNzIiwiZXhwIjoxNTcxOTkxNDI3LCJqdGkiOiJkOWZhNmZkZDdmNTA0MzgxYjQ0N2FmMDFlODFkMTdmOCIsImVtYWlsIjoidGVzdEBhcmthdmlkaWEuaWQiLCJuYW1lIjoiVGVzdCJ9.BzRfSSRmuSdgTSHgi54Av0rfAzo3tQMcyNohC-QrZws';
      const response = await api.get(`/uploader/uploaded-file` + file_id, {
        headers: {
          Authorization: `Bearer ${bearerToken}`
        }
      });
      commit('setFile', response.data);
    },
    async taskCreate({ commit, rootState }, ids) {
      const bearerToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0eXBlIjoiYWNjZXNzIiwiZXhwIjoxNTcxOTkxNDI3LCJqdGkiOiJkOWZhNmZkZDdmNTA0MzgxYjQ0N2FmMDFlODFkMTdmOCIsImVtYWlsIjoidGVzdEBhcmthdmlkaWEuaWQiLCJuYW1lIjoiVGVzdCJ9.BzRfSSRmuSdgTSHgi54Av0rfAzo3tQMcyNohC-QrZws';
      const response = await api.post(`/competiiton/teams/` + ids.team_id + `/tasks/` + ids.task_id, {
        headers: {
          Authorization: `Bearer ${bearerToken}`
        }
      });
    },
  }
};