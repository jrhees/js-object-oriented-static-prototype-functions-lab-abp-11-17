function IcebreakerResponse(email){
  this.email = email
}

IcebreakerResponse.BatchCreate = function(emails) {
  return emails.map(function(email) {
    return new IcebreakerResponse(email);
  });
<<<<<<< HEAD
}
=======
}
>>>>>>> 849d41ffd507ff55ffc575626d4307857291a0b5
