var currentYearElement = null; // 记录当前选中的年份元素

function selectYear(element) {
  // 如果已经选中了年份，则取消之前选中年份的样式
  if (currentYearElement) {
    currentYearElement.style.transform = 'scale(1)';
    currentYearElement.style.color = '#000'; // 恢复默认颜色
  }
  
  // 添加被点击年份的样式
  element.style.transform = 'scale(1.1)';
  element.style.color = '#ff0000'; // 改变颜色
  currentYearElement = element; // 更新当前选中的年份元素
}

function selectMonth(month) {
  if (currentYearElement) {
    alert("Selected Year: " + currentYearElement.textContent + ", Selected Month: " + month);
  } else {
    alert("Please select a year first.");
  }
}

function showNextYear() {
  var years = document.querySelectorAll('.year');
  var nextYearIndex = Array.from(years).indexOf(currentYearElement) + 1;
  if (nextYearIndex < years.length) {
    selectYear(years[nextYearIndex]);
  }
}