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
}

export interface TaskResponse {
  taskId?: number;
  response?: string;
  reason?: string;
  status: string;
  lastSubmittedAt: string;
}

export enum RegisterTeamStatus {
  NAME_EXISTS, NOT_OPEN, ERROR
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
  EMAIL_EXISTS, ERROR
}

export enum RemoveMemberStatus {
  ERROR
}
