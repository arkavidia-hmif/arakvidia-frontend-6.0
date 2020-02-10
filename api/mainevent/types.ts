import { User } from '~/api/user/types';

export interface MainEvent {
  id: number;
  name: string;
  isRegistrationOpen?: boolean;
  slug: string;
  category: string;
  shortDesc: string;
  longDesc?: string;
  beginTime: Date;
  endTime: Date;
  order: number;
  seatsAvailable: number;
  seatsRemaining: number;
}

export interface Registrant {
  id: number;
  mainevent: MainEvent;
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

export enum SubmitTaskResponseStatus {
  ERROR
}
