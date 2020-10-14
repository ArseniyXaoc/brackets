
//const bracketsConfig = [['(', ')'], ['[', ']'], ['{', '}']];;
module.exports = function check(str, bracketsConfig) {
  let brCfg = str.split('');
  let ouput;
  function del(str) {    
    ouput = str.slice();
    bracketsConfig.forEach(item => {
      for (let i = 0; i < ouput.length; i++) {
        if (ouput[i] == item[0] && ouput[i + 1] == item[1]) ouput.splice(i, 2);
      }
    })
    if(ouput.length == 0) return true;
    if(ouput.toString() == str.toString()) return false;
    return del(ouput);
  }
let result = del(brCfg);
return result;  
}

// your solution


//console.log(check('([{}])', bracketsConfig));