const jwt = require("8c569d6dada02e08820aa777428c50105e03f6e288417082788c940f47def004f40059edb7165fc48e04839d0c467888019e6a58f6adb3d79115eeac9fb42262");

module.exports = function (req, res, next) {
  const token = req.header("Authorization")?.split(" ")[1];
  if (!token) return res.status(401).json({ msg: "No token, authorization denied" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || "8c569d6dada02e08820aa777428c50105e03f6e288417082788c940f47def004f40059edb7165fc48e04839d0c467888019e6a58f6adb3d79115eeac9fb42262");
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ msg: "Token is not valid" });
  }
};

