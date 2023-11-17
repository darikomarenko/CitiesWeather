const cities = ['Москва', 'Санкт-Петербург', 'Краснодар', 'Екатеринбург', 'Казань'];
const rootNode = document.getElementById('cities')

const data = [];
cities.forEach(city => {
    degree = +prompt(`Введите температуру в городе: ${city}`)
    data.push({'name': city, 'degree': degree});
})

data.forEach(item => {
    const node = document.createElement('div')
    node.textContent = `${item.name}: ${item.degree}`
    rootNode.append(node)
})

const degrees = [];
data.forEach(item => {
    degrees.push(item.degree)
})

const maxDegree = Math.max(...degrees)
const maxNode = document.createElement('div')
maxNode.textContent = `Максимальная температура: ${maxDegree}`
rootNode.append(maxNode)

const minDegree = Math.min(...degrees)
const minNode = document.createElement('div')
minNode.textContent = `Максимальная температура: ${minDegree}`
rootNode.append(minNode)
