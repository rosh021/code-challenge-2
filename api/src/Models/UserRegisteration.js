import connect from "../dbConfig/dbConfig.js";

export const createUser = (data, callBack) => {
  return connect.query(
    `insert into users(id, username, password) values(?,?,?)`,

    [data.id, data.username, data.password],
    (error, results) => {
      if (error) {
        return callBack(error);
      }
      return callBack(null, results);
    }
  );
};

export const findUser = (username, password, callBack) => {
  console.log(username, password);
  return connect.query(
    `select * from users where username = ? and password = ?`,
    [username, password],
    (error, result) => {
      if (error) {
        return callBack(error);
      }
      return callBack(null, result);
    }
  );
};
