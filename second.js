document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM loaded ");
 

var friends=['Jay', 'Chantai', 'Tiara', 'Andrea', 'Thomas'];

document.getElementById('button').addEventListener('click', function(){
    for (let f = 0; f < friends.length; f++) {
        var div = document.createElement("div");//creates div
        document.body.appendChild(div);//sends div t html body//
        div.className = 'friends'; //sets div class name to friends//
        let h3 = document.createElement('h3');//creates h3
        div.appendChild(h3);//puts h3 tag in div//
        let text = document.createTextNode(`${friends[f]} :`)//what do i want my text to read//
        h3.appendChild(text);//puts text in h3
    for (let i = 99; i >0; i--) {
        if(i === 2){
           let p = document.createElement('p');
           div.appendChild(p);
           let lyric = document.createTextNode(`${i} lines of code in the file, ${i} lines of code; ${friends[f]} strikes one out, clears it all out, ${i-1} line of code in the file`);
           p.appendChild(lyric);
        } else if (i===1){
           let p = document.createElement('p');
           div.appendChild(p);
           let lyric = document.createTextNode(`${i} line of code in the file, ${i} line of code; ${friends[f]} strikes one out, clears it all out, no more lines of code in the file`);;
           p.appendChild(lyric);
        } else {
            let p = document.createElement('p');
            div.appendChild(p);
           let lyric = document.createTextNode(`${i} lines of code in the file, ${i} lines of code; ${friends[f]} strikes one out, clears it all out, ${i-1} lines of code in the file`);
           p.appendChild(lyric);
        }
    }
}
})
});