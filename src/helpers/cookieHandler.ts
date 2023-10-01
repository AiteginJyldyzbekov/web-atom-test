const CookieHandler = ({ token }: { token: string }) => {
  const cookie_date = new Date();
  cookie_date.setFullYear(cookie_date.getFullYear() + 1);
  document.cookie = `authToken=${token};expires=${cookie_date.toUTCString()}`;
};

export default CookieHandler;
