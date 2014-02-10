




<!DOCTYPE html>
<html>
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>isotope-perfectmasonry/jquery.isotope.perfectmasonry.js at master · zonear/isotope-perfectmasonry</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub" />
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png" />
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png" />
    <meta property="fb:app_id" content="1401488693436528"/>

      <meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="zonear/isotope-perfectmasonry" name="twitter:title" /><meta content="isotope-perfectmasonry - PerfectMasonry extension for Isotope" name="twitter:description" /><meta content="https://2.gravatar.com/avatar/2438bf9114889cf09be2b1eb31b05227?d=https%3A%2F%2Fidenticons.github.com%2Fd86c6bb442ca67dcbe912333e6348e33.png&amp;r=x&amp;s=400" name="twitter:image:src" />
<meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="https://2.gravatar.com/avatar/2438bf9114889cf09be2b1eb31b05227?d=https%3A%2F%2Fidenticons.github.com%2Fd86c6bb442ca67dcbe912333e6348e33.png&amp;r=x&amp;s=400" property="og:image" /><meta content="zonear/isotope-perfectmasonry" property="og:title" /><meta content="https://github.com/zonear/isotope-perfectmasonry" property="og:url" /><meta content="isotope-perfectmasonry - PerfectMasonry extension for Isotope" property="og:description" />

    <meta name="hostname" content="github-fe139-cp1-prd.iad.github.net">
    <meta name="ruby" content="ruby 2.1.0p0-github-tcmalloc (87d8860372) [x86_64-linux]">
    <link rel="assets" href="https://github.global.ssl.fastly.net/">
    <link rel="conduit-xhr" href="https://ghconduit.com:25035/">
    <link rel="xhr-socket" href="/_sockets" />


    <meta name="msapplication-TileImage" content="/windows-tile.png" />
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta name="selected-link" value="repo_source" data-pjax-transient />
    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="collector-cdn.github.com" name="octolytics-script-host" /><meta content="github" name="octolytics-app-id" /><meta content="4420ABB4:0891:3621B9D:52F813F9" name="octolytics-dimension-request_id" /><meta content="700531" name="octolytics-actor-id" /><meta content="AaronFoltz" name="octolytics-actor-login" /><meta content="70f8cedea4367ab0fbb1043247d28e9e6c1bbcb7a31a9bae2777a9f226391848" name="octolytics-actor-hash" />
    

    
    
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />

    <meta content="authenticity_token" name="csrf-param" />
<meta content="6kePVhUWxz27lsfBcSVo5S1rK62kF1VlJKyuXazmdt0=" name="csrf-token" />

    <link href="https://github.global.ssl.fastly.net/assets/github-da40ffa209b7fb57b957286c7911323d8ab22c6c.css" media="all" rel="stylesheet" type="text/css" />
    <link href="https://github.global.ssl.fastly.net/assets/github2-2e89649a029c98bf602f585cbda271fbb7997dc5.css" media="all" rel="stylesheet" type="text/css" />
    


      <script src="https://github.global.ssl.fastly.net/assets/frameworks-e8d62aa911c75d1d60662859d52c3cf1232675e6.js" type="text/javascript"></script>
      <script async="async" defer="defer" src="https://github.global.ssl.fastly.net/assets/github-d9a03a4d5c73ac81329ae12cb51a00bf0fc77aec.js" type="text/javascript"></script>
      
      <meta http-equiv="x-pjax-version" content="82e8b3c2aa183b1f30c4356a61c7fb3a">

        <link data-pjax-transient rel='permalink' href='/zonear/isotope-perfectmasonry/blob/520f416fa616e9e5c737d7f67bc4d51fbd4b74c3/jquery.isotope.perfectmasonry.js'>

  <meta name="description" content="isotope-perfectmasonry - PerfectMasonry extension for Isotope" />

  <meta content="1556080" name="octolytics-dimension-user_id" /><meta content="zonear" name="octolytics-dimension-user_login" /><meta content="6668551" name="octolytics-dimension-repository_id" /><meta content="zonear/isotope-perfectmasonry" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="6668551" name="octolytics-dimension-repository_network_root_id" /><meta content="zonear/isotope-perfectmasonry" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/zonear/isotope-perfectmasonry/commits/master.atom" rel="alternate" title="Recent Commits to isotope-perfectmasonry:master" type="application/atom+xml" />

  </head>


  <body class="logged_in  env-production macintosh vis-public page-blob">
    <div class="wrapper">
      
      
      
      


      <div class="header header-logged-in true">
  <div class="container clearfix">

    <a class="header-logo-invertocat" href="https://github.com/">
  <span class="mega-octicon octicon-mark-github"></span>
</a>

    
    <a href="/notifications" class="notification-indicator tooltipped downwards" data-gotokey="n" title="You have no unread notifications">
        <span class="mail-status all-read"></span>
</a>

      <div class="command-bar js-command-bar  in-repository">
          <form accept-charset="UTF-8" action="/search" class="command-bar-form" id="top_search_form" method="get">

<input type="text" data-hotkey="/ s" name="q" id="js-command-bar-field" placeholder="Search or type a command" tabindex="1" autocapitalize="off"
    
    data-username="AaronFoltz"
      data-repo="zonear/isotope-perfectmasonry"
      data-branch="master"
      data-sha="b3bb301f5026963bc1194e3df49a01348b299214"
  >

    <input type="hidden" name="nwo" value="zonear/isotope-perfectmasonry" />

    <div class="select-menu js-menu-container js-select-menu search-context-select-menu">
      <span class="minibutton select-menu-button js-menu-target">
        <span class="js-select-button">This repository</span>
      </span>

      <div class="select-menu-modal-holder js-menu-content js-navigation-container">
        <div class="select-menu-modal">

          <div class="select-menu-item js-navigation-item js-this-repository-navigation-item selected">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" class="js-search-this-repository" name="search_target" value="repository" checked="checked" />
            <div class="select-menu-item-text js-select-button-text">This repository</div>
          </div> <!-- /.select-menu-item -->

          <div class="select-menu-item js-navigation-item js-all-repositories-navigation-item">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" name="search_target" value="global" />
            <div class="select-menu-item-text js-select-button-text">All repositories</div>
          </div> <!-- /.select-menu-item -->

        </div>
      </div>
    </div>

  <span class="octicon help tooltipped downwards" title="Show command bar help">
    <span class="octicon octicon-question"></span>
  </span>


  <input type="hidden" name="ref" value="cmdform">

</form>
        <ul class="top-nav">
          <li class="explore"><a href="/explore">Explore</a></li>
            <li><a href="https://gist.github.com">Gist</a></li>
            <li><a href="/blog">Blog</a></li>
          <li><a href="https://help.github.com">Help</a></li>
        </ul>
      </div>

    


  <ul id="user-links">
    <li>
      <a href="/AaronFoltz" class="name">
        <img alt="Aaron Foltz" height="20" src="https://1.gravatar.com/avatar/2a4a5d733e688102a87f69d65da1acd2?d=https%3A%2F%2Fidenticons.github.com%2Fa49972fe89c39eefd2e184713fda634f.png&amp;r=x&amp;s=140" width="20" /> AaronFoltz
      </a>
    </li>

    <li class="new-menu dropdown-toggle js-menu-container">
      <a href="#" class="js-menu-target tooltipped downwards" title="Create new..." aria-label="Create new...">
        <span class="octicon octicon-plus"></span>
        <span class="dropdown-arrow"></span>
      </a>

      <div class="js-menu-content">
      </div>
    </li>

    <li>
      <a href="/settings/profile" id="account_settings"
        class="tooltipped downwards"
        aria-label="Account settings "
        title="Account settings ">
        <span class="octicon octicon-tools"></span>
      </a>
    </li>
    <li>
      <a class="tooltipped downwards" href="/logout" data-method="post" id="logout" title="Sign out" aria-label="Sign out">
        <span class="octicon octicon-log-out"></span>
      </a>
    </li>

  </ul>

<div class="js-new-dropdown-contents hidden">
  

<ul class="dropdown-menu">
  <li>
    <a href="/new"><span class="octicon octicon-repo-create"></span> New repository</a>
  </li>
  <li>
    <a href="/organizations/new"><span class="octicon octicon-organization"></span> New organization</a>
  </li>


    <li class="section-title">
      <span title="zonear/isotope-perfectmasonry">This repository</span>
    </li>
      <li>
        <a href="/zonear/isotope-perfectmasonry/issues/new"><span class="octicon octicon-issue-opened"></span> New issue</a>
      </li>
</ul>

</div>


    
  </div>
</div>

      

      




          <div class="site" itemscope itemtype="http://schema.org/WebPage">
    
    <div class="pagehead repohead instapaper_ignore readability-menu">
      <div class="container">
        

<ul class="pagehead-actions">

    <li class="subscription">
      <form accept-charset="UTF-8" action="/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="authenticity_token" type="hidden" value="6kePVhUWxz27lsfBcSVo5S1rK62kF1VlJKyuXazmdt0=" /></div>  <input id="repository_id" name="repository_id" type="hidden" value="6668551" />

    <div class="select-menu js-menu-container js-select-menu">
      <a class="social-count js-social-count" href="/zonear/isotope-perfectmasonry/watchers">
        16
      </a>
      <span class="minibutton select-menu-button with-count js-menu-target" role="button" tabindex="0">
        <span class="js-select-button">
          <span class="octicon octicon-eye-watch"></span>
          Watch
        </span>
      </span>

      <div class="select-menu-modal-holder">
        <div class="select-menu-modal subscription-menu-modal js-menu-content">
          <div class="select-menu-header">
            <span class="select-menu-title">Notification status</span>
            <span class="octicon octicon-remove-close js-menu-close"></span>
          </div> <!-- /.select-menu-header -->

          <div class="select-menu-list js-navigation-container" role="menu">

            <div class="select-menu-item js-navigation-item selected" role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input checked="checked" id="do_included" name="do" type="radio" value="included" />
                <h4>Not watching</h4>
                <span class="description">You only receive notifications for conversations in which you participate or are @mentioned.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye-watch"></span>
                  Watch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_subscribed" name="do" type="radio" value="subscribed" />
                <h4>Watching</h4>
                <span class="description">You receive notifications for all conversations in this repository.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye-unwatch"></span>
                  Unwatch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_ignore" name="do" type="radio" value="ignore" />
                <h4>Ignoring</h4>
                <span class="description">You do not receive any notifications for conversations in this repository.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-mute"></span>
                  Stop ignoring
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

          </div> <!-- /.select-menu-list -->

        </div> <!-- /.select-menu-modal -->
      </div> <!-- /.select-menu-modal-holder -->
    </div> <!-- /.select-menu -->

