function getListItems(listName, success, failure) {
    var requestUri = _spPageContextInfo.webAbsoluteUrl +
                     "/_api/web/lists/getbytitle('" + listName + "')/items";
    $.ajax({
      url: requestUri,
      method: "GET",
      headers: { "Accept": "application/json; odata=verbose" },
      success: function (data) {
        success(data.d.results);
      },
      error: function (data) {
        failure(data);
      }
    });
  }
  