document.querySelectorAll('nav ul li').forEach(item => {
    item.addEventListener('click', () => {
      // 添加点击导航菜单时的响应动作
        console.log('Clicked:', item.textContent)
    });
  });