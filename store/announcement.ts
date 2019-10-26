import arkavidiaApi from '~/api/api';
export const actions = {
  async announcementlist() {
    const response = await arkavidiaApi.announcement.getAnnouncementList();
    return response;
  }
};
