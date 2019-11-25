<template>
  <div>
    <h5 class="title font-weight-black">
      {{ activeStageName }}
    </h5>
    <div class="mt-3">
      <v-text-field
        outlined
        dense
        label="Input"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator';
import {
  Team,
  Stage,
  Task,
  TaskResponse
} from '~/api/competition/types';
import Alert from '~/components/partials/Alert.vue';

  interface QueryParameters {
    continue?: string;
  }

  @Component({
    components: { Alert }
  })
export default class StageTasks extends Vue {
  @Prop() team!: Team;

  get activeStage(): Stage|undefined {
    if (this.team == null) {
      return undefined;
    }
    if (!this.team.stages) { return undefined; }

    return this.team.stages.find((stage: Stage) => {
      return stage.id === this.team.activeStageId;
    });
  }

  get activeStageName(): string {
    const stage = this.activeStage;
    if ((stage == null) || (stage.name == null)) {
      return '';
    }
    return stage.name;
  }

  get activeStageTasks(): Task[] {
    const stage = this.activeStage;
    if ((stage == null) || (stage.name == null)) {
      return [];
    }
    return stage.tasks.filter((task: Task) => {
      return !task.isUserTask;
    });
  }

  get activeStageUserTasks(): Task[] {
    const stage = this.activeStage;
    if ((stage == null) || (stage.name == null)) {
      return [];
    }
    return stage.tasks.filter((task: Task) => {
      return task.isUserTask;
    });
  }

  getTeamTaskResponse(taskId: number): TaskResponse|undefined {
    if (!this.team.taskResponses) { return undefined; }

    return this.team.taskResponses.find((taskResponse: TaskResponse) => {
      return taskResponse.taskId === taskId;
    });
  }

  getUserTaskResponse(taskId: number, teamMemberId: number): TaskResponse|undefined {
    if (!this.team.userTaskResponses) { return undefined; }

    return this.team.userTaskResponses.find((taskResponse: TaskResponse) => {
      return taskResponse.taskId === taskId && taskResponse.teamMemberId === teamMemberId;
    });
  }
}
</script>

<style scoped>

</style>
