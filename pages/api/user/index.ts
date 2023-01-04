import type { NextApiRequest, NextApiResponse } from "next";
import { User, Error } from "../../../types";
import prisma from "../../../lib/prisma/prisma";

/*
 ** Implement logic to get all users and create an user
 **
 ** 1. Handle GET Http method
 **  1.1 Get all users with "prisma.user.findMany()" (users always exist)
 **  1.2 Return all users with success code xxx
 **  1.3 Handle error with server error code xxx
 ** 2. Handle POST Http method
 **  2.1 Deserialize body(JSON string)
 **  2.2 Create an user with "prisma.user.create({ data: user })"
 **  2.3 Return created successfully code xxx
 **  2.4 Handle error with server error code xxx
 ** 3. Handle unsupported methods
 **  3.1 Set allow header with GET and POST methods
 **  3.2 Return return string "Method {method} Not Allowed"
 */

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<User[] | Error>
) {
  // TODO
}
