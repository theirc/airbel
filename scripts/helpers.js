function _getUrlVars() {
  const vars = {};
  window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, (m, key, value) => {
    vars[key] = value;
  });
  return vars;
}

export function getUrlParam(parameter) {
  if (window.location.href.indexOf(parameter) > -1) {
    return _getUrlVars()[parameter]
  }
  return false
}

export function inEditor() {
  return window.location.host === "app.cloudcannon.com"
}