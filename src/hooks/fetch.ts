import { useState, useEffect } from "react";

type RestFullApiAuth = {
  username: string;
  password: string;
};
type RestFullApiProps = {
  url: string;
  param: object;
};
export function AuthenticateUser({ username, password }: RestFullApiAuth) {
  const token = username + ":" + password;
  const hash = btoa(token);
  return "Basic " + hash;
}
export default function useFetch({ url, param }: RestFullApiProps) {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(url, param)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch(console.log);
  }, [url]);
  return { data };
}
