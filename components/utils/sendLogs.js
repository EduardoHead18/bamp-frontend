//enviarLog
export const sendLogsCreateAccount = async (objeto) => {
  const url = process.env.NEXT_PUBLIC_LOGS_API;
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(objeto),
  });
  if (response.ok) {
    const data = await response.json();
  } else {
  }
};
