//simulate a http request
const TIMEOUT = 1500;

const SUCCESS_TOKEN = {
  token:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiQWRtaW4iLCJlbWFpbCI6ImFkbWluQGFkbWluLmNvbSIsImlhdCI6MTUxNjIzOTAyMn0.ymi1UrWx6q9NeoDChm0Uu4v317Mlud_oQPu3oXz1nkk"
};

export const login = (email, password) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === "admin@admin.com" && password === "admin") {
        return resolve(SUCCESS_TOKEN);
      }
      return reject("Bad username or password");
    }, TIMEOUT);
  });
