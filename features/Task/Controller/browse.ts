import { Handler, response } from 'kretes';

const { OK } = response;

const tasks = [
  { name: 'Learn Kretes', done: false },
  { name: 'Enjoy programming', done: false },
]

export const browse: Handler = ({ params }) => {
  return OK(tasks);
}
