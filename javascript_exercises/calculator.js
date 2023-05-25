// Displaying of inputs






function one() {
    const show = document.querySelector('.calc-display');
     if (show.innerHTML === '0'){
         show.innerHTML = 1;
     }else if(
      show.innerHTML.length == 30){
        show.innerHTML +='';
      }
     
     else{
       show.innerHTML +=1 ;
     }
   
   }
   
   function two() {
     const show = document.querySelector('.calc-display');
      if (show.innerHTML === '0'){
          show.innerHTML = 2;
      }else if(
        show.innerHTML.length == 30){
          show.innerHTML +='';
        }
       else{
        show.innerHTML +=2 ;
      }
    
    }
   
    function three() {
     const show = document.querySelector('.calc-display');
      if (show.innerHTML === '0'){
          show.innerHTML = 3;
      } else if(
        show.innerHTML.length == 30){
          show.innerHTML +='';
        }
      else{
        show.innerHTML +=3 ;
      }
    
    }
    function four() {
     const show = document.querySelector('.calc-display');
      if (show.innerHTML === '0'){
          show.innerHTML = 4;
      }else if(
        show.innerHTML.length == 30){
          show.innerHTML +='';
        }
       else{
        show.innerHTML +=4 ;
      }
    
    }
    function five() {
     const show = document.querySelector('.calc-display');
      if (show.innerHTML === '0'){
          show.innerHTML = 5;
      }else if(
        show.innerHTML.length == 30){
          show.innerHTML +='';
        }
       else{
        show.innerHTML +=5 ;
      }
    
    }
    function six() {
     const show = document.querySelector('.calc-display');
      if (show.innerHTML === '0'){
          show.innerHTML = 6;
      }else if(
        show.innerHTML.length == 30){
          show.innerHTML +='';
        }
       else{
        show.innerHTML +=6 ;
      }
    
    }
    function seven() {
     const show = document.querySelector('.calc-display');
      if (show.innerHTML === '0'){
          show.innerHTML = 7;
      }else if(
        show.innerHTML.length == 30){
          show.innerHTML +='';
        } 
      else{
        show.innerHTML +=7 ;
      }
    
    }
    function eight() {
     const show = document.querySelector('.calc-display');
      if (show.innerHTML === '0'){
          show.innerHTML = 8;
      } else if(
        show.innerHTML.length == 30){
          show.innerHTML +='';
        }
      else{
        show.innerHTML +=8 ;
      }
    
    }
    function nine() {
     const show = document.querySelector('.calc-display');
      if (show.innerHTML === '0'){
          show.innerHTML = 9;
      } else if(
        show.innerHTML.length == 30){
          show.innerHTML +='';
        }
      else{
        show.innerHTML +=9 ;
      }
    
    }
    function zero() {
     const show = document.querySelector('.calc-display');
     if (show.innerHTML === '0'){
        show.innerHTML = 0;
     } else if(
      show.innerHTML.length == 30){
        show.innerHTML +='';
      }
      else{
       show.innerHTML +=0;
     }
   
     }
   
     function decimal(){
       const show =document.querySelector('.calc-display');
       if (show.innerHTML === '0'){
         show.innerHTML = '0.';
       }else 
         if(show.innerHTML.includes('.')){
         show.innerHTML += '';
       }else if(
        show.innerHTML.length == 30){
          show.innerHTML +='';
        }
         else if(
          show.innerHTML != 0){
           show.innerHTML += '.';
         }
        }  
      function Cancel(){
        const show =document.querySelector('.calc-display');
          if(show.innerHTML ==='0'){
            show.innerHTML +='';
          }else if(
            show.innerHTML!='0' && show.innerHTML.length == 1 ){
              show.innerHTML = '0';
            } 
          else { 
            show.innerHTML= show.innerHTML.slice(0,-1);

          }
    
          }
      
           
    
   
     function Clear(){
        const show =document.querySelector('.calc-display');
        const result = document.querySelector('.calc-result');
         show.innerHTML = '0';
         result.innerHTML = '';
         
     }
   
   // Operator Keys
    
    function add(){
      const show =document.querySelector('.calc-display');
       if (show.innerHTML ==='0'){
          show.innerHTML += '+';
       }else if(
        show.innerHTML.includes('+')||show.innerHTML.includes('-')||show.innerHTML.includes('*')||show.innerHTML.includes('/')){
         show.innerHTML += '';
       }else if(
        show.innerHTML.length == 30){
          show.innerHTML +='';}
        else {
         show.innerHTML +='+';
       }
          
     
    }
   
   function minus(){
     const show =document.querySelector('.calc-display');
     if (show.innerHTML ==='0'){
       show.innerHTML += '-';
    }else if(
     show.innerHTML.includes('+')||show.innerHTML.includes('-')||show.innerHTML.includes('*')||show.innerHTML.includes('/')){
       show.innerHTML += '';
     } else if(
      show.innerHTML.length == 30){
        show.innerHTML +='';}
     else {
       show.innerHTML +='-';
     }
     
   }
   
   function times(){
     const show =document.querySelector('.calc-display');
     if (show.innerHTML ==='0'){
       show.innerHTML += '*';
    }else if(
     show.innerHTML.includes('+')||show.innerHTML.includes('-')||show.innerHTML.includes('*')||show.innerHTML.includes('/')){
       show.innerHTML += '';
     } else if(
      show.innerHTML.length == 30){
        show.innerHTML +='';}
     else {
       show.innerHTML +='*';
     }
   }
   function divide(){
     const show =document.querySelector('.calc-display');
     if (show.innerHTML ==='0'){
       show.innerHTML += '/';
    }else if(
     show.innerHTML.includes('+')||show.innerHTML.includes('-')||show.innerHTML.includes('*')||show.innerHTML.includes('/')){
       show.innerHTML += '';
     }else if(
      show.innerHTML.length == 30){
        show.innerHTML +='';}
      else {
       show.innerHTML +='/';
     }
   }
   function equals(){
     const show=document.querySelector('.calc-display');
     const result =document.querySelector('.calc-result');
     result.innerHTML = eval(show.innerHTML);
      
   
   }
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   