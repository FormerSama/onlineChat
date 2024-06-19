var signInButton = document.getElementById('signIn');
signInButton.addEventListener('click', function () {
    try {
        var username = document.getElementById('username_textfield').value;
        var password = document.getElementById('password_textfield').value;
    }catch (e) {
        TypeError(e);
    }
    
    
    fetch('https://github.com/FormerSama/onlineChat/blob/25ba2e845514b771e5b673656592b020a95331ef/userdata.json')
    .then((response) => response.json())
    .then((json) => {
        
        data = json['Users'];
        let hit = false;
        for (let i = 0; i < data.length; i++) {
            if (data[i]['UserName'] == username && data[i]['password'] == password) {
                
                hit = true;
                break;
            }
        }
        if (hit) {
            console.log('hit');
        }
    });
    
    

    
})

var signUpButton = document.getElementById('signUp');
signUpButton.addEventListener('click', function() {
    let container = document.getElementById('container');
    window.open('SignUpPort.html');
    window
})

