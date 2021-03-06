function displaySearchResults(results, store) {
  var searchResults = document.getElementById('search-results');

    if (results.length) { // Are there any results?
      var appendString = '';

      for (var i = 0; i < results.length; i++) {  // Iterate over the results
        var item = store[results[i].ref];
        appendString += '<li><a href="' + item.url + '"><h3>' + item.title + '</h3></a>';
        appendString += '<p>' + item.description + '</p></li>';
      }

      searchResults.innerHTML = appendString;
    } else {
      searchResults.innerHTML = '<li>No results found</li>';
    }
  }

  function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split('&');

    for (var i = 0; i < vars.length; i++) {
      var pair = vars[i].split('=');

      if (pair[0] === variable) {
        return decodeURIComponent(pair[1].replace(/\+/g, '%20'));
      }
    }
  }

  function getVariable() {
    var variable = document.getElementById('search-box').value;

    return variable
  }

  function search() {
    var searchTerm = getVariable();

    if (searchTerm) {
      document.getElementById('search-box').setAttribute("value", searchTerm);

    // Initalize lunr with the fields it will be searching on. 
    // Title is boosted by 10 and category by 5
    var idx = lunr(function () {
      this.ref('id');
      this.field('title', { boost: 10 });
      this.field('author');
      this.field('category', { boost: 5 });
      this.field('content');


    for (var key in window.store) { // Add the data to lunr
      this.add({
        'id': key,
        'title': window.store[key].title,
        'author': window.store[key].author,
        'category': window.store[key].category,
        'content': window.store[key].content
      });
    }
    

  });
    
      var results = idx.search(searchTerm); // Get lunr to perform a search
      displaySearchResults(results, window.store); 

    }
  }


  document.getElementById('search-form').addEventListener('submit', function(event) { search(); event.preventDefault(); });