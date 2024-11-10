export const userLoader = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!res.ok) {
    throw Error("Unable to load user details");
  }
  const data = res.json();
  return data;
};

export const userSingleLoader = async ({ params }) => {
  const { id } = params;
  const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
  if (!res.ok) {
    throw Error("User details not found");
  }
  const data = await res.json();
  return data;
};
