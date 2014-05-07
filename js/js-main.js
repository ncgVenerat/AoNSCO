function jmp2LocalPage(whichPage) {
	location.href = whichPage;
}

google.load("visualization", "1");
      google.setOnLoadCallback(draw);
      function draw() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Order');
        data.addColumn('string', 'Specimen Count');
        data.addRows(33);
        data.setCell(0, 0, 'Anoplura');
        data.setCell(0, 1, '2');
        data.setCell(1, 0, 'Archaeognatha');
        data.setCell(1, 1, '372');
        data.setCell(2, 0, 'Blattodea');
        data.setCell(2, 1, '32819');
        data.setCell(3, 0, 'Coleoptera');
        data.setCell(3, 1, '273310');
        data.setCell(4, 0, 'Dermaptera');
        data.setCell(4, 1, '10746');
        data.setCell(5, 0, 'Diptera');
        data.setCell(5, 1, '252071');
        data.setCell(6, 0, 'Embioptera');
        data.setCell(6, 1, '51');
        data.setCell(7, 0, 'Ephemeroptera');
        data.setCell(7, 1, '29988');
        data.setCell(8, 0, 'Grylloblattodea');
        data.setCell(8, 1, '22');
        data.setCell(9, 0, 'Hemiptera');
        data.setCell(9, 1, '39885');
        data.setCell(10, 0, 'Hymenoptera');
        data.setCell(10, 1, '207286');
        data.setCell(11, 0, 'Isoptera');
        data.setCell(11, 1, '2001');
        data.setCell(12, 0, 'Lepidoptera');
        data.setCell(12, 1, '117564');
        data.setCell(13, 0, 'Mallophaga');
        data.setCell(13, 1, '15');
        data.setCell(14, 0, 'Mantodea');
        data.setCell(14, 1, '13031');
        data.setCell(15, 0, 'Mecoptera');
        data.setCell(15, 1, '723');
        data.setCell(16, 0, 'Megaloptera');
        data.setCell(16, 1, '3629');
        data.setCell(17, 0, 'Neuroptera');
        data.setCell(17, 1, '3654');
        data.setCell(18, 0, 'Odonata');
        data.setCell(18, 1, '51179');
        data.setCell(19, 0, 'Orthoptera');
        data.setCell(19, 1, '496422');
        data.setCell(20, 0, 'Phasmatodea');
        data.setCell(20, 1, '11935');
        data.setCell(21, 0, 'Phthiraptera');
        data.setCell(21, 1, '1149');
        data.setCell(22, 0, 'Plecoptera');
        data.setCell(22, 1, '9625');
        data.setCell(23, 0, 'Psocoptera');
        data.setCell(23, 1, '876');
        data.setCell(24, 0, 'Raphidioptera');
        data.setCell(24, 1, '184');
        data.setCell(25, 0, 'Rhaphidioptera');
        data.setCell(25, 1, '43');
        data.setCell(26, 0, 'Siphonaptera');
        data.setCell(26, 1, '587');
        data.setCell(27, 0, 'Strepsiptera');
        data.setCell(27, 1, '58');
        data.setCell(28, 0, 'Thysanoptera');
        data.setCell(28, 1, '1829');
        data.setCell(29, 0, 'Thysanura');
        data.setCell(29, 1, '143');
        data.setCell(30, 0, 'Trichoptera');
        data.setCell(30, 1, '64315');
        data.setCell(31, 0, 'Undetermined');
        data.setCell(31, 1, '41171');
        data.setCell(32, 0, 'Zoraptera');
        data.setCell(32, 1, '1');
          
        var outputDiv = document.getElementById('wcdiv');
        var wc = new WordCloud(outputDiv);
        wc.draw(data, null);
      }


/*

A list of words, where the size and color of each word is determined
by the number of times it appears in the text.
Uses the Google Visalization API.

Data Format
  Any number of rows and columns.
  All string values are concatenated, other column types are ignored.

Configuration options:
  none

Methods
  none

Events
  none

*/

WordCloud = function(container) {
  this.container = container;
}

WordCloud.DEFAULT_STOP_WORDS = {
  "a": 1,
  "an": 1,
  "and": 1,
  "is": 1,
  "or": 1,
  "the": 1
};

// Add all word in a given text to a list and map.
// list is a list of unique words.
// map is a set of all found words.
// stopWords is a set of all words to ignore.
WordCloud.addWords = function(text, list, map, stopWords) {
  var word = '';
  for (var i = 0; i < text.length; i++) {
    var c = text.charAt(i);
    if (' ,.<>[]{}/`~!@#$%^&*()-_=+\'"\\|:;?\r\r\n'.indexOf(c) >= 0) {
      if (word.length > 0) {
        WordCloud.addWord(word, list, map, stopWords);
      }
      word = '';
    } else {
      word += c;
    }
  }
  if (word.length > 0) {
    WordCloud.addWord(word, list, map, stopWords);
  }
};

// Add a single word to a list and map.
// list is a list of unique words.
// map is a set of all found words.
// stopWords is a set of all words to ignore.
WordCloud.addWord = function(word, list, map, stopWords) {
  var wl = word.toLowerCase();
  if (stopWords[wl]) {
    return; // Ignore stop words
  }
  if (map[wl]) {
    map[wl]++;
  } else {
    map[wl] = 1;
    list.push(word);
  }
};

WordCloud.MIN_UNIT_SIZE = 1;
WordCloud.MAX_UNIT_SIZE = 7;
WordCloud.RANGE_UNIT_SIZE = WordCloud.MAX_UNIT_SIZE - WordCloud.MIN_UNIT_SIZE;

WordCloud.prototype.draw = function(data, options) {

  var wordMap = {};
  var wordList = [];

  options = options || {};
  var stopWords = WordCloud.DEFAULT_STOP_WORDS;
  if (options.stopWords) {
    stopWords = {};
    var words = options.stopWords.toLowerCase().split(/ |,/);
    for (var i = 0; i < words.length; i++) {
      stopWords[words[i]] = 1;
    }
  }

  for (var rowInd = 0; rowInd < data.getNumberOfRows(); rowInd++) {
    for (var colInd = 0; colInd < data.getNumberOfColumns(); colInd++) {
      if (data.getColumnType(colInd) == 'string') {
        WordCloud.addWords(data.getValue(rowInd, colInd), wordList, wordMap, stopWords);
      }
    }
  }

  // Compute frequency range
  var minFreq = 999999;
  var maxFreq = 0;
  for (var word in wordMap) {
    var f = wordMap[word];
    minFreq = Math.min(minFreq, f);
    maxFreq = Math.max(maxFreq, f);
  }
  var range = maxFreq - minFreq;
  range = Math.max(range, 4);

  // Idea: Add option to sort by text, freq or no sort

  var html = [];
  html.push('<div class="word-cloud">');
  for (var i = 0; i < wordList.length; i++) {
    var word = wordList[i];
    var text = word;
    var freq = wordMap[word.toLowerCase()];
    var size = WordCloud.MIN_UNIT_SIZE +
         Math.round((freq - minFreq) / range * WordCloud.RANGE_UNIT_SIZE);
    html.push('<span class="word-cloud-', size, '">', text, '</span> ');
  }
  html.push('</div>');

  this.container.innerHTML = html.join('');
};
