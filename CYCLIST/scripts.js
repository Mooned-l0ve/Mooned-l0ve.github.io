document.querySelectorAll('nav ul li').forEach(item => {
    item.addEventListener('click', () => {
      // 添加点击导航菜单时的响应动作
        console.log('Clicked:', item.textContent)
    });
  });

  // 获取登录弹窗元素
var loginPopup = document.getElementById("loginPopup");

// 打开登录弹窗
function openLoginPopup() {
  console.log('openLoginPopup()called');
  loginPopup.style.display = "block";
}

// 关闭登录弹窗
function closeLoginPopup() {
  loginPopup.style.display = "none";
}

 //当用户完成登录后，设置一个标志，不再显示登录弹窗
var isLoggedIn = false;

// 检查用户登录状态
function checkLoginStatus() {
  if (!isLoggedIn) {
    openLoginPopup();
  }
}