export const removeGoogleFromId = (currentUserId) => {
    if(currentUserId.includes("google")){
      const getNumbers = currentUserId.split("|")
      return getNumbers[1];
    }
    return currentUserId
}