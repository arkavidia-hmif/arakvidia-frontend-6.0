import arkavidiaApi from '~/api/api';
import { PreEvent, Registrant } from '~/api/preevent/types';

export interface PreEventState {
  preevents: {
    [slug: string]: PreEvent
  };
  registrants: {
    [registrantId: number]: Registrant
  };
}

export const namespaced = true;

export const state = () => ({
  preevents: {},
  registrants: {}
});

export const getters = {
  getPreEvents(state: PreEventState): PreEvent[] {
    return Object.values(state.preevents);
  },
  getRegistrants(state: PreEventState): Registrant[] {
    return Object.values(state.registrants);
  }
};

export const mutations = {
  setPreEvents(state: PreEventState, preEvents: Array<PreEvent>) {
    state.preevents = {};
    preEvents.forEach((preEvent) => {
      state.preevents[preEvent.slug] = preEvent;
    });
  },
  setRegistrants(state: PreEventState, registrants: Array<Registrant>) {
    state.registrants = {};
    registrants.forEach((registrant) => {
      state.registrants[registrant.id] = registrant;
    });
  },
  setRegistrant(state: PreEventState, registrant: Registrant) {
    state.registrants[registrant.id] = registrant;
  },
  deleteRegistrant(state: PreEventState, registrantId: number) {
    delete state.registrants[registrantId];
  }
};

export const actions = {
  async fetchPreEventList({ commit }) {
    const preEvents = await arkavidiaApi.preEvent.getPreEventList();
    commit('setPreEvents', preEvents);
    return preEvents;
  },

  // eslint-disable-next-line no-empty-pattern
  async register({ }, { preeventId }) {
    await arkavidiaApi.preEvent.register(preeventId);
  },
  async fetchRegistrantList({ commit }) {
    const registrants = await arkavidiaApi.preEvent.getRegistrantList();
    commit('setRegistrants', registrants);
    return registrants;
  },
  async fetchRegistrantDetail({ commit }, registrantId) {
    const registrant = await arkavidiaApi.preEvent.getRegistrantDetail(registrantId);
    commit('setRegistrant', registrant);
    return registrant;
  },
  async deleteRegistrant({ commit }, { registrantId }) {
    await arkavidiaApi.preEvent.deleteRegistration(registrantId);
    commit('deleteRegistrant', registrantId);
  },
  // eslint-disable-next-line no-empty-pattern
  submitTaskResponse({ }, { registrantId, taskId, response }) {
    return arkavidiaApi.preEvent.submitTaskResponse(registrantId, taskId, response);
  }
};
