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
