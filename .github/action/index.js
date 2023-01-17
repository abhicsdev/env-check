let ADMINS = process.env.ADMINS;

async function fun() {
  console.log(process.env);
  console.log(ADMINS);
  
  if(ADMINS.includes("abhin1509") === true) {
    console.log("working");
  } else {
    console.log("not");
  }
}
fun();
