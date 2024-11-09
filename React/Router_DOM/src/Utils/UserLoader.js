export const userLoader = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json();
};

export const userSingleLoader = async ({ params }) => {
  const { id } = params;
  const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
  const data = await res.json();
  console.log(data);

  return data;
};
