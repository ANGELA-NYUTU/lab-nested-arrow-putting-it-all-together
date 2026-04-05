const userInfo ={
  username :'admin',
  password : 'admin123'
}
function createLoginTracker(userInfo){
 let attemptCount = 0;
 return (passwordAttempt) =>{
  
  if(passwordAttempt === userInfo.password){
    console.log ('You are now logged in to your account');
  } else { attemptCount++;
    console.log(`The password you entered is incorrect. you now have ${3-attemptCount} attempts left`)
  }
  if (attemptCount >= 3){
    console.log('you have reached the maximum number of login attempts. Please contact your administartor for further assistance.')
  }
 };
}


const login = createLoginTracker(userInfo);

login('wrong1');
login('wrong2');
login('admin123');

module.exports = login