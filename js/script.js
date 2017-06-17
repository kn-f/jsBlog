/* eslint-env browser*/
const DEFAULT_RESOURCE = "15shNCte_Ur6AVG5gzUdtiI_D701D8YeGhv4c4nUoSpI";
const DEFAULT_SERVICE = "gdrive";
const DEFAULT_POSITION = "demo";
const DEFAULT_CSS = "darkly";

function write_markdown(resourceId, serviceId ,position){
    resourceId = resourceId || DEFAULT_RESOURCE; //mandatory solution - not using = in the function definition - as if param is null, will not end to default direction
    serviceId = serviceId || DEFAULT_SERVICE;
    position = position || DEFAULT_POSITION;
    var url = "";
    
    try {
        switch(serviceId) {
            case "gdrive":
                url = 'https://www.googleapis.com/drive/v3/files/'+resourceId+'/export?mimeType=text%2Fplain&key=AIzaSyBzLspgUOJBw0KJp8PzJD8vd_9G4QNOtzo';
                break;
            case "dropbox":
                url = 'https://dl.dropboxusercontent.com/s/'+ resourceId;
                break;    
            case "onedrive":
                url = "https://cors-anywhere.herokuapp.com/" + 'https://onedrive.live.com/download?' + atob(resourceId);
                break;
            case "local":
                url = resourceId;
                break;
            default:
                console.log("Service not identified:" + serviceId); // TODO redirect to a generic error page
        }

        console.log(url); // DEBUG
        if(self.fetch){
            var setHeaders = new Headers();

            var setOptions = {
                method: 'GET',
                headers: setHeaders,
            };

            fetch(url,setOptions)
                .then(response => response.text() )
                .then(text => markdown2HTML(text,position));
        }
    }
    catch (e) {
                console.log("There is an error " + e.message)
    }
}

function markdown2HTML(text,position="demo") {
    var converter = new showdown.Converter();
    converter.setFlavor('allOn');
    html      = converter.makeHtml(text);
    document.getElementById(position).innerHTML = html;    
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

function setCSS(cssName) {
    cssName = cssName || DEFAULT_CSS;
    var link = document.createElement( "link" );
    link.href = "https://maxcdn.bootstrapcdn.com/bootswatch/3.3.7/"+cssName+"/bootstrap.min.css";
    link.type = "text/css";
    link.rel = "stylesheet";
    link.media = "screen,print";

    document.getElementsByTagName( "head" )[0].appendChild( link );
}