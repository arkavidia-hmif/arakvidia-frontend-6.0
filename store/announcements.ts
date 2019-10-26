import arkavidiaApi from '~/api/api';
import { Announcement } from '~/api/announcement/types';

export const namespaced = true;

export const actions = {
  getAnnouncements(): Promise<Announcement[]> {
    return arkavidiaApi.announcement.getAnnouncementList();
  }
};