</form>
    </li>

  <li>
  

  <div class="js-toggler-container js-social-container starring-container ">
    <a href="/zonear/isotope-perfectmasonry/unstar"
      class="minibutton with-count js-toggler-target star-button starred upwards"
      title="Unstar this repository" data-remote="true" data-method="post" rel="nofollow">
      <span class="octicon octicon-star-delete"></span><span class="text">Unstar</span>
    </a>

    <a href="/zonear/isotope-perfectmasonry/star"
      class="minibutton with-count js-toggler-target star-button unstarred upwards"
      title="Star this repository" data-remote="true" data-method="post" rel="nofollow">
      <span class="octicon octicon-star"></span><span class="text">Star</span>
    </a>

      <a class="social-count js-social-count" href="/zonear/isotope-perfectmasonry/stargazers">
        94
      </a>
  </div>

  </li>


        <li>
          <a href="/zonear/isotope-perfectmasonry/fork" class="minibutton with-count js-toggler-target fork-button lighter upwards" title="Fork this repo" rel="nofollow" data-method="post">
            <span class="octicon octicon-git-branch-create"></span><span class="text">Fork</span>
          </a>
          <a href="/zonear/isotope-perfectmasonry/network" class="social-count">37</a>
        </li>


</ul>

        <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
          <span class="repo-label"><span>public</span></span>
          <span class="mega-octicon octicon-repo"></span>
          <span class="author">
            <a href="/zonear" class="url fn" itemprop="url" rel="author"><span itemprop="title">zonear</span></a>
          </span>
          <span class="repohead-name-divider">/</span>
          <strong><a href="/zonear/isotope-perfectmasonry" class="js-current-repository js-repo-home-link">isotope-perfectmasonry</a></strong>

          <span class="page-context-loader">
            <img alt="Octocat-spinner-32" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
          </span>

        </h1>
      </div><!-- /.container -->
    </div><!-- /.repohead -->

    <div class="container">
      

      <div class="repository-with-sidebar repo-container new-discussion-timeline js-new-discussion-timeline  ">
        <div class="repository-sidebar">
            

<div class="sunken-menu vertical-right repo-nav js-repo-nav js-repository-container-pjax js-octicon-loaders">
  <div class="sunken-menu-contents">
    <ul class="sunken-menu-group">
      <li class="tooltipped leftwards" title="Code">
        <a href="/zonear/isotope-perfectmasonry" aria-label="Code" class="selected js-selected-navigation-item sunken-menu-item" data-gotokey="c" data-pjax="true" data-selected-links="repo_source repo_downloads repo_commits repo_tags repo_branches /zonear/isotope-perfectmasonry">
          <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

        <li class="tooltipped leftwards" title="Issues">
          <a href="/zonear/isotope-perfectmasonry/issues" aria-label="Issues" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-gotokey="i" data-selected-links="repo_issues /zonear/isotope-perfectmasonry/issues">
            <span class="octicon octicon-issue-opened"></span> <span class="full-word">Issues</span>
            <span class='counter'>9</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>

      <li class="tooltipped leftwards" title="Pull Requests">
        <a href="/zonear/isotope-perfectmasonry/pulls" aria-label="Pull Requests" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-gotokey="p" data-selected-links="repo_pulls /zonear/isotope-perfectmasonry/pulls">
            <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull Requests</span>
            <span class='counter'>2</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>


        <li class="tooltipped leftwards" title="Wiki">
          <a href="/zonear/isotope-perfectmasonry/wiki" aria-label="Wiki" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="repo_wiki /zonear/isotope-perfectmasonry/wiki">
            <span class="octicon octicon-book"></span> <span class="full-word">Wiki</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>
    </ul>
    <div class="sunken-menu-separator"></div>
    <ul class="sunken-menu-group">

      <li class="tooltipped leftwards" title="Pulse">
        <a href="/zonear/isotope-perfectmasonry/pulse" aria-label="Pulse" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="pulse /zonear/isotope-perfectmasonry/pulse">
          <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped leftwards" title="Graphs">
        <a href="/zonear/isotope-perfectmasonry/graphs" aria-label="Graphs" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="repo_graphs repo_contributors /zonear/isotope-perfectmasonry/graphs">
          <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped leftwards" title="Network">
        <a href="/zonear/isotope-perfectmasonry/network" aria-label="Network" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-selected-links="repo_network /zonear/isotope-perfectmasonry/network">
          <span class="octicon octicon-git-branch"></span> <span class="full-word">Network</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>
    </ul>


  </div>
</div>

              <div class="only-with-full-nav">
                

  

<div class="clone-url open"
  data-protocol-type="http"
  data-url="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone">
  <h3><strong>HTTPS</strong> clone URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="https://github.com/zonear/isotope-perfectmasonry.git" readonly="readonly">

    <span class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="https://github.com/zonear/isotope-perfectmasonry.git" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>

  

<div class="clone-url "
  data-protocol-type="ssh"
  data-url="/users/set_protocol?protocol_selector=ssh&amp;protocol_type=clone">
  <h3><strong>SSH</strong> clone URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="git@github.com:zonear/isotope-perfectmasonry.git" readonly="readonly">

    <span class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="git@github.com:zonear/isotope-perfectmasonry.git" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>

  

<div class="clone-url "
  data-protocol-type="subversion"
  data-url="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone">
  <h3><strong>Subversion</strong> checkout URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="https://github.com/zonear/isotope-perfectmasonry" readonly="readonly">

    <span class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="https://github.com/zonear/isotope-perfectmasonry" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>


<p class="clone-options">You can clone with
      <a href="#" class="js-clone-selector" data-protocol="http">HTTPS</a>,
      <a href="#" class="js-clone-selector" data-protocol="ssh">SSH</a>,
      or <a href="#" class="js-clone-selector" data-protocol="subversion">Subversion</a>.
  <span class="octicon help tooltipped upwards" title="Get help on which URL is right for you.">
    <a href="https://help.github.com/articles/which-remote-url-should-i-use">
    <span class="octicon octicon-question"></span>
    </a>
  </span>
</p>

  <a href="http://mac.github.com" data-url="github-mac://openRepo/https://github.com/zonear/isotope-perfectmasonry" class="minibutton sidebar-button js-conduit-rewrite-url">
    <span class="octicon octicon-device-desktop"></span>
    Clone in Desktop
  </a>


                <a href="/zonear/isotope-perfectmasonry/archive/master.zip"
                   class="minibutton sidebar-button"
                   title="Download this repository as a zip file"
                   rel="nofollow">
                  <span class="octicon octicon-cloud-download"></span>
                  Download ZIP
                </a>
              </div>
        </div><!-- /.repository-sidebar -->

        <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>
          


<!-- blob contrib key: blob_contributors:v21:cf7dfc77c7a4537d32b3418da1e2d475 -->

<p title="This is a placeholder element" class="js-history-link-replace hidden"></p>

<a href="/zonear/isotope-perfectmasonry/find/master" data-pjax data-hotkey="t" class="js-show-file-finder" style="display:none">Show File Finder</a>

<div class="file-navigation">
  

<div class="select-menu js-menu-container js-select-menu" >
  <span class="minibutton select-menu-button js-menu-target" data-hotkey="w"
    data-master-branch="master"
    data-ref="master"
    role="button" aria-label="Switch branches or tags" tabindex="0">
    <span class="octicon octicon-git-branch"></span>
    <i>branch:</i>
    <span class="js-select-button">master</span>
  </span>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax>

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="select-menu-title">Switch branches/tags</span>
        <span class="octicon octicon-remove-close js-menu-close"></span>
      </div> <!-- /.select-menu-header -->

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" class="js-select-menu-tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" class="js-select-menu-tab">Tags</a>
            </li>
          </ul>
        </div><!-- /.select-menu-tabs -->
      </div><!-- /.select-menu-filters -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item selected">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/zonear/isotope-perfectmasonry/blob/master/jquery.isotope.perfectmasonry.js"
                 data-name="master"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="master">master</a>
            </div> <!-- /.select-menu-item -->
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

    </div> <!-- /.select-menu-modal -->
  </div> <!-- /.select-menu-modal-holder -->
</div> <!-- /.select-menu -->

  <div class="breadcrumb">
    <span class='repo-root js-repo-root'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/zonear/isotope-perfectmasonry" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">isotope-perfectmasonry</span></a></span></span><span class="separator"> / </span><strong class="final-path">jquery.isotope.perfectmasonry.js</strong> <span class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="jquery.isotope.perfectmasonry.js" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>


  <div class="commit file-history-tease">
    <img alt="Mikko Tikkanen" class="main-avatar" height="24" src="https://0.gravatar.com/avatar/f28dd15797230bc4d33777393c5bddd0?d=https%3A%2F%2Fidenticons.github.com%2F34c405fcd9176841a3e9edbb8516c624.png&amp;r=x&amp;s=140" width="24" />
    <span class="author"><a href="/mikkotikkanen" rel="author">mikkotikkanen</a></span>
    <time class="js-relative-date" data-title-format="YYYY-MM-DD HH:mm:ss" datetime="2013-12-13T13:25:43-08:00" title="2013-12-13 13:25:43">December 13, 2013</time>
    <div class="commit-title">
        <a href="/zonear/isotope-perfectmasonry/commit/520f416fa616e9e5c737d7f67bc4d51fbd4b74c3" class="message" data-pjax="true" title="Fixed #15 (issue with prefectMasonry options object not defined)

Fixed #15 (issue with no elements in the grid)">Fixed</a> <a href="https://github.com/zonear/isotope-perfectmasonry/issues/15" class="issue-link" title="Uncaught TypeError: Cannot read property 'layout' of undefined jquery.isotope.perfectmasonry.js:43">#15</a> <a href="/zonear/isotope-perfectmasonry/commit/520f416fa616e9e5c737d7f67bc4d51fbd4b74c3" class="message" data-pjax="true" title="Fixed #15 (issue with prefectMasonry options object not defined)

