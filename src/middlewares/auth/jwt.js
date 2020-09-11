const authorize = (SECRET_AUTH) => (req, res, next) => {
  try {
    if (!SECRET_AUTH) {
      throw new Error(
        'Warning! The server did not make the token available for this request.'
      );
    } else {
      const headerToken = req.headers['authorization'];
      if (!headerToken) throw new Error('Token not found');
      return next();
    }
  } catch (err) {
    next(err.message);
  }
};

module.exports = {
  authorize,
};
