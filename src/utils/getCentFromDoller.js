const getCentFromDoller = (doller) => {
  const cent = Math.round(doller * 100);
  return cent;
};

module.exports = getCentFromDoller;
