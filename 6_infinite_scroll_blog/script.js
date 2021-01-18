let limit = 5
let page = 1

function showPosts() {
    $.ajax({
        url: `https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`,
        method: 'get',
        dataType: 'json',
        success: function (data) {
            $.each(data, function (index, post) {
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

showPosts();

function showLoading() {
    $('.loader').addClass('show');
    setTimeout(function () {
        $('.loader').removeClass('show');
    }, 1000)
    setTimeout(function () {
        page++;
        showPosts();
    }, 200)
}

function filterCheck() {
    const text = $('input').val().toLowerCase()
    $('.post').css('display','none')
    $(`.post:contains('${text}')`).css('display','flex')
}

// event listener 
$(window).scroll(function () {
    if ($(document).scrollTop() + $(window).height() > $(document).height() - 5) {
        showLoading();
    }
})

$('input').on('input', function () {
    filterCheck();
})