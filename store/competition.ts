import arkavidiaApi from '~/api/api';
import { Competition } from '~/api/competition';

export interface CompetitionState {
  competitions: Array<Competition>;
}

export const namespaced = true;

export const state = () => ({
  competitions: [],
});

export const getters = {
  getCompetitions(state: CompetitionState) {
    return state.competitions;
  },
};

export const mutations = {
  setCompetition(state: CompetitionState, competitions: Array<Competition>) {
    state.competitions = competitions;
  },
};

export const actions = {
  async fetchCompetitionList({ commit }) {
    const competitions = await arkavidiaApi.competition.getCompetitionList();
    commit('setCompetition', competitions);
  },
};
