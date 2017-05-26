/* eslint-env browser*/
function get_doc(id){
    //const url = "https://onedrive.live.com/?authkey=%21AKHuor8rk7EXgwU&v=TextFileEditor&id=EE5622101E19E5A7%215828&cid=EE5622101E19E5A7&parId=root";
    const url = 'https://www.googleapis.com/drive/v3/files/'+id+'/export?mimeType=text%2Fplain&key=AIzaSyBzLspgUOJBw0KJp8PzJD8vd_9G4QNOtzo';
    if(self.fetch){
    var setHeaders = new Headers();

    var setOptions = {
        method: 'GET',
        headers: setHeaders
    };
    
    fetch(url,setOptions)
        .then(response => { if(response.ok){
    /*    
        var reader = response.body.getReader();
        var decoder = new TextDecoder();
        reader.read().then(function(result){
            var data = {};
            data = decoder.decode(result.value, {stream: !result.done});
            document.getElementById("demo").innerHTML = data;
            var converter = new showdown.Converter();
            converter.setFlavor('allOn');
            html      = converter.makeHtml(data);
            document.getElementById("demo").innerHTML = html;*/
    //      console.log(response.text());
          return response.text();
      }
    else{
        console.log("Response wast not ok");
    }
    })  .then(myText => {
            var converter = new showdown.Converter();
            converter.setFlavor('allOn');
            html      = converter.makeHtml(myText);
            document.getElementById("demo").innerHTML = html;
    
    })   .catch(error => {
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