function change(){
    var img=document.getElementById("bulb");
    if(img.src.match("./bulbyoff.jpg"))
    {
        img.src="./bulbyon.jpg";

    }
    else{
        img.src="./bulbyoff.jpg";
    }
}