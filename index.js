const userInfo ={
  username :'admin',
  password : 'admin123'
}
function createLoginTracker(userInfo){
 const attemptCount = 0;
 (passwordAttempt) =>{
  attemptCount++;
  if(passwordAttempt === userInfo.password){
    console.log ('You are now logged in to your account');
  } else {
    console.log(`The password you entered is incorrect. you now have ${3-attemptCount} attempts left`)
  }
  if (attemptCount >= 3){
    console.log('you have reached the maximum number of login attempts. Please contact your administartor for further assistance.')
  }
 }
}
module.exports = createLoginTracker(userInfo)