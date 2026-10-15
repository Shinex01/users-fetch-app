const statusEl = document.querySelector("#status");
const listEl = document.querySelector("#userList");
const refreshBtn = document.querySelector("#refresh");

const getUser = async () => {
  try {
    listEl.innerHTML = "";
    statusEl.textContent = "Loading...";
    refreshBtn.classList.remove("visible");

    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) throw new Error("Request failed");
    const users = await response.json();
    users.forEach((user) => {
      const li = document.createElement("li");
      li.textContent = `${user.name} - ${user.email}`;
      listEl.append(li);
    });

    statusEl.textContent = "";
  } catch (error) {
    console.error(error);
    statusEl.textContent = "Couldn't load users, please try again.";
    refreshBtn.classList.add("visible");
  }
};

refreshBtn.addEventListener("click", getUser);
getUser();
