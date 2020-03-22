module.exports = function check(str, bracketsConfig) {
  let Massiv=[];
  for(let i=0;i<str.length;i++)
  { 
    if(str[i]=="8")
    {
      if(Massiv[Massiv.length-1]=="8"){
       Massiv.pop(); 
      } 
      else{
       Massiv.push(str[i]); 
      } 
    }
    if(str[i]=="7")
    {
      if(Massiv[Massiv.length-1]=="7"){
        Massiv.pop();
      } 
      else{
       Massiv.push(str[i]); 
      } 
    }
    if(str[i]=='(' || str[i]=="{" || str[i]=="[" || str[i]=="1" || str[i]=="3" || str[i]=="5"){
      Massiv.push(str[i]);
    } 
    if(str[i]=="|")
    {
      if(Massiv[Massiv.length-1]=="|") {
        Massiv.pop();
      }
      else{
       Massiv.push(str[i]); 
      } 
    }   

    if(str[i]==')' || str[i]=="}" || str[i]=="]") {
      switch(str[i]){
        case ")":
          if(i-1<0){
            return false;
          } 
          if(Massiv[Massiv.length-1]=="("){
            Massiv.pop();
          } 
          else{
            return false;
          }
          break;
        case "}":
          if(i-1<0){
            return false;
          } 
          if(Massiv[Massiv.length-1]=="{"){
            Massiv.pop();
          }
          else{
            return false;
          }
          break;
        case "]":
          if(i-1<0) return false;
            if(Massiv[Massiv.length-1]=="["){
             Massiv.pop(); 
            } 
            else{
              return false;
            }
            break;
      }
    }
    if(str[i]=="2" || str[i]=="4" || str[i]=="6"){
      switch(str[i]){
      case "2":
        if(i-1<0){
         return false; 
        } 
        if(Massiv[Massiv.length-1]=="1"){
          Massiv.pop();
        } 
        else{
         return false; 
        } 
        break;
      case "4":
         if(i-1<0){
          return false; 
         } 
         if(Massiv[Massiv.length-1]=="3"){
          Massiv.pop(); 
         } 
         else{
          return false; 
         } 
         break;
      case "6":
        if(i-1<0){
          return false;
        } 
        if(Massiv[Massiv.length-1]=="5"){
         Massiv.pop(); 
        } 
        else{
         return false; 
        } 
        break;
      }
    }
  }
  if(Massiv.length>0){
    return false;
  } 
  return true;
}