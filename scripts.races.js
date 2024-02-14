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

  //显示月份容器
  var monthRow = document.getElementById('monthRow');
  monthRow.style.display = 'flex'; 
}

function selectMonth(month) {
  if (currentYearElement) {
    var year = currentYearElement.textContent;
    var info = yearData[year][month];
    if (info) {
      showInfoPanel(month, info);
    } else {
      alert("No information available for " + month + " " + year);
    }
  } else {
    alert("Please select a year first.");
  }
}

function showInfoPanel(month, info) {
  var infoTitle = document.getElementById("infoTitle");
  var infoContent = document.getElementById("infoContent");
  infoTitle.textContent = month;
  infoContent.innerHTML = info;
  
  var infoPanel = document.getElementById("infoPanel");
  infoPanel.style.display = "block";
}

function showNextYear() {
  var years = document.querySelectorAll('.year');
  var nextYearIndex = Array.from(years).indexOf(currentYearElement) + 1;
  if (nextYearIndex < years.length) {
    selectYear(years[nextYearIndex]);
  }
}

// 存储每年每个月的信息
var yearData = {
  "2023": {
    "January": "Information for January 2023",
    "February": "Information for February 2023",
    // 其他月份的信息
  },
  "2024": {
    "January": "Information for January 2024",
    "February": "Information for February 2024",
    // 其他月份的信息
  },
  // 其他年份的信息
};

function selectMonth(month) {
  if (currentYearElement) {
    var year = currentYearElement.textContent;
    var info = yearData[year][month];
    if (info) {
      alert(info);
    } else {
      alert("No information available for " + month + " " + year);
    }
  } else {
    alert("Please select a year first.");
  }
}

//失败！