Fixed #15 (issue with no elements in the grid)">(issue with prefectMasonry options object not defined)</a>
    </div>

    <div class="participation">
      <p class="quickstat"><a href="#blob_contributors_box" rel="facebox"><strong>1</strong> contributor</a></p>
      
    </div>
    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list">
          <li class="facebox-user-list-item">
            <img alt="Mikko Tikkanen" height="24" src="https://0.gravatar.com/avatar/f28dd15797230bc4d33777393c5bddd0?d=https%3A%2F%2Fidenticons.github.com%2F34c405fcd9176841a3e9edbb8516c624.png&amp;r=x&amp;s=140" width="24" />
            <a href="/mikkotikkanen">mikkotikkanen</a>
          </li>
      </ul>
    </div>
  </div>

<div id="files" class="bubble">
  <div class="file">
    <div class="meta">
      <div class="info">
        <span class="icon"><b class="octicon octicon-file-text"></b></span>
        <span class="mode" title="File Mode">file</span>
          <span>279 lines (221 sloc)</span>
        <span>10.62 kb</span>
      </div>
      <div class="actions">
        <div class="button-group">
            <a class="minibutton tooltipped leftwards js-conduit-openfile-check"
               href="http://mac.github.com"
               data-url="github-mac://openRepo/https://github.com/zonear/isotope-perfectmasonry?branch=master&amp;filepath=jquery.isotope.perfectmasonry.js"
               title="Open this file in GitHub for Mac"
               data-failed-title="Your version of GitHub for Mac is too old to open this file. Try checking for updates.">
                <span class="octicon octicon-device-desktop"></span> Open
            </a>
                <a class="minibutton tooltipped upwards js-update-url-with-hash"
                   title="Clicking this button will automatically fork this project so you can edit the file"
                   href="/zonear/isotope-perfectmasonry/edit/master/jquery.isotope.perfectmasonry.js"
                   data-method="post" rel="nofollow">Edit</a>
          <a href="/zonear/isotope-perfectmasonry/raw/master/jquery.isotope.perfectmasonry.js" class="button minibutton " id="raw-url">Raw</a>
            <a href="/zonear/isotope-perfectmasonry/blame/master/jquery.isotope.perfectmasonry.js" class="button minibutton js-update-url-with-hash">Blame</a>
          <a href="/zonear/isotope-perfectmasonry/commits/master/jquery.isotope.perfectmasonry.js" class="button minibutton " rel="nofollow">History</a>
        </div><!-- /.button-group -->
          <a class="minibutton danger empty-icon tooltipped downwards"
             href="/zonear/isotope-perfectmasonry/delete/master/jquery.isotope.perfectmasonry.js"
             title="Fork this project and delete file"
             data-method="post" data-test-id="delete-blob-file" rel="nofollow">
          Delete
        </a>
      </div><!-- /.actions -->
    </div>
        <div class="blob-wrapper data type-javascript js-blob-data">
        <table class="file-code file-diff tab-size-8">
          <tr class="file-code-line">
            <td class="blob-line-nums">
              <span id="L1" rel="#L1">1</span>
