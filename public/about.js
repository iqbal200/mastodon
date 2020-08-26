var loading = true;

window.setInterval(function() {
    if (loading) {
        window.scrollTo(0,0);
    }
});

$(document).ready(function() {
    //Translations
    if (navigator.language.includes("de")) {
        $("#tagline").html("Wir stellen Internetdienste für dich und deine Freunde bereit");
        $("#card1").html("koyu.space<br><small>(Mastodon-Instanz)</small>");
        $("#card4").html("Minecraft-Server<br><small>(mc.koyu.space)</small>");
        $("#card5").html("Nordcast<br><small>(Podcast-App)</small>");
        $("#card7").html("koyu.space auf VHS<br><small>(PeerTube-Instanz)</small>");
        $("#more").html("Impressum & Nutzungsbedingungen");
        $("#privacy").html("Datenschutzerklärung");
        $("#donate-text").html("Spenden");
        $("#sponsors-intro").html("koyu.space wird ermöglicht durch");
        $("#admin").html("Administrator*in");
        $("#mod").html("Moderator*in");
        $("#donator").html("Spender*in");
        $("#infrastructure").html("Infrastruktur");
        $("#foss-text").html("Open-Source");
        $("#contact-text").html("Kontakt");
        $("#login-text").html("Anmelden oder registrieren");
        $("#jabber-title").html("koyu.space Jabber/XMPP-Server");
        $("#jabber-desc").html("XMPP (oder Jabber) ist ein dezentrales Messaging-Protokoll.");
        $("#register").html("Registrieren");
        $("#jabber-makesure").html("und stelle sicher, dass der Server <code>jabber.koyu.space</code> ist.");
        $("#jabber-reg").html("In-Band-Registrierung (mit Captcha)");
        $("#jabber-call").html("Audio- und Videoanrufe über STUN und TURN");
        $("#jabber-e2e").html("Ende-zu-Ende-Verschlüsselung mit OMEMO");
        $("#jabber-files").html("HTTP-Dateiuploads (max. 100MB)");
        $("#jabber-avatars").html("Benutzer-Avatare");
        $("#jabber-more").html("...und viele viele mehr");
        $("#home-text").html("Zurück zur Startseite");
        $("#public-text").html("Öffentliche Zeitleiste");
        $("#explore-text").html("Profilverzeichnis");
        $("#gp-badge").attr("src", "/img/gp_de.png");
    }

    // Sponsor table
    window.setTimeout(function() {
        $.each($("#avatars a"), function(index, element) {
            var upper = this;
            $.get("https://koyu.space/api/v1/accounts/"+$(element).attr("acctid"), function(data) {
                upper.innerHTML = "<img class=\""+upper.children[0].className+"\" src=\""+data.avatar+"\" alt=\"@"+data.acct+"\">";
            });
        });
    });

    // Blank links
    $(".blanklink").click((ev) => {
        ev.preventDefault();
        return false;
    });


    // Loading screen
    function getInterval() {
        if (location.href.includes("/about")) {
            return 3000;
        } else {
            return 1000;
        }
    }
    function onReady(callback) {
        var intervalId = window.setInterval(function() {
            if (document.getElementsByTagName('body')[0] !== undefined) {
            window.clearInterval(intervalId);
            callback.call(this);
            }
        }, getInterval());
    }
    onReady(function() {
        $(".page").removeAttr("style");
        $("body").removeAttr("style");
        $("#loading").hide();
        loading = false;
    });
});

function hamburger() {
    var x = document.getElementById("links");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
}