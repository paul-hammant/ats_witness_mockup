var p = location.pathname.replaceAll("/", "");

document.write('<p>SHA1 from the URL pathname: <span style="color:purple">' + p + '</span> (left of the \'/#\' in the URL)</p>')

var h = decodeURI(location.hash.substring(1)).replaceAll("<br>","\n").replaceAll("%20"," ");
hh = h.replaceAll("\n", "<br>")

document.write('<p>Text (right of the \'/#\' in the URL):</p><div style="margin-left: 20px"><b style="color:red">' + hh + '</b></div>')

sha1 = new Hashes.SHA1().hex(h)
// output into DOM
document.write('<p>SHA1: <span style="color:blue">' + sha1 + '</span></p>')

if (p == sha1) {
    document.write('<p>✅ <span style="color:blue">SHA1</span> of the text passed <span style="color:red">right</span> of the \'/#\' in the URL matches the SHA1 of the <span style="color:purple">left</span> of the \'/#\' in the URL.<br>Claim verified, if the prospective employer hosts the SHA1.</p>');
} else {
    document.write('<p>❌ <span style="color:blue">SHA1</span> of the text passed <span style="color:red">right</span> of the \'/#\' in the URL <b>DOES NOT MATCH</b> the SHA1 of the <span style="color:purple">left</span> of the \'/#\' in the URL<br>Claim not verified.</p>');
}
document.write("<p>Always refer/email/store/note the full SHA1, never shorten it.</p>\n" +
    "<p>If you are the candidate, you should have been emailed the above, too.</p>");