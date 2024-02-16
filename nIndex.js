function go(){
 let word = document.getElementById("myText").value;
 let times = document.getElementById("times").value;
 if(word === null || times === null || word == '' || times == ''){
    alert('Enter valid informations!');
 }
 else{
    let outBox = document.getElementById("outText");
 let output = word.repeat(times);
 outBox.textContent = output;
 }
}
function copy(){
  let outy = document.getElementById("outText").innerText;
  if(outy == '' || outy == null || outy == undefined){
        alert('Nothing to copy')
    } else{
        navigator.clipboard.writeText(outy)
    .then(() => {
      alert('Text copied to clipboard successfully!');
    })
    .catch(err => {
      alert('Unable to copy text to clipboard:', err);
    });
  }
}