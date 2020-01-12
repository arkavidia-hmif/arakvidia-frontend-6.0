export interface EventCategory {
  key: string;
  title: string;
  color: string;
}

export const eventCategories: EventCategory[] = [
  {
    key: 'advanced_talk',
    title: 'Advanced Talk',
    color: '#FFBA07'
  },
  {
    key: 'public_talk',
    title: 'Public Talk',
    color: '#21C7C5'
  },
  {
    key: 'talkshow',
    title: 'Talkshow',
    color: '#7608FF'
  }
];
