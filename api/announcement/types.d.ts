export interface Announcement {
  message: string;
  dateSent: number;
}

interface InternalAnnouncement {
  message: string;
  dateSent: string;
}
