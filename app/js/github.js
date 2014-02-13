function getGithubData()
{
  $.getJSON("https://api.github.com/users/AaronFoltz/repos?access_token=80be513b313e5ba59de3d178dc0ac7d9a3aaeee9&callback=?", function (result) {
    var repos = result.data;

    // Sort
    repos.sort(function (a,b) {
      return b.updated_at - a.updated_at;
    });

    $.each(repos, function (i, repo) {
      addRepo(repo);
    });

    setupProjects();
  });

  // $.getJSON("https://api.github.com/users/jessex/gists?callback=?", function (result) {
  //   var gists = result.data;

  //   $(function () {
  //       $("#num-gists").text(gists.length);
  //   });
  // });
}

function addRepo(repo) {
  // Language
  if (repo.language == null || repo.language == undefined) {
      repo.language = '';
  }

  var $item = $("<div>").addClass("repo");
  $item.css('width', "45%");

  var $link = $("<a>").attr("href", repo.html_url).appendTo($item);
  $link.append($("<h2>").text(repo.name));
  $link.append($("<h3>").text(repo.language));
  $link.append($("<p>").text(repo.description));
  $item.appendTo("#repos");
}

function setupProjects()
{
    // var container = document.querySelector('#repos');
    // var msnry = new Masonry( container, {
    //   // options
    //   columnWidth: 200,
    //   itemSelector: '.repo',
    //   gutter: 10
    // });

  var container = document.querySelector('#repos');
  var pckry = new Packery( container, {
    // options
    itemSelector: '.repo',
    columnWidth: 25,
    gutter: 5
  });
// $('#repos').isotope({
//   // options
//   itemSelector : '.repo',
//   layoutMode : 'masonry',
//   gutterWidth: 10
// });

  // $("#repos").nested({
  //   minWidth: 200,
  //   minColumn: 3,
  //   gutter: 5  });
}