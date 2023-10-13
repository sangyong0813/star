function saveCookieDay(name, value, day) {
  let now = new Date();
  now.setDate(now.getDate() + day);
  name = `${name}=${value};expires=${now.toUTCString()};`;
  document.cookie = name;
}

function saveCookieSecond(name, value, second) {
  let now = new Date();
  now.setDate(now.getDate() + second);
  name = `${name}=${value};expires=${now.toUTCString()};`;
  document.cookie = name;
}

function readCookie(searchName) {
  let returnVal = "";
  let cook = document.cookie;
  let cookArr = cook.split(";");
  for (let i = 0; i < cookArr.length; i++) {
    let cookName = cookArr[i].split("=")[0];

    if (cookName.trim() == searchName) {
      returnVal = cookArr[i].split("=")[1];
    }
  }
  return returnVal;
}
