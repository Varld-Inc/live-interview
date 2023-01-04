import { User } from "../../types";
import userMockData from "../../fixtures/users.json";
import postMockData from "../../fixtures/posts.json";

function getUserCounter(userData: User[]) {
  return userData.slice(-1)[0].id;
}

export default function initStorage() {
  if (!global.storage) {
    global.storage = {
      users: userMockData,
      posts: postMockData,
      userCounter: getUserCounter(userMockData),
    };
  }
}
