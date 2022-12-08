var images = ['img1.jpeg', 'img2.jpeg', 'img3.jpeg'];
var count = 0;
var imgTag = document.querySelector('img');
function next(){
  count++;
 if(count == images.length){
   count= 0;
  imgTag.src = images[count] 
 }else{
 imgTag.src = images[count]
}
}
function prev(){
  count--;
  if(count < 0){
   count = images.length -1 ;
   imgTag.src = images[count]
  }else{
    imgTag.src = images[count]
  }
}
