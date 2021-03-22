//dominant writing direction exersize.
require('./scripts.js');

function repeat(n, action) {
    for (let i = 0; i < n; i++) {
      action(i);
    }
  }
  
  function characterScript(code) {
    for (let script of SCRIPTS) {
      if (script.ranges.some(([from, to]) => {
        return code >= from && code < to;
      })) {
        return script;
      }
    }
    return null;
  }
  
  function countBy(items, groupName) {
    let counts = [];
    for (let item of items) {
      let name = groupName(item);
      let known = counts.findIndex(c => c.name == name);
      if (known == -1) {
        counts.push({name, count: 1});
      } else {
        counts[known].count++;
      }
    }
    return counts;
  }
  
  function textScripts(text) {
    let scripts = countBy(text, char => {
      let script = characterScript(char.codePointAt(0));
      return script ? script.name : "none";
    }).filter(({name}) => name != "none");
  
    let total = scripts.reduce((n, {count}) => n + count, 0);
    if (total == 0) return "No scripts found";
  
    return scripts.map(({name, count}) => {
      return {percent: Math.round(count * 100 / total), name};
    });
  }

  function dominantDirection(word){
    let langArr = textScripts(word);
    //console.log(langArr);
    let wordLang = langArr.reduce((a,b) => a.percent < b.percent ? b : a);
    //console.log(wordLang);
    let langHold = wordLang.lang;
    let lang = SCRIPTS.reduce((a, b) => a.name == langHold ? a : b);
    //console.log(lang);
    return lang.direction;
  }


console.log(dominantDirection("Hello!"));
console.log(dominantDirection("Hey, مساء الخير"));
