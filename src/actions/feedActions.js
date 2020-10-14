import { createThunk } from '@rootstrap/redux-tools';
import moment from 'moment';

// import feedService from 'services/feedService';

export const getFeed = createThunk('GET_FEED', async options => {
  const DATA = [
    [
      {
        id: '1',
        type: 'exchange',

        title: '1 - Titulo exchange',
        description:
          'Esta es la primer card de exchange del feed y bla bla bla y bla bla blay bla bla blay bla bla blay bla bla blay bla bla blay bla bla blay bla bla blay bla bla blay bla bla blay bla bla bla',
        updatedAt: moment(),
      },
      {
        id: '2',
        type: 'oneOnOne',
        title: '2 - Titulo oneOnOne 1',
        description: 'Esta es la primer card de oneOnOne del feed',
        updatedAt: moment().subtract({ days: 1 }),
      },
      {
        id: '3',
        type: 'poll',
        title: '3 - Titulo poll',
        description: 'Esta es la primer card de poll del feed',
        updatedAt: moment().subtract({ days: 3 }),
      },
      {
        id: '4',
        type: 'poll',
        title: '4 - Titulo poll 2',
        description: 'Esta es la primer card de poll del feed',
        updatedAt: moment().subtract({ days: 10 }),
      },
      {
        id: '5',
        type: 'poll',
        title: '5 - Titulo poll 3',
        description: 'Esta es la primer card de poll del feed',
        updatedAt: moment().subtract({ years: 1 }),
      },
    ],
    [
      {
        id: '6',
        type: 'exchange',

        title: '6 - Titulo exchange',
        description:
          'Esta es la primer card de exchange del feed y bla bla bla y bla bla blay bla bla blay bla bla blay bla bla blay bla bla blay bla bla blay bla bla blay bla bla blay bla bla blay bla bla bla',
        updatedAt: moment(),
      },
      {
        id: '7',
        type: 'oneOnOne',
        title: '7 - Titulo oneOnOne 1',
        description: 'Esta es la primer card de oneOnOne del feed',
        updatedAt: moment().subtract({ days: 1 }),
      },
      {
        id: '8',
        type: 'poll',
        title: '8 - Titulo poll',
        description: 'Esta es la primer card de poll del feed',
        updatedAt: moment().subtract({ days: 3 }),
      },
      {
        id: '9',
        type: 'poll',
        title: '9 - Titulo poll 2',
        description: 'Esta es la primer card de poll del feed',
        updatedAt: moment().subtract({ days: 10 }),
      },
      {
        id: '10',
        type: 'poll',
        title: '10 - Titulo poll 3',
        description: 'Esta es la primer card de poll del feed',
        updatedAt: moment().subtract({ years: 1 }),
      },
    ],
    [
      {
        id: '11',
        type: 'exchange',

        title: '11 - Titulo exchange',
        description:
          'Esta es la primer card de exchange del feed y bla bla bla y bla bla blay bla bla blay bla bla blay bla bla blay bla bla blay bla bla blay bla bla blay bla bla blay bla bla blay bla bla bla',
        updatedAt: moment(),
      },
      {
        id: '12',
        type: 'oneOnOne',
        title: '12 - Titulo oneOnOne 1',
        description: 'Esta es la primer card de oneOnOne del feed',
        updatedAt: moment().subtract({ days: 1 }),
      },
      {
        id: '13',
        type: 'poll',
        title: '13 - Titulo poll',
        description: 'Esta es la primer card de poll del feed',
        updatedAt: moment().subtract({ days: 3 }),
      },
      {
        id: '14',
        type: 'poll',
        title: '14 - Titulo poll 2',
        description: 'Esta es la primer card de poll del feed',
        updatedAt: moment().subtract({ days: 10 }),
      },
      {
        id: '15',
        type: 'poll',
        title: '15 - Titulo poll 3',
        description: 'Esta es la primer card de poll del feed',
        updatedAt: moment().subtract({ years: 1 }),
      },
    ],
  ];
  const start = options.start || 0;

  return { data: DATA[start], shouldReplace: start === 0 };
  // await feedService.get().data;
});
