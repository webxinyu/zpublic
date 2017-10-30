/* mui本地存储和本地获取 */
function set(type, value) {
    localStorage.setItem(type, value);
}
function get(type) {
    return localStorage.getItem(type);
}