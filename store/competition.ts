import arkavidiaApi from '~/api/api';
import { Competition, Team, Member } from '~/api/competition/types';

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
  teams: []
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
    teams.forEach(team => {
      state.teams[team.id] = team;
    });
  },
  setTeam(state: CompetitionState, team: Team) {
    state.teams[team.id] = team;
  },
  deleteTeam(state: CompetitionState, team_id: number) {
    delete state.teams[team_id];
  },
  addMember(state: CompetitionState, { number: team_id, Member: member}) {
    const members = state.teams[team_id].teamMembers;
    if (members != null) {
      members.push(member);
    }
  },
  removeMember(state: CompetitionState, { number: team_id, number: team_member_id}) {
    const members = state.teams[team_id].teamMembers;
    if (members != null) {
      const index = members.findIndex(member => member.id == team_member_id);
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
  async changeTeam({ commit }, { team_id, name, teamLeaderEmail, institution }) {
    const teamData = await arkavidiaApi.competition.changeTeam(team_id, name, teamLeaderEmail, institution);
    commit('setTeam', { team: teamData });
  },
  async deleteTeam({ commit }, { team_id }) {
    await arkavidiaApi.competition.deleteTeam(team_id);
    commit('deleteTeam', team_id);
  },
  async addMember({ commit }, { team_id, fullName, email }) {
    const member = await arkavidiaApi.competition.addMember(team_id, fullName, email);
    commit('addMember', { team_id, member });
    return member;
  },
  async removeMember({ commit }, { team_id, team_member_id }) {
    await arkavidiaApi.competition.removeMember(team_id, team_member_id);
    commit('removeMember', { team_id, team_member_id });
  }
};
