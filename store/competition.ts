import arkavidiaApi from '~/api/api';
import { Competition, Team } from '~/api/competition/types';


export interface CompetitionState {
  competitions: {
    [slug: string]: Competition
  };
  teams: {
    [teamId: number]: Team
  };
}

export const namespaced = true;

export const state = () => ({
  competitions: [],
  teams: [],
});

export const getters = {
  getCompetitions(state: CompetitionState) {
    return Object.values(state.competitions);
  },
  getTeams(state: CompetitionState) {
    return Object.values(state.teams);
  },
};

export const mutations = {
  setCompetitions(state: CompetitionState, competitions: Array<Competition>) {
    state.competitions = {};
    competitions.forEach(competition => {
      state.competitions[competition.slug] = competition;
    });
  },
  setTeams(state: CompetitionState, teams: Array<Team>) {
    state.teams = teams;
  },
  setTeam(state: CompetitionState, team: Team) {
    state.teams[team.id] = team;
  },
};

export const actions = {
  async fetchCompetitionList({ commit }) {
    const competitions = await arkavidiaApi.competition.getCompetitionList();
    commit('setCompetitions', competitions);
  },
  async registerTeam({ }, { competitionId, name, institution }) {
    await arkavidiaApi.competition.registerTeam(competitionId, name, institution);
  },
  async fetchTeamList({ commit, }) {
    const teams = await arkavidiaApi.competition.getTeamList();
    commit('setTeams', teams);
  },
  async fetchTeamDetail({ commit }, teamId) {
    const team = await arkavidiaApi.competition.getTeamDetail(teamId);
    commit('setTeam', team);
  },
};
