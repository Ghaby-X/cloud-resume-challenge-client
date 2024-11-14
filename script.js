import functionUrl from "./env.js"

const visitor_count = document.getElementById('visitor_count')
visitor_count.innerText = '...'


fetch(functionUrl, {
    credentials: 'include',
},
).then(async response => {
    const value = await response.json()
    visitor_count.innerText = value.count
})
