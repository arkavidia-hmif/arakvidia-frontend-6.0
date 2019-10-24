import api from '~/api';

export interface Competition {
  id?: number;
  name: string;
  maxTeamMembers?: number;
  minTeamMembers?: number;
  isRegistrationOpen?: boolean;
}

export interface CompetitionState {
  competitions: Array<Competition>;
}

export default {
  namespaced: true,
  state: () => ({
    competitions: [],
  }),
  getters: {
    getCompetitions(state: CompetitionState) {
      return state.competitions;
    },
  },
  mutations: {
    setCompetition(state: CompetitionState, competitions: Array<Competition>) {
      state.competitions = competitions;
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
  }
};
