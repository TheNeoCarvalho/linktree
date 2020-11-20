const bcrypt = require('bcrypt')

bcrypt.hash("123456", 10, function(err, hash) {
   
    if(err){
        console.log(err);
        return;
    }

    console.log(hash);
});

