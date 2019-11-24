import arkavidiaApi from '~/api/api';
import { Event, Registrant } from '~/api/event/types';

export interface EventState {
  events: {
    [slug: string]: Event
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
  getEvents(state: EventState): Event[] {
    return Object.values(state.events);
  },
  getRegistrants(state: EventState): Registrant[] {
    return Object.values(state.registrants);
  }
};

export const mutations = {
  setEvents(state: EventState, events: Array<Event>) {
    state.events = {};
    events.forEach((event) => {
      state.events[event.slug] = event;
    });
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
  async fetchEventList({ commit }) {
    const events = await arkavidiaApi.event.getEventList();
    commit('setEvents', events);
    return events;
  },

  // eslint-disable-next-line no-empty-pattern
  async register({ }, { maineventId }) {
    await arkavidiaApi.event.register(maineventId);
  },
  async fetchRegistrantList({ commit }) {
    const registrants = await arkavidiaApi.event.getRegistrantList();
    commit('setRegistrants', registrants);
    return registrants;
  },
  async fetchRegistrantDetail({ commit }, registrantId) {
    const registrant = await arkavidiaApi.event.getRegistrantDetail(registrantId);
    commit('setRegistrant', registrant);
    return registrant;
  },
  async deleteRegistrant({ commit }, { registrantId }) {
    await arkavidiaApi.event.deleteRegistration(registrantId);
    commit('deleteRegistrant', registrantId);
  },
  // eslint-disable-next-line no-empty-pattern
  submitTaskResponse({ }, { registrantId, taskId, response }) {
    return arkavidiaApi.event.submitTaskResponse(registrantId, taskId, response);
  }
};
