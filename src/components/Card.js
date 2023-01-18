export default function CreateCard(data) {
  const template = document.querySelector('.card-template').content.cloneNode(true)
  let element = template.querySelector('.card')
  let title = template.querySelector('.card__title')
  let subtitle = template.querySelector('.card__subtitle')
  let body = template.querySelector('.card__description')
  let author = template.querySelector('.card__author')
  let authorName = template.querySelector('.card__name')
  let button = template.querySelector('.card__button')

  title.textContent = data.title
  subtitle.textContent = data.subtitle
  body.textContent = data.body
  author.innerHTML = `${data.author.split(' ').slice(0, 2).join(' ')} <span class="card__name">${data.author.split(' ').slice(2, 3).join(' ')}</span> ${data.author.split(' ').slice(3).join(' ')}`;
  return element
}




