// src/middlewares/isAuthenticated.ts
import { verify } from "jsonwebtoken";
function isAuthenticated(req, res, next) {
  const authToken = req.headers.authorization;
  if (!authToken) {
    return res.status(401).json({
      errorCode: "token.invalid"
    });
  }
  console.log(authToken);
  const [token] = authToken.split(",");
  try {
    const { sub } = verify(token, process.env.JWT_SECRET);
    req.user_id = sub;
    return next();
  } catch (error) {
    return res.status(401).json({
      errorCode: "token.expired"
    });
  }
}

export {
  isAuthenticated
};
