function canAccess(user) {
  if (
    (user.role === "admin" || user.role === "editor") &&
    user.isActive &&
    !user.isBanned &&
    hasPaidSubscription(user) &&
    !isTrialExpired(user) &&
    !hasPendingPayments(user)
  ) {
    return true;
  }
  return false;
}

// refatoração (extract variable pg. 147)

function canAccess(user) {
  const isValidRole = user.role === "admin" || user.role === "editor"
  const isValidUser = user.isActive && !user.isBanned
  const isValidSubscription = hasPaidSubscription(user) && !isTrialExpired(user) && !hasPendingPayments(user)
  if (isValidRole && isValidUser &&isValidSubscription) {
    return true;
  }
  return false;
}