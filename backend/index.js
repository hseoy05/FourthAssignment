import { connect, getDB } from './db.js';

const run = async () => {
  await connect();
  const db = getDB();
  const users = await db.collection("users").find().toArray();

  console.log("usersTable:");
  users.forEach((user, index) => {
    console.log(`\n#${index + 1}`);
    console.log("userId:", user.userId);
    console.log("userPassword:", user.userPassword);
    console.log("userName:", user.userName);
  });
};

run();