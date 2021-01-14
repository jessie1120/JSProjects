let limit = 5
let page = 1

function showPosts() {
    $.ajax({
        url: `https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`,
        method: 'get',
        dataType: 'json',
        success: function (data) {
            $.each(data,function(index,post){
                const postDiv = $('<div/>').addClass('post');
                postDiv.html(`
                <div class="number">${post.id}</div>
                <div class="post-info">
                  <h2 class="post-title">${post.title}</h2>
                  <p class="post-body">${post.body}</p>
                </div>
              `)
                $('#posts-container').append(postDiv);
            })
            // data.forEach(post => {
            //     const postDiv = $('<div/>').addClass('post');
            //     postDiv.html(`
            //     <div class="number">${post.id}</div>
            //     <div class="post-info">
            //       <h2 class="post-title">${post.title}</h2>
            //       <p class="post-body">${post.body}</p>
            //     </div>
            //   `)
            //     $('#posts-container').append(postDiv);
            // })
        }
    })
}