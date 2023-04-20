$(document).ready(function () {
    $('#searchUser').on('keyup', function (e) {
        let username = e.target.value;
        $.ajax({
            url: 'https://api.github.com/users/' + username,
        }).done(function (user) {
            $('#profile').html(`
            <div class="card" style="width: 18rem;">
  <img src="${user.avatar_url}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${user.login}</h5>
    <p class="card-text">ID: ${user.id}</p>
    <a href="${user.html_url}" class="btn btn-primary">Click Link</a>
  </div>
</div>
            `)
        })
    })
})