import arkavidiaApi from '~/api/api';
import { MainEvent, Registrant } from '~/api/mainevent/types';

export interface EventState {
  events: {
    [slug: string]: MainEvent
  };
  registrants: {
    [registrantId: number]: Registrant
  };
}

export const namespaced = true;

export const state = () => ({
  events: {},
  registrants: {}
});

export const getters = {
  getMainEvents(state: EventState): MainEvent[] {
    return Object.values(state.events);
  },
  getMainEventsBySlug(state: EventState): { [slug: string]: MainEvent } {
    return state.events;
  },
  getRegistrants(state: EventState): Registrant[] {
    return Object.values(state.registrants);
  }
};

export const mutations = {
  setMainEvents(state: EventState, events: Array<MainEvent>) {
    state.events = {};
    events.forEach((event) => {
      state.events[event.slug] = event;
    });
  },
  setMainEvent(state: EventState, event: MainEvent) {
    const currentEvent = state.events[event.slug];
    state.events[event.slug] = { ...currentEvent, ...event };
  },
  setRegistrants(state: EventState, registrants: Array<Registrant>) {
    state.registrants = {};
    registrants.forEach((registrant) => {
      state.registrants[registrant.id] = registrant;
    });
  },
  setRegistrant(state: EventState, registrant: Registrant) {
    state.registrants[registrant.id] = registrant;
  },
  deleteRegistrant(state: EventState, registrantId: number) {
    delete state.registrants[registrantId];
  }
};

export const actions = {
  async fetchMainEventList({ commit }) {
    const events = await arkavidiaApi.mainEvent.getMainEventList();
    commit('setMainEvents', events);
    return events;
  },
  // eslint-disable-next-line no-empty-pattern
  async fetchMainEventDetails({ }, { maineventId }) {
    const mainevent = await arkavidiaApi.mainEvent.getMainEventDetails(maineventId);
    return mainevent;
  },
  // eslint-disable-next-line no-empty-pattern
  async register({ }, { maineventId }) {
    await arkavidiaApi.mainEvent.register(maineventId);
  },
  async fetchRegistrantList({ commit }) {
    const registrants = await arkavidiaApi.mainEvent.getRegistrantList();
    commit('setRegistrants', registrants);
    return registrants;
  },
  async fetchRegistrantDetail({ commit }, registrantId) {
    const registrant = await arkavidiaApi.mainEvent.getRegistrantDetail(registrantId);
    commit('setRegistrant', registrant);
    return registrant;
  },
  async deleteRegistrant({ commit }, { registrantId }) {
    await arkavidiaApi.mainEvent.deleteRegistration(registrantId);
    commit('deleteRegistrant', registrantId);
  },
  // eslint-disable-next-line no-empty-pattern
  submitTaskResponse({ }, { registrantId, taskId, response }) {
    return arkavidiaApi.mainEvent.submitTaskResponse(registrantId, taskId, response);
  }
};
