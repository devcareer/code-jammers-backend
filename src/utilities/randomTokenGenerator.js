export default () => {
  const random = () => {
    let result = "";
    const characters = "ABCDEFHGJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (let i = 0; i < 26; i += 1) {
      result += characters.charAt(Math.floor(Math.random() * 26));
    }
    return result;
  };
  return random();
};
