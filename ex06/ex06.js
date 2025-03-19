function login() {
  const username = "huanrose@gmail.com";
  const password = "123456";
  const usernameInput = document.getElementById("username").value;
  const passwordInput = document.getElementById("password").value;
  if (usernameInput === username && passwordInput === password) {
    console.log("Đăng nhập thành công!");
  } else {
    console.log("Đăng nhập thất bại!");
  }
}
