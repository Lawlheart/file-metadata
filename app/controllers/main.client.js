function truncate(str, len) {
  if(str.length <= len) {
    return str;
  } else {
    return str.slice(0, len - 3) + "...";
  }
}

function renderData(data) {
  var HTML = "";
  HTML += "<h4 class='title'>Results</h4>"
  HTML += "<p class='file-data'><span class='key'>Name</span> " + data.originalname + "</p>";
  HTML += "<p class='file-data'><span class='key'>Type</span> " + data.mimetype + "</p>";
  HTML += "<p class='file-data'><span class='key'>Size</span> " + data.size + " bytes</p>";
  HTML += "<p class='file-data'><span class='key'>Encoding</span> " + data.encoding + "</p>";
  $('#output').html(HTML)
}

$('body').on('change', '#upload', function(e) {
  var filename = truncate(e.target.files[0].name, 20)
  console.log(e.target.files[0])
  $('#upload-label').text(filename)
});

$('body').on('submit', '.upload-box', function(e) {
  e.preventDefault();
  var fd = new FormData();
  var file = document.getElementById('upload').files[0];
  fd.append('attachment', file);
  $.ajax({
    url: 'api/fileanalyse/',
    data: fd,
    processData: false,
    contentType: false, 
    type: 'POST',
    success: function(data){
      console.log(data);
      renderData(data);
    }
  })
});