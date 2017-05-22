/* eslint-env browser*/
function get_doc(id){
    const url = 'https://www.googleapis.com/drive/v3/files/'+id+'/export?mimeType=text%2Fplain&key=AIzaSyBzLspgUOJBw0KJp8PzJD8vd_9G4QNOtzo';
    if(self.fetch){
    var setHeaders = new Headers();
 //   setHeaders.append('Authorization', 'Bearer ' + authToken.access_token);
 //   setHeaders.append('mimeType', "text/plain");

    var setOptions = {
        method: 'GET',
        headers: setHeaders
    };
    
    fetch(url,setOptions)
        .then(response => { if(response.ok){
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
        console.log("Response wast not ok");
    }
    })  .catch(error => {
        console.log("There is an error " + error.message);
    });
    }
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