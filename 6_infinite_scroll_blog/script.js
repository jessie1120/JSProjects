let limit = 5
let page = 1

$.ajax({
    url: `https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`,
    method: 'get',
    dataType: 'json',
    success: function (data) {
      console.log(data);
    }  
})
