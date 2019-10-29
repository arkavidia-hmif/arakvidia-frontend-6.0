<template>
  <DashboardWrapper>
    <CompetitionWrapper :competition-slug="slug">
      <template slot-scope="{ team }">
        <h5 class="title font-weight-black">
          {{ getActiveStageName(team) }}
        </h5>
        <div class="mt-6">
          <div v-for="(task, i) in getActiveStageTasks(team)" :key="i">
            <div class="py-4">
              <div class="subtitle font-weight-bold">
                {{ task.name }}
              </div>
              <div class="subtitle mt-1">
                {{ task.widgetParameters }}
              </div>

              <TextWidget
                v-if="task.widget === 'text'"
                :team-id="team.id"
                :task="task"
                :task-response="getTaskResponse(team, task.id)"
                class="mt-2"
              />
              <FileUploadWidget
                v-else-if="task.widget === 'file_upload'"
                :team-id="team.id"
                :task="task"
                :task-response="getTaskResponse(team, task.id)"
                class="mt-2"
              />
            </div>
            <v-divider />
          </div>
        </div>
      </template>
    </CompetitionWrapper>
  </DashboardWrapper>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import TextWidget from '~/components/partials/Dashboard/ActionWidgets/TextWidget.vue';
import FileUploadWidget from '~/components/partials/Dashboard/ActionWidgets/FileUpload.vue';
import DashboardWrapper from '~/components/partials/Dashboard/DashboardWrapper.vue';
import TabMenu from '~/components/partials/Dashboard/Competition/TabMenu.vue';
import AnggotaTim from '~/components/partials/Dashboard/Competition/AnggotaTim.vue';
import CompetitionWrapper from '~/components/partials/Dashboard/Competition/CompetitionWrapper.vue';
import { Stage, Team, Task, TaskResponse } from '~/api/competition/types';

  @Component({
    components: { TextWidget, FileUploadWidget, CompetitionWrapper, DashboardWrapper, TabMenu, AnggotaTim }
  })
export default class DashboardAction extends Vue {
  head() {
    return {
      title: 'Dashboard'
    };
  }

  get slug() {
    // eslint-disable-next-line dot-notation
    return this.$route.params['competition'];
  }

  getActiveStage(team: Team): Stage|undefined {
    if (team == null) {
      return undefined;
    }
    if (!team.stages) { return undefined; }

    return team.stages.find((stage: Stage) => {
      return stage.id === team.activeStageId;
    });
  }

  getActiveStageName(team: Team): string {
    const stage = this.getActiveStage(team);
    if ((stage == null) || (stage.name == null)) {
      return 'Belum ada stages';
    }
    return stage.name;
  }

  getActiveStageTasks(team: Team): Task[] {
    const stage = this.getActiveStage(team);
    if ((stage == null) || (stage.name == null)) {
      return [];
    }
    return stage.tasks;
  }

  getTaskResponse(team: Team, taskId: number): TaskResponse|undefined {
    if (!team.taskResponses) { return undefined; }

    return team.taskResponses.find((taskResponse: TaskResponse) => {
      return taskResponse.taskId === taskId;
    });
  }
}
</script>

<style scoped>

</style>
