var url;
if (document.title == "Грижа за тяло")
    url = "Body.xml";
else if (document.title == "Грижа за коса")
    url = "Hair.xml";
else if (document.title == "Грижа за лице")
    url = "Skin.xml";
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) displayXML(this);
};
xhttp.open("GET", url, true);
xhttp.send();
function displayXML(xml) {
    var xmlDoc = xml.responseXML;
    var src = xmlDoc.getElementsByTagName("src");
    var onclick = xmlDoc.getElementsByTagName("onclick");
    var alt = xmlDoc.getElementsByTagName("alt");
    var item, srcValue, onclickValue, altValue;
    var articles = document.querySelector("article");
    for (var i = 0; i < src.length; i++) {
        srcValue = src[i].childNodes[0].nodeValue;
        onclickValue = onclick[i].childNodes[0].nodeValue;
        altValue = alt[i].childNodes[0].nodeValue;
        item = document.createElement("img");
        item.setAttribute("src", srcValue);
        item.setAttribute("onclick", onclickValue);
        item.setAttribute("alt", altValue);
        articles.appendChild(item);
    }
}
var modal = document.getElementById("modal01");
function onClick(element) {
    var modal = document.getElementById("modal01");
    var product = document.getElementById("img01");
    product.src = element.src;
    modal.style.display = "block";
    document.getElementById("caption").innerHTML = element.alt;
    document.getElementById("galleries").style.opacity = 0;
    
}
function onClose(_element) {
    var modal = document.getElementById("modal01");
    modal.style.display = "none";
    document.getElementById("galleries").style.opacity = 1;
    
    }