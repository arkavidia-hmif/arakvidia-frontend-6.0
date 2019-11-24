import { User } from '~/api/user/types';

export interface Event {
  id: number;
  name: string;
  isRegistrationOpen?: boolean;
  slug: string;
  category: string;
  shortDesc: string;
  longDesc: string;
  beginTime: Date;
  endTime: Date;
  order: number;
}

export interface Registrant {
  id: number;
  mainevent: Event;
  user: User;
  isParticipating: boolean;
  activeStageId?: number;
  stages?: Stage[];
  taskResponses?: TaskResponse[];
  createdAt?: string;
}

export interface Stage {
  id: number;
  name: string;
  order: number;
  tasks: Array<Task>;
}

export interface Task {
  id: number;
  name: string;
  category: string;
  widget: string;
  widgetParameters?: object;
}

export interface TaskResponse {
  taskId: number;
  response: string;
  reason: string;
  status: string;
  lastSubmittedAt: string;
  registrantId: number;
}

export enum RegisterStatus {
  NAME_EXISTS, NOT_OPEN, REGISTRATION_CLOSED, ALREADY_REGISTERED, ERROR
}

export enum ChangeTeamStatus {
  ERROR
}

export enum DeleteStatus {
  ERROR
}

export enum GetEventListStatus {
  ERROR
}

export enum GetRegistrantListStatus {
  ERROR
}

export enum GetRegistrantDetailStatus {
  ERROR
}

export enum AddMemberStatus {
  REGISTRATION_CLOSED, NOT_PARTICIPATING, FULL, ERROR
}

export enum RemoveMemberStatus {
  ERROR
}

export enum SubmitTaskResponseStatus {
  ERROR
}
