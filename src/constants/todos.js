import { v4 as uuid } from "uuid";
import randomWords from "random-words";

const TODO_COUNT = 5;

const todos = Array(TODO_COUNT).fill(undefined).map(() => ({
  id: uuid(),
  label: randomWords({ exactly: 5, join: ' ' }),
  isCompleted: false
}));

export default todos;
