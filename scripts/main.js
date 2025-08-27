const image = document.querySelector("img");

image.onclick = () => {
  const src = image.getAttribute("src");

  if (src == "images/1.jpg") {
    image.setAttribute("src", "images/2.jpg");
  } else {
    image.setAttribute("src", "images/1.jpg");
  }
};

let button = document.querySelector("button");
let heading = document.querySelector("h1");

function setUserName() {
  const UserName = prompt("请输入用户名：");

  if (!UserName) {
    setUserName();
  } else {
    localStorage.setItem("name", UserName);
    heading.textContent = `你好,${UserName}`;
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const NewName = localStorage.getItem("name");

  heading.textContent = `你好,${NewName}`;
}

button.onclick = function () {
  setUserName();
};
