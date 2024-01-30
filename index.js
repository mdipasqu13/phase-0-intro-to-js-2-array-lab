const cats = [
    "Milo",
    "Otis",
    "Garfield",
  ];
  function destructivelyAppendCat(name) {
    cats.push(name);
  }
  function destructivelyPrependCat(name) {
    cats.unshift(name);
  }
  function destructivelyRemoveLastCat() {
    cats.pop();
  }
  function destructivelyRemoveFirstCat() {
    cats.shift();
  }
  function appendCat(name) {
    const copyOfCats = cats.slice(0,3);
    copyOfCats.push(name);
    return copyOfCats;
  }
  function prependCat(name) {
    const copyOfCats = cats.slice(0,3);
    copyOfCats.unshift(name);
    return copyOfCats;
  }
  function removeLastCat() {
    const copyOfCats = cats.slice(0,2);
    return copyOfCats;
  }
  function removeFirstCat() {
    const copyOfCats = cats.slice(1,3)
    return copyOfCats;
  }