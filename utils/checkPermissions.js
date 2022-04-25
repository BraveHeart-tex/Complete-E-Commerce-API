const CustomError = require('../errors');

const checkPermissions = (requestUser, resourceId) => {
  console.log(requestUser);
  console.log(resourceId);
  console.log(typeof resourceId);
  if (requestUser.role === 'admin') return;
  if (requestUser.userId === resourceId.toString()) return;
  throw new CustomError.UnauthorizedError('Unauthorized to access this route');
};

module.exports = checkPermissions;
