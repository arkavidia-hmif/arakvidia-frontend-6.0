<template>
  <div>
    <h5 class="title font-weight-black">
      {{ activeStageName }}
    </h5>
    <div class="mt-3">
      <div v-for="(task, i) in activeStageTasks" :key="i">
        <div class="py-4">
          <div class="subtitle font-weight-bold">
            {{ task.name }}
          </div>
          <div class="subtitle mt-1">
            {{ task.widgetParameters.description || '' }}
          </div>
          <ArkavidiaTalkActionWidget
            :registrant-id="registrant.id"
            :task="task"
            :task-response="getTaskResponse(task.id)"
            class="mt-2"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator';
import {
  Registrant,
  Stage,
  Task,
  TaskResponse
} from '~/api/event/types';
import Alert from '~/components/partials/Alert.vue';
import ArkavidiaTalkActionWidget from '~/components/partials/Dashboard/ArkavidiaTalk/ArkavidiaTalkActionWidget.vue';

@Component({
  components: { ArkavidiaTalkActionWidget, Alert }
})
export default class StageTasks extends Vue {
  @Prop() registrant!: Registrant;

  get activeStage(): Stage|undefined {
    if (this.registrant == null) {
      return undefined;
    }
    if (!this.registrant.stages) { return undefined; }

    return this.registrant.stages.find((stage: Stage) => {
      return stage.id === this.registrant.activeStageId;
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

    return stage.tasks;
  }

  getTaskResponse(taskId: number): TaskResponse|undefined {
    if (!this.registrant.taskResponses) { return undefined; }

    return this.registrant.taskResponses.find((taskResponse: TaskResponse) => {
      return taskResponse.taskId === taskId;
    });
  }
}
</script>

<style scoped>

</style>
