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
  competitions: {},
  teams: {}
});

export const getters = {
  getCompetitions(state: CompetitionState): Competition[] {
    return Object.values(state.competitions);
  },
  getTeams(state: CompetitionState): Team[] {
    return Object.values(state.teams);
  }
};

export const mutations = {
  setCompetitions(state: CompetitionState, competitions: Array<Competition>) {
    state.competitions = {};
    competitions.forEach((competition) => {
      state.competitions[competition.slug] = competition;
    });
  },
  setTeams(state: CompetitionState, teams: Array<Team>) {
    state.teams = {};
    teams.forEach((team) => {
      state.teams[team.id] = team;
    });
  },
  setTeam(state: CompetitionState, team: Team) {
    state.teams[team.id] = team;
  },
  deleteTeam(state: CompetitionState, teamId: number) {
    delete state.teams[teamId];
  },
  addMember(state: CompetitionState, data) {
    const member = { id: data.member.id,
      fullName: data.member.fullName,
      email: data.member.email,
      hasAccount: data.member.hasAccount,
      isTeamLeader: data.member.isTeamLeader };
    const members = state.teams[data.teamId].teamMembers;
    if (members != null) {
      members.push(member);
    }
  },
  removeMember(state: CompetitionState, data) {
    const members = state.teams[data.teamId].teamMembers;
    if (members != null) {
      const index = members.findIndex(member => member.id === data.teamMemberId);
      if (index > -1) {
        members.splice(index, 1);
      }
    }
  }
};

export const actions = {
  async fetchCompetitionList({ commit }) {
    const competitions = await arkavidiaApi.competition.getCompetitionList();
    commit('setCompetitions', competitions);
    return competitions;
  },

  // eslint-disable-next-line no-empty-pattern
  async registerTeam({ }, { competitionId, name, institution }) {
    await arkavidiaApi.competition.registerTeam(competitionId, name, institution);
  },
  async fetchTeamList({ commit }) {
    const teams = await arkavidiaApi.competition.getTeamList();
    commit('setTeams', teams);
    return teams;
  },
  async fetchTeamDetail({ commit }, teamId) {
    const team = await arkavidiaApi.competition.getTeamDetail(teamId);
    commit('setTeam', team);
    return team;
  },
  async changeTeam({ commit }, { teamId, name, teamLeaderEmail, institution }) {
    const teamData = await arkavidiaApi.competition.changeTeam(teamId, name, teamLeaderEmail, institution);
    commit('setTeam', { team: teamData });
  },
  async deleteTeam({ commit }, { teamId }) {
    await arkavidiaApi.competition.deleteTeam(teamId);
    commit('deleteTeam', teamId);
  },
  async addMember({ commit }, { teamId, fullName, email }) {
    const member = await arkavidiaApi.competition.addMember(teamId, fullName, email);
    const data = { teamId, member };
    commit('addMember', data);
  },
  async removeMember({ commit }, { teamId, teamMemberId }) {
    await arkavidiaApi.competition.removeMember(teamId, teamMemberId);
    const data = { teamId, teamMemberId };
    commit('removeMember', data);
  },
  // eslint-disable-next-line no-empty-pattern
  submitTaskResponse({ }, { teamId, taskId, response, teamMemberId }) {
    return arkavidiaApi.competition.submitTaskResponse(teamId, taskId, response, teamMemberId);
  }
};
