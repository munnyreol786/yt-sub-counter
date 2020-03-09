function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m, key, value) {
        vars[key] = value
    });
    return vars
}

if(!getUrlVars()["c"]){
	user="UCq-Fj5jknLsUf-MWSy4_brA";
} else {
	user=getUrlVars()["c"];
}

var disqus_config = function () {
    this.page.url = 'https://munnyreol786.github.io/yt-sub-counter/?c='+user;
};

(function() {
var d = document, s = d.createElement('script');
s.src = 'https://munny-reol.disqus.com/embed.js';
s.setAttribute('data-timestamp', +new Date());
(d.head || d.body).appendChild(s);
})();
