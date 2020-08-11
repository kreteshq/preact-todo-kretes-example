import { Handler, response } from 'kretes';

const { OK } = response;

const tasks = [
  { name: 'Use TypeScript 4.x', done: false },
  { name: 'Learn Kretes', done: false },
  { name: 'Enjoy programming', done: false },
]

export const browse: Handler = ({ params }) => {
  return OK(tasks);
}
