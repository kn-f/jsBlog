/* eslint-env browser*/
function get_doc(resourceId,serviceId){
    
    // ------------------
    var encodedurl = "https://1drv.ms/t/s!AqflGR4QIlburUSh7qK_K5OxF4MF";
    var b64url = btoa(encodedurl);
    var trimurl = b64url.replace("/=+$/=","");
    var cleanurl = trimurl.replace('/','_');
    cleanurl = cleanurl.replace('+','-');
    //var finalurl = "https://api.onedrive.com/v1.0/shares/u!" + cleanurl;
    var finalurl = "https://graph.microsoft.com/v1.0/me/drive/items//s!AqflGR4QIlburUSh7qK_K5OxF4MF/content";
    //finalurl = "https://onedrive.live.com/download?cid=EE5622101E19E5A7&resid=EE5622101E19E5A7%215828&authkey=ADWVYQbpHHPxJHQ";
    //finalurl="https://qvczka-sn3301.files.1drv.com/y4mP2hclae3_PjLGaUzM1vawuwnsME7yEzVSCfbitRAfIUOfanUrrn9l7lLa-R0SDgFjEJTft0cgtiAcK9RyusoEVfe3jbJ4UuiHOXCcZQHP5KpkI6Fu2U44YuIbD-aEUkUR_uS-cxgnIscqoyiSaFOsLrChEocqOQKINPMPvvgmK8PYjJiIJf7PkcKU6Pc3JCJ5-Rbdisl0ZhLitSjV4zp1Q/test.txt?download&psid=1";
    
    // ------------------
    
    var url = {};
    url = {
        "gdrive":   'https://www.googleapis.com/drive/v3/files/'+resourceId+'/export?mimeType=text%2Fplain&key=AIzaSyBzLspgUOJBw0KJp8PzJD8vd_9G4QNOtzo',
        "dropbox":  'https://dl.dropboxusercontent.com/s/'+resourceId,
        "onedrive": finalurl
    };
    console.log(url[serviceId]);
    if(self.fetch){
    var setHeaders = new Headers();
 //   setHeaders.append('Authorization', 'Bearer ' + authToken.access_token);
 //   setHeaders.append('mimeType', "text/plain");

    var setOptions = {
        method: 'GET',
        headers: setHeaders,
 //       redirect: 'follow'
    //    mode: "no-cors"
    };
    
    fetch(url[serviceId],setOptions)
        .then(response => {if(response.ok){
        var reader = response.body.getReader();
        var decoder = new TextDecoder();
        reader.read().then(function(result){
            var data = {};
            data = decoder.decode(result.value, {stream: !result.done});
            document.getElementById("demo").innerHTML = data;
            var converter = new showdown.Converter();
            converter.setFlavor('allOn');
            html      = converter.makeHtml(data);
            document.getElementById("demo").innerHTML = html;
    });
        }
    else{
        console.log("Response was not ok: " + response.body);
    }
    })  .catch(error => {
        console.log("There is an error " + error.message);
    });
    }
}

function get_doc_new(resourceId,serviceId) {
    var url = {};
    url = {
        "gdrive":   'https://www.googleapis.com/drive/v3/files/'+resourceId+'/export?mimeType=text%2Fplain&key=AIzaSyBzLspgUOJBw0KJp8PzJD8vd_9G4QNOtzo',
        "dropbox":  'https://dl.dropboxusercontent.com/s/'+resourceId,
        "onedrive": 'https://onedrive.live.com/download?cid=EE5622101E19E5A7&resid=EE5622101E19E5A7%215828&authkey=ADWVYQbpHHPxJHQ'
    };
    console.log(url[serviceId]);
  
    $.get( url[serviceId])
        .done(function(data, textStatus, jqXHR) {
            if(textStatus == "success") {
                var converter = new showdown.Converter();
                converter.setFlavor('allOn');
                html  = converter.makeHtml( data);
                document.getElementById("demo").innerHTML =html;  
            }
        })
        .fail(function(jqXHR, textStatus, errorThrown) {
           console.log("There is an error "+ errorThrown );
        });
}

function getQueryVariable(variable)
{
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == variable){return pair[1];}
       }
       return(false);
}