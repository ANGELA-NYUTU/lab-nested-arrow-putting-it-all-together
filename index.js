function createLoginTracker(userInfo) {
  let attemptCount = 0;

  return (passwordAttempt) => {
    // If already locked
    if (attemptCount >= 3) {
      return 'Account locked due to too many failed login attempts';
    }

    // If correct password
    if (passwordAttempt === userInfo.password) {
      return 'Login successful';
    }

    // If wrong password
    attemptCount++;
    return `Attempt ${attemptCount}: Login failed`;
  };
}

module.exports = { createLoginTracker };