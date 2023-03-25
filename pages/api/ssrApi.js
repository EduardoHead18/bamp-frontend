//fetch user
export const userApi = async() =>{
  const url = process.env.NEXT_PUBLIC_USER_API
  const response = await fetch(url)
  const responseUserJson = await response.json();
  return responseUserJson
}
//fecth autos
export const autosApi = async () => {
  const url = process.env.NEXT_PUBLIC_AUTOS_API
  const response = await fetch(url);
  const responseAutosJson = await response.json();
  return responseAutosJson
};

//fetch logs
/*
export const logApi = async() =>{
  const url = process.env.NEXT_PUBLIC_LOGS_API
  const response = await fetch(url,{
    method:'POST',
    headers:{
      "Content-Type":"applicaction/json"
    },
    body: JSON.stringify({})
  })
  const responseLogJson = await response.json();
  return responseLogJson
}
*/