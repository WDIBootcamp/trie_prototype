Trie = function(){
  this.characters = {};

};

Trie.prototype.learn = function(word, index){
  // This function should add the given word,
  // starting from the given index,
  // to this Trie.

  // It will be recursive.  It will tell
  // the correct child of this Trie to learn the word
  // starting from a later index.

  // Consider what the learn function should do
  // when it reaches the end of the word?
  // A word does not necessarily end at a leaf.
  // You must mark nodes which are the ends of words,
  // so that the words can be reconstructed later.

  word = word.toLowerCase();

  var i = index || 0;

  var w = word[i];

  if (this.characters[w]) {
    this.characters[w].learn(word, i+1);
  }else {
    if (i === word.length) {
      this.isWord = true;
    }else {
      this.characters[w] = new Trie();
      this.characters[w].learn(word, i+1);
    }
  }

};

Trie.prototype.getWords = function(words, currentWord){
  // This function will return all the words which are
  // contained in this Trie.
  // it will use currentWord as a prefix,
  // since a Trie doesn't know about its parents.
  words = words || [];
  currentWord = currentWord || "";

  if (this.isWord)  {
    words.push(currentWord);
  }

  for (var c in this.characters) {

    var newWord = currentWord.concat(c);

    this.characters[c].getWords(words, newWord);
  }

  return words;

};

Trie.prototype.find = function(entry, index){
  // This function will return the node in the trie
  // which corresponds to the end of the passed in word.
  var i = index || 0;
  var w = entry[i];
  var result = null;

  if (this.characters[w])  {
    if (i === entry.length-1){
      result = this.characters[w];
    }else{
      result = this.characters[w].find(entry, i+1);
    }
  }
  return result;

  // Be sure to consider what happens if the word is not in this Trie.
};

Trie.prototype.autoComplete = function(prefix){
  // This function will return all completions
  // for a given prefix.
  // It should use find and getWords.

  if (this.find(prefix)){
    words = this.find(prefix).getWords();
  }else {
    words = [];
  }
  for (var i=0; i<words.length; i++)  {
    words[i] = prefix + words[i];
  }
  return words;

};
