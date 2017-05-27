// Your task is to use this url to make an AJAX request. Have someone use the provided index.js to render the returned data to the provided index.html. Use the labels to append the right data in the h4's, h3's and img tags.


function fetchData(){
    $.ajax({
        url: 'https://randomuser.me/api/',
        success: function(response){
          var data = response['results'][0]
          $('#fullname').append(`${data.name.title} ${data.name.first} ${data.name.last}`)
        }
    })
}

$(function() {
  $('#btn').on('click', function(e){
    e.preventDefault()
    fetchData()
  })
});
