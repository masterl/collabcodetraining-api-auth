import { getAll, save } from './user.controller';

export default (server, prefix) => {
  server.get(`${prefix}/users`, getAll);
  server.post(`${prefix}/users`, save);
};
