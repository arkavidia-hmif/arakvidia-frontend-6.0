<template>
  <div>
    <h5 class="title font-weight-black">
      {{ activeStageName }}
    </h5>
    <div class="mt-3">
      <v-expansion-panels
        v-model="panels"
        class="ma-0"
        multiple
      >
        <v-expansion-panel v-if="activeStageTasks.length > 0">
          <v-expansion-panel-header class="white--text" style="background: #0B909A" expanded>
            <b>
              <v-icon small class="mr-2" color="white">fas fa-users</v-icon> {{ team.name }}
            </b>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <div v-for="(task, i) in activeStageTasks" :key="i">
              <div class="py-4">
                <div class="subtitle font-weight-bold">
                  {{ task.name }}
                </div>
                <div class="subtitle mt-1">
                  {{ task.widgetParameters.description || '' }}
                </div>

                <TextWidget
                  v-if="task.widget === 'text'"
                  :team-id="team.id"
                  :task="task"
                  :task-response="getTeamTaskResponse(task.id)"
                  class="mt-2"
                />
                <FileUploadWidget
                  v-else-if="task.widget === 'file_upload'"
                  :team-id="team.id"
                  :task="task"
                  :task-response="getTeamTaskResponse(task.id)"
                  class="mt-2"
                />
                <OptionWidget
                  v-else-if="task.widget === 'option'"
                  :team-id="team.id"
                  :task="task"
                  :task-response="getTeamTaskResponse(task.id)"
                  class="mt-2"
                />
              </div>
            </div>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <template v-if="activeStageUserTasks.length > 0">
          <v-expansion-panel
            v-for="(member, i) in team.teamMembers"
            :key="i"
          >
            <v-expansion-panel-header>
              <b>
                {{ member.fullName }}
                <v-icon v-if="member.email === team.teamLeaderEmail" small class="ml-2" color="#FFBA07">fas fa-crown</v-icon>
              </b>
            </v-expansion-panel-header>
            <v-expansion-panel-content style="border-top: 0.5px solid #dedede">
              <div v-for="(task, j) in activeStageUserTasks" :key="j">
                <div class="py-4">
                  <div class="subtitle font-weight-bold">
                    {{ task.name }}
                  </div>
                  <div class="subtitle mt-1">
                    {{ task.widgetParameters.description || '' }}
                  </div>

                  <TextWidget
                    v-if="task.widget === 'text'"
                    :team-id="team.id"
                    :team-member-id="member.id"
                    :task="task"
                    :task-response="getUserTaskResponse(task.id, member.id)"
                    class="mt-2"
                  />
                  <FileUploadWidget
                    v-else-if="task.widget === 'file_upload'"
                    :team-id="team.id"
                    :team-member-id="member.id"
                    :task="task"
                    :task-response="getUserTaskResponse(task.id, member.id)"
                    class="mt-2"
                  />
                  <OptionWidget
                    v-else-if="task.widget === 'option'"
                    :team-id="team.id"
                    :team-member-id="member.id"
                    :task="task"
                    :task-response="getUserTaskResponse(task.id, member.id)"
                    class="mt-2"
                  />
                </div>
              </div>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </template>
      </v-expansion-panels>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator';
import TextWidget from '~/components/partials/Dashboard/ActionWidgets/TextWidget.vue';
import FileUploadWidget from '~/components/partials/Dashboard/ActionWidgets/FileUploadWidget.vue';
import OptionWidget from '~/components/partials/Dashboard/ActionWidgets/OptionWidget.vue';
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
    components: { Alert, TextWidget, FileUploadWidget, OptionWidget }
  })
export default class StageTasks extends Vue {
    @Prop() team!: Team;
    panels: number[] = [0, 1, 2, 3, 4, 5];

    mounted() {
    }

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
        return 'Belum ada stages';
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
        return !!task.isUserTask;
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
