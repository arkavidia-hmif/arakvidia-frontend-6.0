export interface Competition {
  id?: number;
  name: string;
  maxTeamMembers?: number;
  minTeamMembers?: number;
  isRegistrationOpen?: boolean;
  slug: string;
  viewIcon: string;
}

export interface Team {
  id: number;
  competition?: Competition;
  name: string;
  teamLeaderEmail?: string;
  institution: string;
  isParticipating?: boolean;
  category?: string;
  teamMembers?: Array<Member>;
  activeStageId?: number;
  stages?: Array<Stage>;
  taskResponses?: Array<TaskResponse>;
  userTaskResponses?: Array<TaskResponse>;
  createdAt?: string;
}

export interface Member {
  id?: number;
  fullName?: string;
  email: string;
  hasAccount?: boolean;
  isTeamLeader?: boolean;
}

export interface Stage {
  id?: number;
  name?: string;
  order: number;
  tasks: Array<Task>;
}

export interface Task {
  id?: number;
  name?: string;
  category?: string;
  widget?: string;
  widgetParameters?: string;
  isUserTask: boolean;
}

export interface TaskResponse {
  taskId?: number;
  response?: string;
  reason?: string;
  status: string;
  lastSubmittedAt: string;
  userId?: number;
  teamMemberId?: number;
}

export enum RegisterTeamStatus {
  NAME_EXISTS, NOT_OPEN, REGISTRATION_CLOSED, ALREADY_REGISTERED, CREATE_TEAM_FAIL, TEAM_NAME_USED, ERROR
}

export enum ChangeTeamStatus {
  ERROR
}

export enum DeleteTeamStatus {
  ERROR
}

export enum GetCompetitionListStatus {
  ERROR
}

export enum GetTeamListStatus {
  ERROR
}

export enum GetTeamDetailStatus {
  ERROR
}

export enum AddMemberStatus {
  REGISTRATION_CLOSED, NOT_PARTICIPATING, FULL, EMAIL_EXISTS, ERROR
}

export enum RemoveMemberStatus {
  ERROR
}

export enum SubmitTaskResponseStatus {
  NOT_PARTICIPATING, ERROR
}
