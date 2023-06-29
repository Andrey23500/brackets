module.exports = function check(str, bracketsConfig) {
    if (str.length === 1) return false;
    if (str.length % 2 !== 0) return false;

    let map = [];
    for (let i = 0; i < bracketsConfig.length; i++) {
        map.push(bracketsConfig[i][0] + bracketsConfig[i][1]);
    }

    for (let y = 0; y < str.length; y++) {
        for (let i = 0; i < map.length; i++) {
            if (str.indexOf(map[i]) < 0) continue;
            else {
                str = str.replace(map[i], '');
                y = 0;
                i = 0;
            }
        }
    }

    if (str.length == 0) return true;
    else return false;
}
