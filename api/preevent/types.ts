import { User } from '~/api/user/types';

export interface PreEvent {
  id?: number;
  name: string;
  subtitle: string;
  isRegistrationOpen?: boolean;
  slug: string;
}

export interface Registrant {
  id: number;
  preevent: PreEvent;
  category: string;
  user: User;
  userEmail: string;
  isParticipating: boolean;
  activeStageId?: number;
  stages?: Stage[];
  taskResponses?: TaskResponse[];
  createdAt?: string;
}

export interface Stage {
  id?: number;
  name?: string;
  order: number;
  tasks: Array<Task>;
}

export interface Task {
  id: number;
  name: string;
  category: string;
  widget: string;
  widgetParameters?: object; // TODO string or object?
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

export enum GetPreEventListStatus {
  ERROR
}

export enum GetRegistrantListStatus {
  ERROR
}

export enum GetRegistrantDetailStatus {
  ERROR
}

export enum AddMemberStatus {
  REGISTRATION_CLOSED, NOT_PARTICIPATING, FULL, EMAIL_EXISTS, ERROR
}

export enum RemoveMemberStatus {
  ERROR
}

export enum SubmitTaskResponseStatus {
  ERROR
}
