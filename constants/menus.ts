export interface Menu {
  title: string;
  route: string;
  disabled?: boolean;
}

export interface TopLevelMenu {
  title: string;
  children?: Menu[];
  route?: string;
}

export const competitionMenus: Menu[] = [
  {
    title: 'Competitive Programming',
    route: '/competition/competitive-programming'
  },
  {
    title: 'Capture the Flag',
    route: '/competition/capture-the-flag'
  },
  {
    title: 'Hackavidia',
    route: '/competition/hackavidia'
  },
  {
    title: 'Datavidia',
    route: '/competition/datavidia'
  },
  {
    title: 'Arkalogica',
    route: '/competition/arkalogica'
  }
];

export const preEventMenus: Menu[] = [
  {
    title: 'Arkavidia Academy',
    route: '/preevent/arkavidia-academy'
  },
  {
    title: 'Technocamp',
    route: '/preevent/technocamp'
  },
  {
    title: 'Arkavidia Goes To School',
    route: '/preevent/arkavidia-goes-to-school'
  }
];

export const mainEventMenus: Menu[] = [
  {
    title: 'IT Festival',
    route: '/event/it-festival'
  },
  {
    title: 'Arkavidia Talk',
    route: '/event/arkavidia-talk'
  }
];

export const mainMenus: TopLevelMenu[] = [
  {
    title: 'Competitions',
    children: competitionMenus
  },
  {
    title: 'Pre-Events',
    children: preEventMenus
  },
  {
    title: 'Events',
    children: mainEventMenus
  },
  {
    title: 'About',
    route: '/about'
  }
];

export const dashboardMenus: Menu[] = [
  {
    title: 'Announcement',
    route: '/dashboard/'
  },
  {
    title: 'Profile',
    route: '/dashboard/profile'
  },
  {
    title: 'Competition',
    route: '/dashboard/competition'
  },
  {
    title: 'Pre-event',
    route: '/dashboard/pre-event'
  },
  {
    title: 'Arkavidia Talk',
    route: '/dashboard/arkavidia-talk'
  }
];

export const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
