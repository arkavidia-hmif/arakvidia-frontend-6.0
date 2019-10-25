import { ApiError, ArkavidiaBaseApi } from '~/api/base';
import { Announcement, InternalAnnouncement } from './types';

export class ArkavidiaAnnouncementApi extends ArkavidiaBaseApi {
  async getAnnouncementList(): Promise<Announcement[]> {
    try {
      const response = await this.axios.get(`/announcement/announcements/`);
      const announcements: Announcement[] = [];
      const rows: InternalAnnouncement[] = response.data as InternalAnnouncement[];

      rows.forEach((announcement: InternalAnnouncement) => {
        announcements.push({
          message: announcement.message,
          dateSent: Date.parse(announcement.dateSent)
        });
      });

      return announcements;
    }
    catch (e) {
      throw new ApiError<boolean>(false, e.toString());
    }
  }
};
