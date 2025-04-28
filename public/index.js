const submit = document.querySelector('.submit')


fetch('newBowl', {
    method: 'post',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
        'title': title,
        'base': base,
        'protien':protein,
        'veggies':veggies,
        'toppings': toppings
    })
    })
    .then(response => {
        if (response.ok) return response.json()
    })
    .then(data => {
        console.log(data)
        window.location.reload(true)
    })