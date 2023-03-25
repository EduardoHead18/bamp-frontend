export const getTokenLocalStorage = () => {
  const token = localStorage.getItem("token");
  const base64Url = token ? token.split(".")[1] : null;
  if (base64Url) {
    const base64 = base64Url.replace("-", "+").replace("_", "/");
    const decodedToken = Buffer.from(base64, "base64").toString();
    const tokenObj = JSON.parse(decodedToken);
    return tokenObj
    // resto del código que depende de la variable tokenObj
  } else {
    console.log("sin localstorage");
    return {message:'null'}
  }
};
