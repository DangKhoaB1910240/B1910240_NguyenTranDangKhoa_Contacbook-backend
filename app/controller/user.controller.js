const ApiError = require("../api-error");
//const { param } = require("../routes/contact.route");
const UserService = require("../services//user.service");
const MongoDB = require("../utils/mongodb.util")


exports.create = async (req, res, next) => {
  if (!req.body?.email) {
    return next(new ApiError(400, "Email can not be empty !!!"));
  }
  if (!req.body?.password) {
    return next(new ApiError(400, "Password can not be empty !!!"));
  }
  try {
    const userService = new UserService(MongoDB.client);
    const document = await userService.createUser(req.body);
    return res.send(document);
  } catch (error) {
    return next(
      new ApiError(500, "User cap nhat thanh cong")
    );
  }
};
