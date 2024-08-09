function convert() {
  const T = parseFloat(document.querySelector('#inputvalue').value);
  const inputunit = (document.querySelector('#inputunit')).value;
  const outputunit = (document.querySelector('#outputunit')).value;
   let result = 0;

   if (inputunit === outputunit) {
      result = T;
   } else {
       let temp;   
       switch(inputunit) {
        case "C":
          temp = T;
          break;
        case "F":
          temp = (T - 32) * 5 / 9;
          break;
        case "K": 
          temp = T - 273.15 ;
          break;
        case "R":
          temp = (T - 491.67) * 5 / 9;
          break;
        default:
          temp= NaN ;
      }

      switch(outputunit) {
        case "C" :
          result = temp ;
          break;
        case "F" :
          result = (temp * 9/5) + 32 ;
          break;
        case "K" :
          result = temp + 273.15 ;
          break;
        case "R" :
          result = (temp * 9/5) + 491.67;
          break;
        default: 
          result= NaN ;

      }
   }
   document.querySelector('#result').value = result.toFixed(2) ;
}