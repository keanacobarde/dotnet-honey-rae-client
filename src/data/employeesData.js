const _apiUrl = "/api/employees";

export const getEmployees = () => {
  return fetch(_apiUrl).then((r) => r.json());
};
