let ADMINS = process.env.ADMINS;

// abhin1509,ceejeey,sohamtamboli,akhilvc10,antstackio,stackw3

let checkUser = (str) => {
  // if(ADMINS.split(",").includes(str) === true) {
  //   return true;
  // }
  // return false;
  for(let i=0; i<ADMINS.split(",").length; i++) {
    if(ADMINS.split(",")[i] === str) {
        return true;
    }
}
return false;
}

async function fun() {
  console.log(process.env);
  console.log("abhin1509:: ", checkUser("abhin1509"));
  console.log("akki:: ", checkUser("akki"));
  console.log("ceejeey:: ", checkUser("ceejeey"));
  console.log("soham:: ", checkUser("soham"));
  console.log("kumar:: ", checkUser("kumar"));
  console.log("abhi:: ", checkUser("abhi"));
  console.log("abhin150:: ", checkUser("abhin150"));
  console.log("ceejey:: ", checkUser("ceejey"));
  console.log("akkivc:: ", checkUser("abhin1509"));
  console.log("soha:: ", checkUser("soha"));
}
fun();
