
var menuItem = {
    "id" : "Uper",
    "title" : "Uper",
    "contexts" : ["selection"]
   };
   chrome.contextMenus.create(menuItem);
   
   function fixedEncodeURI(str){
    return encodeURI(str).replace(/%5B/g, '[').replace(/%5D/g, ']');
   }
   
   chrome.contextMenus.onClicked.addListener(function(clickData){
    if(clickData.menuItemId== "Uper" && clickData.selectionText){
    const tex=document.querySelectorAll('h1,h2,h3,h4,h5,p,li,td,caption,span,a')
    var text = fixedEncodeURI(clickData.selectionText)
    var up = text.toUpperCase()
    alert(up)
    }
   });