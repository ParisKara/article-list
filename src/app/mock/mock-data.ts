import { ApiResponse } from '../models/article.models';

const dummyArticleContent =
  'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.';

// Creating the mock data that will be used in the app.
export const dummyData: ApiResponse = {
  data: [
    {
      type: 'articles',
      id: '1',
      attributes: {
        title: 'Dummy Data Example 1',
        body: dummyArticleContent,
        created: '2015-05-22T14:56:29.000Z',
        updated: '2015-05-25T14:56:28.000Z',
      },
      relationships: {
        author: {
          data: { id: '42', type: 'people' },
        },
      },
    },
    {
      type: 'articles',
      id: '2',
      attributes: {
        title: 'Dummy Data Example 2',
        body: dummyArticleContent,
        created: '2015-05-12T14:56:29.000Z',
        updated: '2015-05-19T14:56:28.000Z',
      },
      relationships: {
        author: {
          data: { id: '74', type: 'people' },
        },
      },
    },
    {
      type: 'articles',
      id: '3',
      attributes: {
        title: 'Dummy Data Example 3',
        body: dummyArticleContent,
        created: '2015-05-04T14:56:29.000Z',
        updated: '2015-05-04T14:56:28.000Z',
      },
      relationships: {
        author: {
          data: { id: '69', type: 'people' },
        },
      },
    },
    {
      type: 'articles',
      id: '4',
      attributes: {
        title: 'Save the Turtles',
        body: dummyArticleContent,
        created: '2015-05-10T14:56:29.000Z',
        updated: '2015-05-10T14:56:28.000Z',
      },
      relationships: {
        author: {
          data: { id: '69', type: 'people' },
        },
      },
    },
    {
      type: 'articles',
      id: '5',
      attributes: {
        title: 'Dummy Data Example 5',
        body: dummyArticleContent,
        created: '2015-05-29T14:56:29.000Z',
        updated: '2015-05-30T14:56:28.000Z',
      },
      relationships: {
        author: {
          data: { id: '125', type: 'people' },
        },
      },
    },
    {
      type: 'articles',
      id: '6',
      attributes: {
        title: 'Dummy Data Example 6',
        body: dummyArticleContent,
        created: '2015-05-15T14:56:29.000Z',
        updated: '2015-05-16T14:56:28.000Z',
      },
      relationships: {
        author: {
          data: { id: '8', type: 'people' },
        },
      },
    },
    {
      type: 'articles',
      id: '7',
      attributes: {
        title: 'Dummy Data Example 7',
        body: dummyArticleContent,
        created: '2015-05-07T14:56:29.000Z',
        updated: '2015-05-07T14:56:28.000Z',
      },
      relationships: {
        author: {
          data: { id: '125', type: 'people' },
        },
      },
    },
    {
      type: 'articles',
      id: '8',
      attributes: {
        title: 'Dummy Data Example 8',
        body: dummyArticleContent,
        created: '2015-05-22T14:56:29.000Z',
        updated: '2015-05-22T14:56:28.000Z',
      },
      relationships: {
        author: {
          data: { id: '8', type: 'people' },
        },
      },
    },
    {
      type: 'articles',
      id: '9',
      attributes: {
        title: 'Dummy Data Example 9',
        body: dummyArticleContent,
        created: '2015-05-28T14:56:29.000Z',
        updated: '2015-05-29T14:56:28.000Z',
      },
      relationships: {
        author: {
          data: { id: '125', type: 'people' },
        },
      },
    },
    {
      type: 'articles',
      id: '10',
      attributes: {
        title: 'Dummy Data Example 10',
        body: dummyArticleContent,
        created: '2015-05-30T14:56:29.000Z',
        updated: '2015-05-30T14:56:28.000Z',
      },
      relationships: {
        author: {
          data: { id: '42', type: 'people' },
        },
      },
    },
    {
      type: 'articles',
      id: '11',
      attributes: {
        title: 'Dummy Data Example 11',
        body: dummyArticleContent,
        created: '2015-05-12T14:56:29.000Z',
        updated: '2015-05-16T14:56:28.000Z',
      },
      relationships: {
        author: {
          data: { id: '8', type: 'people' },
        },
      },
    },
    {
      type: 'articles',
      id: '12',
      attributes: {
        title: 'Dummy Data Example 12',
        body: dummyArticleContent,
        created: '2015-05-08T14:56:29.000Z',
        updated: '2015-05-09T14:56:28.000Z',
      },
      relationships: {
        author: {
          data: { id: '69', type: 'people' },
        },
      },
    },
    {
      type: 'articles',
      id: '13',
      attributes: {
        title: 'Dummy Data Example 13',
        body: dummyArticleContent,
        created: '2015-05-24T14:56:29.000Z',
        updated: '2015-05-25T14:56:28.000Z',
      },
      relationships: {
        author: {
          data: { id: '74', type: 'people' },
        },
      },
    },
    {
      type: 'articles',
      id: '14',
      attributes: {
        title: 'Dummy Data Example 14',
        body: dummyArticleContent,
        created: '2015-05-12T14:56:29.000Z',
        updated: '2015-05-15T14:56:28.000Z',
      },
      relationships: {
        author: {
          data: { id: '42', type: 'people' },
        },
      },
    },
    {
      type: 'articles',
      id: '15',
      attributes: {
        title: 'Dummy Data Example 15',
        body: dummyArticleContent,
        created: '2015-05-02T14:56:29.000Z',
        updated: '2015-05-03T14:56:28.000Z',
      },
      relationships: {
        author: {
          data: { id: '125', type: 'people' },
        },
      },
    },
    {
      type: 'articles',
      id: '16',
      attributes: {
        title: 'Dummy Data Example 16',
        body: dummyArticleContent,
        created: '2015-05-06T14:56:29.000Z',
        updated: '2015-05-16T14:56:28.000Z',
      },
      relationships: {
        author: {
          data: { id: '42', type: 'people' },
        },
      },
    },
    {
      type: 'articles',
      id: '17',
      attributes: {
        title: 'Dummy Data Example 17',
        body: dummyArticleContent,
        created: '2015-05-08T14:56:29.000Z',
        updated: '2015-05-08T14:56:28.000Z',
      },
      relationships: {
        author: {
          data: { id: '8', type: 'people' },
        },
      },
    },
    {
      type: 'articles',
      id: '18',
      attributes: {
        title: 'Dummy Data Example 18',
        body: dummyArticleContent,
        created: '2015-05-18T14:56:29.000Z',
        updated: '2015-05-19T14:56:28.000Z',
      },
      relationships: {
        author: {
          data: { id: '42', type: 'people' },
        },
      },
    },
    {
      type: 'articles',
      id: '19',
      attributes: {
        title: 'Dummy Data Example 19',
        body: dummyArticleContent,
        created: '2015-05-14T14:56:29.000Z',
        updated: '2015-05-16T14:56:28.000Z',
      },
      relationships: {
        author: {
          data: { id: '69', type: 'people' },
        },
      },
    },
    {
      type: 'articles',
      id: '20',
      attributes: {
        title: 'Dummy Data Example 20',
        body: dummyArticleContent,
        created: '2015-05-11T14:56:29.000Z',
        updated: '2015-05-13T14:56:28.000Z',
      },
      relationships: {
        author: {
          data: { id: '125', type: 'people' },
        },
      },
    },
  ],
  included: [
    {
      type: 'people',
      id: '42',
      attributes: {
        name: 'John',
        age: 25,
        gender: 'male',
      },
    },
    {
      type: 'people',
      id: '8',
      attributes: {
        name: 'Darius',
        age: 41,
        gender: 'male',
      },
    },
    {
      type: 'people',
      id: '74',
      attributes: {
        name: 'Alice',
        age: 23,
        gender: 'female',
      },
    },
    {
      type: 'people',
      id: '125',
      attributes: {
        name: 'Azir',
        age: 33,
        gender: 'male',
      },
    },
    {
      type: 'people',
      id: '69',
      attributes: {
        name: 'Rayna',
        age: 29,
        gender: 'female',
      },
    },
  ],
};