<span id="L2" rel="#L2">2</span>
<span id="L3" rel="#L3">3</span>
<span id="L4" rel="#L4">4</span>
<span id="L5" rel="#L5">5</span>
<span id="L6" rel="#L6">6</span>
<span id="L7" rel="#L7">7</span>
<span id="L8" rel="#L8">8</span>
<span id="L9" rel="#L9">9</span>
<span id="L10" rel="#L10">10</span>
<span id="L11" rel="#L11">11</span>
<span id="L12" rel="#L12">12</span>
<span id="L13" rel="#L13">13</span>
<span id="L14" rel="#L14">14</span>
<span id="L15" rel="#L15">15</span>
<span id="L16" rel="#L16">16</span>
<span id="L17" rel="#L17">17</span>
<span id="L18" rel="#L18">18</span>
<span id="L19" rel="#L19">19</span>
<span id="L20" rel="#L20">20</span>
<span id="L21" rel="#L21">21</span>
<span id="L22" rel="#L22">22</span>
<span id="L23" rel="#L23">23</span>
<span id="L24" rel="#L24">24</span>
<span id="L25" rel="#L25">25</span>
<span id="L26" rel="#L26">26</span>
<span id="L27" rel="#L27">27</span>
<span id="L28" rel="#L28">28</span>
<span id="L29" rel="#L29">29</span>
<span id="L30" rel="#L30">30</span>
<span id="L31" rel="#L31">31</span>
<span id="L32" rel="#L32">32</span>
<span id="L33" rel="#L33">33</span>
<span id="L34" rel="#L34">34</span>
<span id="L35" rel="#L35">35</span>
<span id="L36" rel="#L36">36</span>
<span id="L37" rel="#L37">37</span>
<span id="L38" rel="#L38">38</span>
<span id="L39" rel="#L39">39</span>
<span id="L40" rel="#L40">40</span>
<span id="L41" rel="#L41">41</span>
<span id="L42" rel="#L42">42</span>
<span id="L43" rel="#L43">43</span>
<span id="L44" rel="#L44">44</span>
<span id="L45" rel="#L45">45</span>
<span id="L46" rel="#L46">46</span>
<span id="L47" rel="#L47">47</span>
<span id="L48" rel="#L48">48</span>
<span id="L49" rel="#L49">49</span>
<span id="L50" rel="#L50">50</span>
<span id="L51" rel="#L51">51</span>
<span id="L52" rel="#L52">52</span>
<span id="L53" rel="#L53">53</span>
<span id="L54" rel="#L54">54</span>
<span id="L55" rel="#L55">55</span>
<span id="L56" rel="#L56">56</span>
<span id="L57" rel="#L57">57</span>
<span id="L58" rel="#L58">58</span>
<span id="L59" rel="#L59">59</span>
<span id="L60" rel="#L60">60</span>
<span id="L61" rel="#L61">61</span>
<span id="L62" rel="#L62">62</span>
<span id="L63" rel="#L63">63</span>
<span id="L64" rel="#L64">64</span>
<span id="L65" rel="#L65">65</span>
<span id="L66" rel="#L66">66</span>
<span id="L67" rel="#L67">67</span>
<span id="L68" rel="#L68">68</span>
<span id="L69" rel="#L69">69</span>
<span id="L70" rel="#L70">70</span>
<span id="L71" rel="#L71">71</span>
<span id="L72" rel="#L72">72</span>
<span id="L73" rel="#L73">73</span>
<span id="L74" rel="#L74">74</span>
<span id="L75" rel="#L75">75</span>
<span id="L76" rel="#L76">76</span>
<span id="L77" rel="#L77">77</span>
<span id="L78" rel="#L78">78</span>
<span id="L79" rel="#L79">79</span>
<span id="L80" rel="#L80">80</span>
<span id="L81" rel="#L81">81</span>
<span id="L82" rel="#L82">82</span>
<span id="L83" rel="#L83">83</span>
<span id="L84" rel="#L84">84</span>
<span id="L85" rel="#L85">85</span>
<span id="L86" rel="#L86">86</span>
<span id="L87" rel="#L87">87</span>
<span id="L88" rel="#L88">88</span>
<span id="L89" rel="#L89">89</span>
<span id="L90" rel="#L90">90</span>
<span id="L91" rel="#L91">91</span>
<span id="L92" rel="#L92">92</span>
<span id="L93" rel="#L93">93</span>
<span id="L94" rel="#L94">94</span>
<span id="L95" rel="#L95">95</span>
<span id="L96" rel="#L96">96</span>
<span id="L97" rel="#L97">97</span>
<span id="L98" rel="#L98">98</span>
<span id="L99" rel="#L99">99</span>
<span id="L100" rel="#L100">100</span>
<span id="L101" rel="#L101">101</span>
<span id="L102" rel="#L102">102</span>
<span id="L103" rel="#L103">103</span>
<span id="L104" rel="#L104">104</span>
<span id="L105" rel="#L105">105</span>
<span id="L106" rel="#L106">106</span>
<span id="L107" rel="#L107">107</span>
<span id="L108" rel="#L108">108</span>
<span id="L109" rel="#L109">109</span>
<span id="L110" rel="#L110">110</span>
<span id="L111" rel="#L111">111</span>
<span id="L112" rel="#L112">112</span>
<span id="L113" rel="#L113">113</span>
<span id="L114" rel="#L114">114</span>
<span id="L115" rel="#L115">115</span>
<span id="L116" rel="#L116">116</span>
<span id="L117" rel="#L117">117</span>
<span id="L118" rel="#L118">118</span>
<span id="L119" rel="#L119">119</span>
<span id="L120" rel="#L120">120</span>
<span id="L121" rel="#L121">121</span>
<span id="L122" rel="#L122">122</span>
<span id="L123" rel="#L123">123</span>
<span id="L124" rel="#L124">124</span>
<span id="L125" rel="#L125">125</span>
<span id="L126" rel="#L126">126</span>
<span id="L127" rel="#L127">127</span>
<span id="L128" rel="#L128">128</span>
<span id="L129" rel="#L129">129</span>
<span id="L130" rel="#L130">130</span>
<span id="L131" rel="#L131">131</span>
<span id="L132" rel="#L132">132</span>
<span id="L133" rel="#L133">133</span>
<span id="L134" rel="#L134">134</span>
<span id="L135" rel="#L135">135</span>
<span id="L136" rel="#L136">136</span>
<span id="L137" rel="#L137">137</span>
<span id="L138" rel="#L138">138</span>
<span id="L139" rel="#L139">139</span>
<span id="L140" rel="#L140">140</span>
<span id="L141" rel="#L141">141</span>
<span id="L142" rel="#L142">142</span>
<span id="L143" rel="#L143">143</span>
<span id="L144" rel="#L144">144</span>
<span id="L145" rel="#L145">145</span>
<span id="L146" rel="#L146">146</span>
<span id="L147" rel="#L147">147</span>
<span id="L148" rel="#L148">148</span>
<span id="L149" rel="#L149">149</span>
<span id="L150" rel="#L150">150</span>
<span id="L151" rel="#L151">151</span>
<span id="L152" rel="#L152">152</span>
<span id="L153" rel="#L153">153</span>
<span id="L154" rel="#L154">154</span>
<span id="L155" rel="#L155">155</span>
<span id="L156" rel="#L156">156</span>
<span id="L157" rel="#L157">157</span>
<span id="L158" rel="#L158">158</span>
<span id="L159" rel="#L159">159</span>
<span id="L160" rel="#L160">160</span>
<span id="L161" rel="#L161">161</span>
<span id="L162" rel="#L162">162</span>
<span id="L163" rel="#L163">163</span>
<span id="L164" rel="#L164">164</span>
<span id="L165" rel="#L165">165</span>
<span id="L166" rel="#L166">166</span>
<span id="L167" rel="#L167">167</span>
<span id="L168" rel="#L168">168</span>
<span id="L169" rel="#L169">169</span>
<span id="L170" rel="#L170">170</span>
<span id="L171" rel="#L171">171</span>
<span id="L172" rel="#L172">172</span>
<span id="L173" rel="#L173">173</span>
<span id="L174" rel="#L174">174</span>
<span id="L175" rel="#L175">175</span>
<span id="L176" rel="#L176">176</span>
<span id="L177" rel="#L177">177</span>
<span id="L178" rel="#L178">178</span>
<span id="L179" rel="#L179">179</span>
<span id="L180" rel="#L180">180</span>
<span id="L181" rel="#L181">181</span>
<span id="L182" rel="#L182">182</span>
<span id="L183" rel="#L183">183</span>
<span id="L184" rel="#L184">184</span>
<span id="L185" rel="#L185">185</span>
<span id="L186" rel="#L186">186</span>
<span id="L187" rel="#L187">187</span>
<span id="L188" rel="#L188">188</span>
<span id="L189" rel="#L189">189</span>
<span id="L190" rel="#L190">190</span>
<span id="L191" rel="#L191">191</span>
<span id="L192" rel="#L192">192</span>
<span id="L193" rel="#L193">193</span>
<span id="L194" rel="#L194">194</span>
<span id="L195" rel="#L195">195</span>
<span id="L196" rel="#L196">196</span>
<span id="L197" rel="#L197">197</span>
<span id="L198" rel="#L198">198</span>
<span id="L199" rel="#L199">199</span>
<span id="L200" rel="#L200">200</span>
<span id="L201" rel="#L201">201</span>
<span id="L202" rel="#L202">202</span>
<span id="L203" rel="#L203">203</span>
<span id="L204" rel="#L204">204</span>
<span id="L205" rel="#L205">205</span>
<span id="L206" rel="#L206">206</span>
<span id="L207" rel="#L207">207</span>
<span id="L208" rel="#L208">208</span>
<span id="L209" rel="#L209">209</span>
<span id="L210" rel="#L210">210</span>
<span id="L211" rel="#L211">211</span>
<span id="L212" rel="#L212">212</span>
<span id="L213" rel="#L213">213</span>
<span id="L214" rel="#L214">214</span>
<span id="L215" rel="#L215">215</span>
<span id="L216" rel="#L216">216</span>
<span id="L217" rel="#L217">217</span>
<span id="L218" rel="#L218">218</span>
<span id="L219" rel="#L219">219</span>
<span id="L220" rel="#L220">220</span>
<span id="L221" rel="#L221">221</span>
<span id="L222" rel="#L222">222</span>
<span id="L223" rel="#L223">223</span>
<span id="L224" rel="#L224">224</span>
<span id="L225" rel="#L225">225</span>
<span id="L226" rel="#L226">226</span>
<span id="L227" rel="#L227">227</span>
<span id="L228" rel="#L228">228</span>
<span id="L229" rel="#L229">229</span>
<span id="L230" rel="#L230">230</span>
<span id="L231" rel="#L231">231</span>
<span id="L232" rel="#L232">232</span>
<span id="L233" rel="#L233">233</span>
<span id="L234" rel="#L234">234</span>
<span id="L235" rel="#L235">235</span>
<span id="L236" rel="#L236">236</span>
<span id="L237" rel="#L237">237</span>
<span id="L238" rel="#L238">238</span>
<span id="L239" rel="#L239">239</span>
<span id="L240" rel="#L240">240</span>
<span id="L241" rel="#L241">241</span>
<span id="L242" rel="#L242">242</span>
<span id="L243" rel="#L243">243</span>
<span id="L244" rel="#L244">244</span>
<span id="L245" rel="#L245">245</span>
<span id="L246" rel="#L246">246</span>
<span id="L247" rel="#L247">247</span>
<span id="L248" rel="#L248">248</span>
<span id="L249" rel="#L249">249</span>
<span id="L250" rel="#L250">250</span>
<span id="L251" rel="#L251">251</span>
<span id="L252" rel="#L252">252</span>
<span id="L253" rel="#L253">253</span>
<span id="L254" rel="#L254">254</span>
<span id="L255" rel="#L255">255</span>
<span id="L256" rel="#L256">256</span>
<span id="L257" rel="#L257">257</span>
<span id="L258" rel="#L258">258</span>
<span id="L259" rel="#L259">259</span>
<span id="L260" rel="#L260">260</span>
<span id="L261" rel="#L261">261</span>
<span id="L262" rel="#L262">262</span>
<span id="L263" rel="#L263">263</span>
<span id="L264" rel="#L264">264</span>
<span id="L265" rel="#L265">265</span>
<span id="L266" rel="#L266">266</span>
<span id="L267" rel="#L267">267</span>
<span id="L268" rel="#L268">268</span>
<span id="L269" rel="#L269">269</span>
<span id="L270" rel="#L270">270</span>
<span id="L271" rel="#L271">271</span>
<span id="L272" rel="#L272">272</span>
<span id="L273" rel="#L273">273</span>
<span id="L274" rel="#L274">274</span>
<span id="L275" rel="#L275">275</span>
<span id="L276" rel="#L276">276</span>
<span id="L277" rel="#L277">277</span>
<span id="L278" rel="#L278">278</span>

            </td>
            <td class="blob-line-code"><div class="code-body highlight"><pre><div class='line' id='LC1'><span class="cm">/*!</span></div><div class='line' id='LC2'><span class="cm"> * PerfectMasonry extension for Isotope</span></div><div class='line' id='LC3'><span class="cm"> *</span></div><div class='line' id='LC4'><span class="cm"> * Does similar things as the Isotopes &quot;masonry&quot; layoutmode, except that this one will actually go back and plug the holes</span></div><div class='line' id='LC5'><span class="cm"> * left by bigger elements, thus making a perfect brick wall. Profit!</span></div><div class='line' id='LC6'><span class="cm"> * </span></div><div class='line' id='LC7'><span class="cm"> * Usage:</span></div><div class='line' id='LC8'><span class="cm"> * 	$(&#39;#grid&#39;).isotope({</span></div><div class='line' id='LC9'><span class="cm"> * 		layoutMode: &#39;perfectMasonry&#39;,</span></div><div class='line' id='LC10'><span class="cm"> *		perfectMasonry: {</span></div><div class='line' id='LC11'><span class="cm"> *			layout: &#39;horizontal&#39;,		// Set layout as vertical/horizontal (default: vertical)</span></div><div class='line' id='LC12'><span class="cm"> *			columnWidth: 200,			// Set/Prefer columns to x wide (default: width of first tile)</span></div><div class='line' id='LC13'><span class="cm"> *			rowHeight: 200,				// Set/Prefer rows to y high (default: height of first tile)</span></div><div class='line' id='LC14'><span class="cm"> * </span></div><div class='line' id='LC15'><span class="cm"> *			liquid: true,				// Set layout as liquid (default: false)</span></div><div class='line' id='LC16'><span class="cm"> *			cols: 3,					// Force to have x columns (default: null)</span></div><div class='line' id='LC17'><span class="cm"> *			rows: 3,					// Force to have y rows (default: null)</span></div><div class='line' id='LC18'><span class="cm"> *			minCols: 3,					// Set min col count (default: 1)</span></div><div class='line' id='LC19'><span class="cm"> *			minRows: 3,					// Set min row count (default: 1)</span></div><div class='line' id='LC20'><span class="cm"> *			maxCols: 5,					// Set max col count (default: 9999)</span></div><div class='line' id='LC21'><span class="cm"> *			maxRows: 4					// Set max row count (default: 9999)</span></div><div class='line' id='LC22'><span class="cm"> * 		}</span></div><div class='line' id='LC23'><span class="cm"> * 	});</span></div><div class='line' id='LC24'><span class="cm"> *</span></div><div class='line' id='LC25'><span class="cm"> * </span></div><div class='line' id='LC26'><span class="cm"> * @author Mikko Tikkanen, Zonear Ltd. &lt;contact@zonear.com&gt;</span></div><div class='line' id='LC27'><span class="cm"> */</span></div><div class='line' id='LC28'><span class="p">;(</span><span class="kd">function</span><span class="p">(</span><span class="nx">$</span><span class="p">,</span> <span class="kc">undefined</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC29'>	<span class="kd">var</span> <span class="nx">version</span> <span class="o">=</span> <span class="s1">&#39;1.2.1&#39;</span><span class="p">;</span></div><div class='line' id='LC30'>	<span class="kd">var</span> <span class="nx">isotope</span> <span class="o">=</span> <span class="kc">null</span><span class="p">,</span></div><div class='line' id='LC31'>		<span class="nx">$context</span> <span class="o">=</span> <span class="kc">null</span><span class="p">,</span></div><div class='line' id='LC32'>		<span class="nx">$container</span> <span class="o">=</span> <span class="kc">null</span><span class="p">,</span></div><div class='line' id='LC33'>		<span class="nx">isFirstRun</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC34'><br/></div><div class='line' id='LC35'>	<span class="nx">$</span><span class="p">.</span><span class="nx">extend</span><span class="p">(</span><span class="nx">$</span><span class="p">.</span><span class="nx">Isotope</span><span class="p">.</span><span class="nx">prototype</span><span class="p">,</span> <span class="p">{</span></div><div class='line' id='LC36'><br/></div><div class='line' id='LC37'>		<span class="cm">/**</span></div><div class='line' id='LC38'><span class="cm">		 * Reset layout properties</span></div><div class='line' id='LC39'><span class="cm">		 *</span></div><div class='line' id='LC40'><span class="cm">		 * Runs before any layout change</span></div><div class='line' id='LC41'><span class="cm">		 * -------------------------------------------------------------------------------------------------------- */</span></div><div class='line' id='LC42'>		<span class="nx">_perfectMasonryReset</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC43'>			<span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">perfectMasonry</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">perfectMasonry</span><span class="o">||</span> <span class="p">{};</span></div><div class='line' id='LC44'>			<span class="kd">var</span> <span class="nx">isVertical</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">perfectMasonry</span><span class="p">.</span><span class="nx">layout</span> <span class="o">!=</span> <span class="s1">&#39;horizontal&#39;</span><span class="p">,</span></div><div class='line' id='LC45'>				<span class="nx">isLiquid</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">perfectMasonry</span><span class="p">.</span><span class="nx">liquid</span> <span class="o">==</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC46'><br/></div><div class='line' id='LC47'>			<span class="c1">// Do things on a first run</span></div><div class='line' id='LC48'>			<span class="k">if</span><span class="p">(</span><span class="nx">isFirstRun</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC49'>				<span class="nx">isFirstRun</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC50'>				<span class="nx">isotope</span> <span class="o">=</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC51'>				<span class="nx">$context</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">element</span><span class="p">.</span><span class="nx">context</span><span class="p">);</span></div><div class='line' id='LC52'>				<span class="nx">$container</span> <span class="o">=</span> <span class="nx">$context</span><span class="p">.</span><span class="nx">parent</span><span class="p">();</span></div><div class='line' id='LC53'><br/></div><div class='line' id='LC54'>				<span class="c1">// Make sure we have min/maxCols &amp; rows</span></div><div class='line' id='LC55'>				<span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">perfectMasonry</span><span class="p">.</span><span class="nx">minCols</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">perfectMasonry</span><span class="p">.</span><span class="nx">minCols</span> <span class="o">||</span> <span class="mi">1</span><span class="p">;</span> </div><div class='line' id='LC56'>				<span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">perfectMasonry</span><span class="p">.</span><span class="nx">minRows</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">perfectMasonry</span><span class="p">.</span><span class="nx">minRows</span> <span class="o">||</span> <span class="mi">1</span><span class="p">;</span></div><div class='line' id='LC57'>				<span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">perfectMasonry</span><span class="p">.</span><span class="nx">maxCols</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">perfectMasonry</span><span class="p">.</span><span class="nx">maxCols</span> <span class="o">||</span> <span class="mi">9999</span><span class="p">;</span> </div><div class='line' id='LC58'>				<span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">perfectMasonry</span><span class="p">.</span><span class="nx">maxRows</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">perfectMasonry</span><span class="p">.</span><span class="nx">maxRows</span> <span class="o">||</span> <span class="mi">9999</span><span class="p">;</span></div><div class='line' id='LC59'>			<span class="p">}</span></div><div class='line' id='LC60'><br/></div><div class='line' id='LC61'>			<span class="c1">// For liquid layout, replace default resize handler with forced relayout (outside firstRun as Isotope grid can be destroyed and created on the fly)</span></div><div class='line' id='LC62'>			<span class="k">if</span><span class="p">(</span><span class="nx">isLiquid</span> <span class="o">&amp;&amp;</span> <span class="nx">$</span><span class="p">.</span><span class="nx">data</span><span class="p">(</span><span class="nb">window</span><span class="p">,</span> <span class="s1">&#39;events&#39;</span><span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="nx">$</span><span class="p">.</span><span class="nx">_data</span><span class="p">(</span><span class="nb">window</span><span class="p">,</span> <span class="s1">&#39;events&#39;</span><span class="p">).</span><span class="nx">smartresize</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC63'>				<span class="nx">$</span><span class="p">(</span><span class="nb">window</span><span class="p">).</span><span class="nx">off</span><span class="p">(</span><span class="s1">&#39;smartresize.isotope&#39;</span><span class="p">);</span></div><div class='line' id='LC64'>				<span class="nx">$</span><span class="p">(</span><span class="nb">window</span><span class="p">).</span><span class="nx">on</span><span class="p">(</span><span class="s1">&#39;resize.isotope.perfectmasonry&#39;</span><span class="p">,</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC65'>					<span class="k">if</span><span class="p">(</span><span class="o">!</span><span class="nx">$context</span><span class="p">.</span><span class="nx">hasClass</span><span class="p">(</span><span class="s1">&#39;isotope&#39;</span><span class="p">))</span> <span class="p">{</span> <span class="k">return</span><span class="p">;</span> <span class="p">}</span></div><div class='line' id='LC66'>					<span class="nx">$context</span><span class="p">.</span><span class="nx">isotope</span><span class="p">(</span><span class="s1">&#39;reLayout&#39;</span><span class="p">);</span></div><div class='line' id='LC67'>				<span class="p">});</span></div><div class='line' id='LC68'>			<span class="p">}</span></div><div class='line' id='LC69'><br/></div><div class='line' id='LC70'>			<span class="c1">// Setup layout properties ---------------------------------------------------</span></div><div class='line' id='LC71'>			<span class="kd">var</span> <span class="nx">properties</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">perfectMasonry</span> <span class="o">=</span> <span class="p">{};</span></div><div class='line' id='LC72'><br/></div><div class='line' id='LC73'>			<span class="c1">// Fill properties with columnWidth and rowHeight (true argument)</span></div><div class='line' id='LC74'>			<span class="k">this</span><span class="p">.</span><span class="nx">_getSegments</span><span class="p">();</span></div><div class='line' id='LC75'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;		<span class="k">this</span><span class="p">.</span><span class="nx">_getSegments</span><span class="p">(</span><span class="kc">true</span><span class="p">);</span></div><div class='line' id='LC76'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;		</div><div class='line' id='LC77'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;		<span class="c1">// ...and with cols &amp; rows</span></div><div class='line' id='LC78'>			<span class="k">this</span><span class="p">.</span><span class="nx">_perfectMasonryGetSegments</span><span class="p">();</span></div><div class='line' id='LC79'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;		</div><div class='line' id='LC80'>			<span class="c1">// Handle liquid layout (cols, rows &amp; sizes must be calculated on the fly)</span></div><div class='line' id='LC81'>			<span class="k">if</span><span class="p">(</span><span class="nx">isLiquid</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC82'>				<span class="kd">var</span> <span class="nx">width</span> <span class="o">=</span> <span class="nx">$container</span><span class="p">.</span><span class="nx">width</span><span class="p">(),</span></div><div class='line' id='LC83'>					<span class="nx">height</span> <span class="o">=</span> <span class="nx">$container</span><span class="p">.</span><span class="nx">height</span><span class="p">();</span></div><div class='line' id='LC84'><br/></div><div class='line' id='LC85'>				<span class="c1">// Make sure we have colwidth &amp; rowheight (get it from the calculated )</span></div><div class='line' id='LC86'>				<span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">perfectMasonry</span><span class="p">.</span><span class="nx">columnWidth</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">perfectMasonry</span><span class="p">.</span><span class="nx">columnWidth</span> <span class="o">||</span> <span class="nx">properties</span><span class="p">.</span><span class="nx">columnWidth</span><span class="p">;</span></div><div class='line' id='LC87'>				<span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">perfectMasonry</span><span class="p">.</span><span class="nx">rowHeight</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">perfectMasonry</span><span class="p">.</span><span class="nx">rowHeight</span> <span class="o">||</span> <span class="nx">properties</span><span class="p">.</span><span class="nx">rowHeight</span><span class="p">;</span></div><div class='line' id='LC88'><br/></div><div class='line' id='LC89'>				<span class="c1">// Figure out how many cols &amp; rows either have been set or can be fit into the container (also make sure we&#39;re still between min/max)</span></div><div class='line' id='LC90'>				<span class="nx">properties</span><span class="p">.</span><span class="nx">cols</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">perfectMasonry</span><span class="p">.</span><span class="nx">cols</span> <span class="o">||</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">floor</span><span class="p">(</span><span class="nx">width</span> <span class="o">/</span> <span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">perfectMasonry</span><span class="p">.</span><span class="nx">columnWidth</span><span class="p">);</span></div><div class='line' id='LC91'>				<span class="nx">properties</span><span class="p">.</span><span class="nx">rows</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">perfectMasonry</span><span class="p">.</span><span class="nx">rows</span> <span class="o">||</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">floor</span><span class="p">(</span><span class="nx">height</span> <span class="o">/</span> <span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">perfectMasonry</span><span class="p">.</span><span class="nx">rowHeight</span><span class="p">);</span></div><div class='line' id='LC92'>				<span class="nx">properties</span><span class="p">.</span><span class="nx">cols</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">min</span><span class="p">(</span><span class="nb">Math</span><span class="p">.</span><span class="nx">max</span><span class="p">(</span><span class="nx">properties</span><span class="p">.</span><span class="nx">cols</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">perfectMasonry</span><span class="p">.</span><span class="nx">minCols</span><span class="p">),</span> <span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">perfectMasonry</span><span class="p">.</span><span class="nx">maxCols</span><span class="p">);</span></div><div class='line' id='LC93'>				<span class="nx">properties</span><span class="p">.</span><span class="nx">rows</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">min</span><span class="p">(</span><span class="nb">Math</span><span class="p">.</span><span class="nx">max</span><span class="p">(</span><span class="nx">properties</span><span class="p">.</span><span class="nx">rows</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">perfectMasonry</span><span class="p">.</span><span class="nx">minRows</span><span class="p">),</span> <span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">perfectMasonry</span><span class="p">.</span><span class="nx">maxRows</span><span class="p">);</span></div><div class='line' id='LC94'><br/></div><div class='line' id='LC95'>				<span class="c1">// Recalculate accurate width/height so that the whole available space is used</span></div><div class='line' id='LC96'>				<span class="kd">var</span> <span class="nx">diff</span> <span class="o">=</span> <span class="p">(</span><span class="nx">isVertical</span> <span class="o">?</span> <span class="nx">properties</span><span class="p">.</span><span class="nx">columnWidth</span> <span class="o">/</span> <span class="p">(</span><span class="nx">width</span> <span class="o">/</span> <span class="nx">properties</span><span class="p">.</span><span class="nx">cols</span><span class="p">)</span> <span class="o">:</span> <span class="nx">properties</span><span class="p">.</span><span class="nx">rowHeight</span> <span class="o">/</span> <span class="p">(</span><span class="nx">height</span> <span class="o">/</span> <span class="nx">properties</span><span class="p">.</span><span class="nx">rows</span><span class="p">));</span></div><div class='line' id='LC97'>				<span class="nx">properties</span><span class="p">.</span><span class="nx">columnWidth</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">floor</span><span class="p">(</span><span class="nx">properties</span><span class="p">.</span><span class="nx">columnWidth</span> <span class="o">/</span> <span class="nx">diff</span><span class="p">);</span></div><div class='line' id='LC98'>				<span class="nx">properties</span><span class="p">.</span><span class="nx">rowHeight</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">floor</span><span class="p">(</span><span class="nx">properties</span><span class="p">.</span><span class="nx">rowHeight</span> <span class="o">/</span> <span class="nx">diff</span><span class="p">);</span></div><div class='line' id='LC99'>			<span class="p">}</span></div><div class='line' id='LC100'><br/></div><div class='line' id='LC101'>			<span class="c1">// Create top row of the grid</span></div><div class='line' id='LC102'>			<span class="nx">properties</span><span class="p">.</span><span class="nx">grid</span> <span class="o">=</span> <span class="k">new</span> <span class="nb">Array</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">perfectMasonry</span><span class="p">.</span><span class="nx">cols</span><span class="p">);</span></div><div class='line' id='LC103'><br/></div><div class='line' id='LC104'>			<span class="c1">// Set container dimensions to 0</span></div><div class='line' id='LC105'>			<span class="nx">properties</span><span class="p">.</span><span class="nx">containerHeight</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC106'>			<span class="nx">properties</span><span class="p">.</span><span class="nx">containerWidth</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC107'>	    <span class="p">},</span></div><div class='line' id='LC108'><br/></div><div class='line' id='LC109'><br/></div><div class='line' id='LC110'><br/></div><div class='line' id='LC111'>	    <span class="cm">/**</span></div><div class='line' id='LC112'><span class="cm">		 * Create layout</span></div><div class='line' id='LC113'><span class="cm">		 * -------------------------------------------------------------------------------------------------------- */</span></div><div class='line' id='LC114'>		<span class="nx">_perfectMasonryLayout</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">$elems</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC115'>			<span class="kd">var</span> <span class="nx">instance</span> <span class="o">=</span> <span class="k">this</span><span class="p">,</span></div><div class='line' id='LC116'>				<span class="nx">properties</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">perfectMasonry</span><span class="p">,</span></div><div class='line' id='LC117'>				<span class="nx">isVertical</span> <span class="o">=</span> <span class="nx">instance</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">perfectMasonry</span><span class="p">.</span><span class="nx">layout</span> <span class="o">!=</span> <span class="s1">&#39;horizontal&#39;</span><span class="p">,</span></div><div class='line' id='LC118'>				<span class="nx">isLiquid</span> <span class="o">=</span> <span class="nx">instance</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">perfectMasonry</span><span class="p">.</span><span class="nx">liquid</span> <span class="o">==</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC119'><br/></div><div class='line' id='LC120'>			<span class="c1">// Create first set of the grid</span></div><div class='line' id='LC121'>			<span class="nx">properties</span><span class="p">.</span><span class="nx">grid</span> <span class="o">=</span> <span class="k">new</span> <span class="nb">Array</span><span class="p">(</span><span class="nx">properties</span><span class="p">[(</span><span class="nx">isVertical</span> <span class="o">?</span> <span class="s1">&#39;cols&#39;</span> <span class="o">:</span> <span class="s1">&#39;rows&#39;</span><span class="p">)]);</span></div><div class='line' id='LC122'>			<span class="k">if</span><span class="p">(</span><span class="o">!</span><span class="nx">properties</span><span class="p">.</span><span class="nx">grid</span> <span class="o">||</span> <span class="o">!</span><span class="nx">properties</span><span class="p">.</span><span class="nx">grid</span><span class="p">.</span><span class="nx">length</span><span class="p">)</span> <span class="p">{</span> <span class="k">return</span><span class="p">;</span> <span class="p">}</span></div><div class='line' id='LC123'><br/></div><div class='line' id='LC124'>			<span class="c1">// Loop each element</span></div><div class='line' id='LC125'>			<span class="nx">$elems</span><span class="p">.</span><span class="nx">each</span><span class="p">(</span><span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC126'>				<span class="kd">var</span> <span class="nx">$this</span>  <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="k">this</span><span class="p">);</span></div><div class='line' id='LC127'><br/></div><div class='line' id='LC128'>				<span class="c1">// Calculate col &amp; row spans (with liquid layouts, store desired width as element data)</span></div><div class='line' id='LC129'>				<span class="kd">var</span> <span class="nx">colSpan</span> <span class="o">=</span> <span class="p">(</span><span class="nx">isLiquid</span> <span class="o">?</span> <span class="nx">$this</span><span class="p">.</span><span class="nx">data</span><span class="p">(</span><span class="s1">&#39;colSpan&#39;</span><span class="p">)</span> <span class="o">:</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">ceil</span><span class="p">(</span><span class="nx">$this</span><span class="p">.</span><span class="nx">outerWidth</span><span class="p">()</span> <span class="o">/</span> <span class="p">(</span><span class="nx">properties</span><span class="p">.</span><span class="nx">columnWidth</span> <span class="o">+</span> <span class="mi">1</span><span class="p">))),</span></div><div class='line' id='LC130'>					<span class="nx">rowSpan</span> <span class="o">=</span> <span class="p">(</span><span class="nx">isLiquid</span> <span class="o">?</span> <span class="nx">$this</span><span class="p">.</span><span class="nx">data</span><span class="p">(</span><span class="s1">&#39;rowSpan&#39;</span><span class="p">)</span> <span class="o">:</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">ceil</span><span class="p">(</span><span class="nx">$this</span><span class="p">.</span><span class="nx">outerHeight</span><span class="p">()</span> <span class="o">/</span> <span class="p">(</span><span class="nx">properties</span><span class="p">.</span><span class="nx">rowHeight</span> <span class="o">+</span> <span class="mi">1</span><span class="p">)));</span></div><div class='line' id='LC131'><br/></div><div class='line' id='LC132'>				<span class="c1">// For the first run with liquid layout, calculate sizes</span></div><div class='line' id='LC133'>				<span class="k">if</span><span class="p">(</span><span class="o">!</span><span class="nx">colSpan</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC134'>					<span class="nx">colSpan</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">ceil</span><span class="p">(</span><span class="nx">$this</span><span class="p">.</span><span class="nx">outerWidth</span><span class="p">(</span><span class="kc">true</span><span class="p">)</span> <span class="o">/</span> <span class="p">(</span><span class="nx">properties</span><span class="p">.</span><span class="nx">columnWidth</span> <span class="o">+</span> <span class="mi">1</span><span class="p">));</span></div><div class='line' id='LC135'>					<span class="nx">rowSpan</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">ceil</span><span class="p">(</span><span class="nx">$this</span><span class="p">.</span><span class="nx">outerHeight</span><span class="p">(</span><span class="kc">true</span><span class="p">)</span> <span class="o">/</span> <span class="p">(</span><span class="nx">properties</span><span class="p">.</span><span class="nx">rowHeight</span> <span class="o">+</span> <span class="mi">1</span><span class="p">));</span></div><div class='line' id='LC136'>					<span class="nx">$this</span><span class="p">.</span><span class="nx">data</span><span class="p">(</span><span class="s1">&#39;colSpan&#39;</span><span class="p">,</span> <span class="nx">colSpan</span><span class="p">);</span></div><div class='line' id='LC137'>					<span class="nx">$this</span><span class="p">.</span><span class="nx">data</span><span class="p">(</span><span class="s1">&#39;rowSpan&#39;</span><span class="p">,</span> <span class="nx">rowSpan</span><span class="p">);</span></div><div class='line' id='LC138'>				<span class="p">}</span></div><div class='line' id='LC139'><br/></div><div class='line' id='LC140'><br/></div><div class='line' id='LC141'>				<span class="cm">/* Do the layout</span></div><div class='line' id='LC142'><span class="cm">				 * -------------------------------------------------------------------------------- */</span></div><div class='line' id='LC143'><br/></div><div class='line' id='LC144'>				<span class="c1">// Set spans</span></div><div class='line' id='LC145'>				<span class="kd">var</span> <span class="nx">aSpan</span> <span class="o">=</span> <span class="p">(</span><span class="nx">isVertical</span> <span class="o">?</span> <span class="nx">colSpan</span> <span class="o">:</span> <span class="nx">rowSpan</span><span class="p">);</span></div><div class='line' id='LC146'>				<span class="kd">var</span> <span class="nx">bSpan</span> <span class="o">=</span> <span class="p">(</span><span class="nx">isVertical</span> <span class="o">?</span> <span class="nx">rowSpan</span> <span class="o">:</span> <span class="nx">colSpan</span><span class="p">);</span></div><div class='line' id='LC147'><br/></div><div class='line' id='LC148'>				<span class="c1">// Bigger tiles can&#39;t fit into the last primary (though keep it still at least as 1)</span></div><div class='line' id='LC149'>				<span class="kd">var</span> <span class="nx">max</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">max</span><span class="p">((</span><span class="nx">isVertical</span> <span class="o">?</span> <span class="nx">properties</span><span class="p">.</span><span class="nx">cols</span> <span class="o">-</span> <span class="nx">colSpan</span> <span class="o">:</span> <span class="nx">properties</span><span class="p">.</span><span class="nx">rows</span> <span class="o">-</span> <span class="nx">rowSpan</span><span class="p">)</span> <span class="o">+</span> <span class="mi">1</span><span class="p">,</span> <span class="mi">1</span><span class="p">);</span></div><div class='line' id='LC150'><br/></div><div class='line' id='LC151'>				<span class="c1">// Loop through/create primaries (set hard limit of 10.000 to prevent endless loop)</span></div><div class='line' id='LC152'>				<span class="kd">var</span> <span class="nx">a</span> <span class="o">=</span> <span class="o">-</span><span class="mi">1</span><span class="p">,</span> <span class="nx">x</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">y</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC153'>				<span class="k">while</span><span class="p">(</span><span class="o">++</span><span class="nx">a</span> <span class="o">&lt;</span> <span class="mi">10000</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC154'>					<span class="nx">properties</span><span class="p">.</span><span class="nx">grid</span><span class="p">[</span><span class="nx">a</span><span class="p">]</span> <span class="o">=</span> <span class="nx">properties</span><span class="p">.</span><span class="nx">grid</span><span class="p">[</span><span class="nx">a</span><span class="p">]</span> <span class="o">||</span> <span class="p">[];</span></div><div class='line' id='LC155'><br/></div><div class='line' id='LC156'>					<span class="c1">// Go through the secondaries in the primary, set secondary and tile</span></div><div class='line' id='LC157'>					<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">b</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">b</span> <span class="o">&lt;</span> <span class="nx">max</span><span class="p">;</span> <span class="nx">b</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC158'>						<span class="kd">var</span> <span class="nx">tile</span> <span class="o">=</span> <span class="nx">properties</span><span class="p">.</span><span class="nx">grid</span><span class="p">[</span><span class="nx">a</span><span class="p">][</span><span class="nx">b</span><span class="p">];</span></div><div class='line' id='LC159'><br/></div><div class='line' id='LC160'>						<span class="c1">// If the tile is not free, move to the next one immediately</span></div><div class='line' id='LC161'>						<span class="k">if</span><span class="p">(</span><span class="nx">tile</span><span class="p">)</span> <span class="p">{</span> <span class="k">continue</span><span class="p">;</span> <span class="p">}</span></div><div class='line' id='LC162'><br/></div><div class='line' id='LC163'>						<span class="c1">// Tiles spanning to multiple rows/columns - Check if it&#39;ll fit</span></div><div class='line' id='LC164'>						<span class="kd">var</span> <span class="nx">doesFit</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC165'>						<span class="k">if</span><span class="p">(</span><span class="nx">colSpan</span> <span class="o">&gt;</span> <span class="mi">1</span> <span class="o">||</span> <span class="nx">rowSpan</span> <span class="o">&gt;</span> <span class="mi">1</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC166'>							<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">aSpan</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC167'>								<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">j</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">j</span> <span class="o">&lt;</span> <span class="nx">bSpan</span><span class="p">;</span> <span class="nx">j</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC168'>									<span class="nx">properties</span><span class="p">.</span><span class="nx">grid</span><span class="p">[</span><span class="nx">a</span><span class="o">+</span><span class="nx">j</span><span class="p">]</span> <span class="o">=</span> <span class="nx">properties</span><span class="p">.</span><span class="nx">grid</span><span class="p">[</span><span class="nx">a</span><span class="o">+</span><span class="nx">j</span><span class="p">]</span> <span class="o">||</span> <span class="p">[];</span></div><div class='line' id='LC169'>									<span class="k">if</span><span class="p">(</span><span class="nx">properties</span><span class="p">.</span><span class="nx">grid</span><span class="p">[</span><span class="nx">a</span><span class="o">+</span><span class="nx">j</span><span class="p">][</span><span class="nx">b</span><span class="o">+</span><span class="nx">i</span><span class="p">])</span> <span class="p">{</span> <span class="nx">doesFit</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span> <span class="k">break</span><span class="p">;</span> <span class="p">}</span></div><div class='line' id='LC170'>								<span class="p">}</span></div><div class='line' id='LC171'><br/></div><div class='line' id='LC172'>								<span class="c1">// If it doesn&#39;t fit, don&#39;t waste our time looping</span></div><div class='line' id='LC173'>								<span class="k">if</span><span class="p">(</span><span class="o">!</span><span class="nx">doesFit</span><span class="p">)</span> <span class="p">{</span> <span class="k">break</span><span class="p">;</span> <span class="p">}</span></div><div class='line' id='LC174'>							<span class="p">}</span></div><div class='line' id='LC175'>						<span class="p">}</span></div><div class='line' id='LC176'>						<span class="k">if</span><span class="p">(</span><span class="o">!</span><span class="nx">doesFit</span><span class="p">)</span> <span class="p">{</span> <span class="k">continue</span> <span class="p">}</span></div><div class='line' id='LC177'><br/></div><div class='line' id='LC178'><br/></div><div class='line' id='LC179'>						<span class="c1">// Set all the cells as occupied</span></div><div class='line' id='LC180'>						<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">aSpan</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC181'>							<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">j</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">j</span> <span class="o">&lt;</span> <span class="nx">bSpan</span><span class="p">;</span> <span class="nx">j</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC182'>								<span class="nx">properties</span><span class="p">.</span><span class="nx">grid</span><span class="p">[</span><span class="nx">a</span><span class="o">+</span><span class="nx">j</span><span class="p">][</span><span class="nx">b</span><span class="o">+</span><span class="nx">i</span><span class="p">]</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC183'>							<span class="p">}</span></div><div class='line' id='LC184'>						<span class="p">}</span></div><div class='line' id='LC185'><br/></div><div class='line' id='LC186'>						<span class="c1">// Set x &amp; y values</span></div><div class='line' id='LC187'>						<span class="kd">var</span> <span class="nx">x</span> <span class="o">=</span> <span class="nx">a</span><span class="p">,</span> <span class="nx">y</span> <span class="o">=</span> <span class="nx">b</span><span class="p">;</span></div><div class='line' id='LC188'>						<span class="k">if</span><span class="p">(</span><span class="nx">isVertical</span><span class="p">)</span> <span class="p">{</span> <span class="kd">var</span> <span class="nx">x</span> <span class="o">=</span> <span class="nx">b</span><span class="p">,</span> <span class="nx">y</span> <span class="o">=</span> <span class="nx">a</span><span class="p">;</span> <span class="p">}</span></div><div class='line' id='LC189'><br/></div><div class='line' id='LC190'>						<span class="c1">// Update container dimensions</span></div><div class='line' id='LC191'>						<span class="nx">properties</span><span class="p">.</span><span class="nx">containerWidth</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">max</span><span class="p">(</span><span class="nx">properties</span><span class="p">.</span><span class="nx">containerWidth</span><span class="p">,</span> <span class="p">(</span><span class="nx">x</span> <span class="o">+</span> <span class="nx">aSpan</span><span class="p">)</span> <span class="o">*</span> <span class="nx">properties</span><span class="p">.</span><span class="nx">columnWidth</span><span class="p">);</span></div><div class='line' id='LC192'>						<span class="nx">properties</span><span class="p">.</span><span class="nx">containerHeight</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">max</span><span class="p">(</span><span class="nx">properties</span><span class="p">.</span><span class="nx">containerHeight</span><span class="p">,</span> <span class="p">(</span><span class="nx">y</span> <span class="o">+</span> <span class="nx">bSpan</span><span class="p">)</span> <span class="o">*</span> <span class="nx">properties</span><span class="p">.</span><span class="nx">rowHeight</span><span class="p">);</span></div><div class='line' id='LC193'><br/></div><div class='line' id='LC194'>						<span class="c1">// In case of liquid layout, set element size full width/height</span></div><div class='line' id='LC195'>						<span class="k">if</span><span class="p">(</span><span class="nx">instance</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">perfectMasonry</span><span class="p">.</span><span class="nx">liquid</span> <span class="o">==</span> <span class="kc">true</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC196'>							<span class="nx">$this</span><span class="p">.</span><span class="nx">css</span><span class="p">({</span></div><div class='line' id='LC197'>								<span class="nx">width</span><span class="o">:</span> <span class="nx">properties</span><span class="p">.</span><span class="nx">columnWidth</span> <span class="o">*</span> <span class="nx">colSpan</span><span class="p">,</span></div><div class='line' id='LC198'>								<span class="nx">height</span><span class="o">:</span> <span class="nx">properties</span><span class="p">.</span><span class="nx">rowHeight</span> <span class="o">*</span> <span class="nx">rowSpan</span></div><div class='line' id='LC199'>							<span class="p">});</span></div><div class='line' id='LC200'>						<span class="p">}</span></div><div class='line' id='LC201'><br/></div><div class='line' id='LC202'>						<span class="c1">// Set the element location and GTFO</span></div><div class='line' id='LC203'>						<span class="nx">instance</span><span class="p">.</span><span class="nx">_pushPosition</span><span class="p">(</span><span class="nx">$this</span><span class="p">,</span> <span class="nx">x</span><span class="o">*</span><span class="nx">properties</span><span class="p">.</span><span class="nx">columnWidth</span><span class="p">,</span> <span class="nx">y</span><span class="o">*</span><span class="nx">properties</span><span class="p">.</span><span class="nx">rowHeight</span><span class="p">);</span></div><div class='line' id='LC204'>						<span class="k">return</span><span class="p">;</span></div><div class='line' id='LC205'>					<span class="p">}</span></div><div class='line' id='LC206'>				<span class="p">}</span></div><div class='line' id='LC207'><br/></div><div class='line' id='LC208'><br/></div><div class='line' id='LC209'>				<span class="c1">// If we got all the way down to here, the element doesn&#39;t fit - Hide it</span></div><div class='line' id='LC210'>				<span class="nx">instance</span><span class="p">.</span><span class="nx">_pushPosition</span><span class="p">(</span><span class="nx">$this</span><span class="p">,</span> <span class="o">-</span><span class="mi">9999</span><span class="p">,</span> <span class="o">-</span><span class="mi">9999</span><span class="p">);</span></div><div class='line' id='LC211'>			<span class="p">});</span></div><div class='line' id='LC212'><br/></div><div class='line' id='LC213'>			<span class="c1">// Set row &amp; column count to container</span></div><div class='line' id='LC214'>			<span class="kd">var</span> <span class="nx">rows</span> <span class="o">=</span> <span class="p">(</span><span class="nx">isVertical</span> <span class="o">?</span> <span class="nx">properties</span><span class="p">.</span><span class="nx">grid</span><span class="p">.</span><span class="nx">length</span> <span class="o">:</span> <span class="nx">properties</span><span class="p">.</span><span class="nx">grid</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span> <span class="o">&amp;&amp;</span> <span class="nx">properties</span><span class="p">.</span><span class="nx">grid</span><span class="p">[</span><span class="mi">0</span><span class="p">].</span><span class="nx">length</span><span class="p">),</span></div><div class='line' id='LC215'>				<span class="nx">cols</span> <span class="o">=</span> <span class="p">(</span><span class="nx">isVertical</span> <span class="o">?</span> <span class="nx">properties</span><span class="p">.</span><span class="nx">grid</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span> <span class="o">&amp;&amp;</span> <span class="nx">properties</span><span class="p">.</span><span class="nx">grid</span><span class="p">[</span><span class="mi">0</span><span class="p">].</span><span class="nx">length</span> <span class="o">:</span> <span class="nx">properties</span><span class="p">.</span><span class="nx">grid</span><span class="p">.</span><span class="nx">length</span><span class="p">);</span></div><div class='line' id='LC216'>			<span class="nx">$</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">element</span><span class="p">.</span><span class="nx">context</span><span class="p">).</span><span class="nx">attr</span><span class="p">(</span><span class="s1">&#39;data-isotope-rows&#39;</span><span class="p">,</span> <span class="nx">rows</span><span class="p">).</span><span class="nx">attr</span><span class="p">(</span><span class="s1">&#39;data-isotope-cols&#39;</span><span class="p">,</span> <span class="nx">cols</span><span class="p">);</span></div><div class='line' id='LC217'>		<span class="p">},</span></div><div class='line' id='LC218'><br/></div><div class='line' id='LC219'><br/></div><div class='line' id='LC220'><br/></div><div class='line' id='LC221'>	    <span class="cm">/**</span></div><div class='line' id='LC222'><span class="cm">		 * Get container size</span></div><div class='line' id='LC223'><span class="cm">		 *</span></div><div class='line' id='LC224'><span class="cm">		 * For resizing the container</span></div><div class='line' id='LC225'><span class="cm">		 * -------------------------------------------------------------------------------------------------------- */</span></div><div class='line' id='LC226'>	    <span class="nx">_perfectMasonryGetContainerSize</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC227'>			<span class="k">return</span> <span class="p">{</span></div><div class='line' id='LC228'>				<span class="nx">width</span><span class="o">:</span> <span class="k">this</span><span class="p">.</span><span class="nx">perfectMasonry</span><span class="p">.</span><span class="nx">containerWidth</span><span class="p">,</span></div><div class='line' id='LC229'>				<span class="nx">height</span><span class="o">:</span> <span class="k">this</span><span class="p">.</span><span class="nx">perfectMasonry</span><span class="p">.</span><span class="nx">containerHeight</span></div><div class='line' id='LC230'>			<span class="p">};</span></div><div class='line' id='LC231'>	    <span class="p">},</span></div><div class='line' id='LC232'><br/></div><div class='line' id='LC233'><br/></div><div class='line' id='LC234'><br/></div><div class='line' id='LC235'>	    <span class="cm">/**</span></div><div class='line' id='LC236'><span class="cm">		 * Resize changed</span></div><div class='line' id='LC237'><span class="cm">		 *</span></div><div class='line' id='LC238'><span class="cm">		 * Figure out if layout changed</span></div><div class='line' id='LC239'><span class="cm">		 * -------------------------------------------------------------------------------------------------------- */</span></div><div class='line' id='LC240'>	    <span class="nx">_perfectMasonryResizeChanged</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC241'>	    	<span class="kd">var</span> <span class="nx">properties</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">perfectMasonry</span><span class="p">;</span></div><div class='line' id='LC242'><br/></div><div class='line' id='LC243'>	    	<span class="c1">// Store old values and calculate new numbers</span></div><div class='line' id='LC244'>	    	<span class="kd">var</span> <span class="nx">oldCols</span> <span class="o">=</span> <span class="nx">properties</span><span class="p">.</span><span class="nx">cols</span><span class="p">,</span></div><div class='line' id='LC245'>	    		<span class="nx">oldRows</span> <span class="o">=</span> <span class="nx">properties</span><span class="p">.</span><span class="nx">rows</span><span class="p">;</span></div><div class='line' id='LC246'>	    	<span class="k">this</span><span class="p">.</span><span class="nx">_perfectMasonryGetSegments</span><span class="p">();</span></div><div class='line' id='LC247'><br/></div><div class='line' id='LC248'>			<span class="c1">// If new count was different, force layout change</span></div><div class='line' id='LC249'>			<span class="k">if</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">perfectMasonry</span><span class="p">.</span><span class="nx">layout</span> <span class="o">==</span> <span class="s1">&#39;horizontal&#39;</span> <span class="o">&amp;&amp;</span> <span class="nx">oldRows</span> <span class="o">!==</span> <span class="nx">properties</span><span class="p">.</span><span class="nx">rows</span><span class="p">)</span> <span class="p">{</span> <span class="k">return</span> <span class="kc">true</span><span class="p">;</span> <span class="p">}</span></div><div class='line' id='LC250'>			<span class="k">if</span><span class="p">(</span><span class="nx">oldCols</span> <span class="o">!==</span> <span class="nx">properties</span><span class="p">.</span><span class="nx">cols</span><span class="p">)</span> <span class="p">{</span> <span class="k">return</span> <span class="kc">true</span><span class="p">;</span> <span class="p">}</span></div><div class='line' id='LC251'><br/></div><div class='line' id='LC252'>	    	<span class="k">return</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC253'>	    <span class="p">},</span></div><div class='line' id='LC254'><br/></div><div class='line' id='LC255'><br/></div><div class='line' id='LC256'><br/></div><div class='line' id='LC257'><br/></div><div class='line' id='LC258'>	    <span class="cm">/**</span></div><div class='line' id='LC259'><span class="cm">		 * Private</span></div><div class='line' id='LC260'><span class="cm">		 * Do segment calculations by hand</span></div><div class='line' id='LC261'><span class="cm">		 * -------------------------------------------------------------------------------------------------------- */</span></div><div class='line' id='LC262'>		<span class="nx">_perfectMasonryGetSegments</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC263'>			<span class="kd">var</span> <span class="nx">properties</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">perfectMasonry</span><span class="p">;</span></div><div class='line' id='LC264'>			<span class="kd">var</span> <span class="nx">parent</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">perfectMasonry</span><span class="p">.</span><span class="nx">parent</span> <span class="o">||</span> <span class="k">this</span><span class="p">.</span><span class="nx">element</span><span class="p">.</span><span class="nx">parent</span><span class="p">();</span></div><div class='line' id='LC265'><br/></div><div class='line' id='LC266'>			<span class="c1">// Calculate columns</span></div><div class='line' id='LC267'>			<span class="kd">var</span> <span class="nx">parentWidth</span> <span class="o">=</span> <span class="nx">parent</span><span class="p">.</span><span class="nx">width</span><span class="p">();</span></div><div class='line' id='LC268'>			<span class="nx">properties</span><span class="p">.</span><span class="nx">cols</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">floor</span><span class="p">(</span><span class="nx">parentWidth</span> <span class="o">/</span> <span class="nx">properties</span><span class="p">.</span><span class="nx">columnWidth</span><span class="p">)</span> <span class="o">||</span> <span class="mi">1</span><span class="p">;</span></div><div class='line' id='LC269'><br/></div><div class='line' id='LC270'>			<span class="c1">// Calculate rows</span></div><div class='line' id='LC271'>			<span class="kd">var</span> <span class="nx">parentHeight</span> <span class="o">=</span> <span class="nx">parent</span><span class="p">.</span><span class="nx">height</span><span class="p">();</span></div><div class='line' id='LC272'>			<span class="nx">properties</span><span class="p">.</span><span class="nx">rows</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">floor</span><span class="p">(</span><span class="nx">parentHeight</span> <span class="o">/</span> <span class="nx">properties</span><span class="p">.</span><span class="nx">rowHeight</span><span class="p">)</span> <span class="o">||</span> <span class="mi">1</span><span class="p">;</span></div><div class='line' id='LC273'>		<span class="p">}</span></div><div class='line' id='LC274'>	<span class="p">});</span></div><div class='line' id='LC275'><br/></div><div class='line' id='LC276'><br/></div><div class='line' id='LC277'><span class="p">})(</span><span class="nx">jQuery</span><span class="p">);</span></div><div class='line' id='LC278'><br/></div></pre></div></td>
          </tr>
        </table>
  </div>

  </div>
</div>

<a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" class="js-jump-to-line" style="display:none">Jump to Line</a>
<div id="jump-to-line" style="display:none">
  <form accept-charset="UTF-8" class="js-jump-to-line-form">
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" autofocus>
    <button type="submit" class="button">Go</button>
  </form>
</div>

        </div>

      </div><!-- /.repo-container -->
      <div class="modal-backdrop"></div>
    </div><!-- /.container -->
  </div><!-- /.site -->


    </div><!-- /.wrapper -->

      <div class="container">
  <div class="site-footer">
    <ul class="site-footer-links right">
      <li><a href="https://status.github.com/">Status</a></li>
      <li><a href="http://developer.github.com">API</a></li>
      <li><a href="http://training.github.com">Training</a></li>
      <li><a href="http://shop.github.com">Shop</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><a href="/about">About</a></li>

    </ul>

    <a href="/">
      <span class="mega-octicon octicon-mark-github" title="GitHub"></span>
    </a>

    <ul class="site-footer-links">
      <li>&copy; 2014 <span title="0.03500s from github-fe139-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="/site/terms">Terms</a></li>
        <li><a href="/site/privacy">Privacy</a></li>
        <li><a href="/security">Security</a></li>
        <li><a href="/contact">Contact</a></li>
    </ul>
  </div><!-- /.site-footer -->
</div><!-- /.container -->


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-fullscreen-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="js-fullscreen-contents" placeholder="" data-suggester="fullscreen_suggester"></textarea>
          <div class="suggester-container">
              <div class="suggester fullscreen-suggester js-navigation-container" id="fullscreen_suggester"
                 data-url="/zonear/isotope-perfectmasonry/suggestions/commit">
              </div>
          </div>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped leftwards" title="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped leftwards"
      title="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <a href="#" class="octicon octicon-remove-close close js-ajax-error-dismiss"></a>
      Something went wrong with that request. Please try again.
    </div>

  </body>
</html>

