function shuffle (data) {
    var a = data.split(""),
        n = a.length;

    for(var i = n - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var tmp = a[i];
        a[i] = a[j];
        a[j] = tmp;
    }
    return a.join("");
}

function generate()
{
    
    if ($('#spc').is(":checked"))
    {
      var input_text = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*()+?"
      var possible = shuffle(input_text);
      console.log(possible);
    }
    else
    {
        var input_text = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        var possible = shuffle(input_text);
        console.log(possible);
    }
    
    var loops =  Math.floor((Math.random() * 6) +11 );
    var password = "";
    

    for( var i=0; i < loops; i++ )
    {
        password += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    $("#password").val(password);
}

(function(){
var wurl = window.location.href;
$("#tws").attr("href", "https://twitter.com/share?url=" + wurl + "&text=A simple random password generator&related=justruky");
$("#fbs").attr("href", "https://www.facebook.com/sharer/sharer.php?u=" + wurl);
})();
