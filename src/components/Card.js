const randomImages = [
  'https://sun1-89.userapi.com/impg/dMSUWWxRjKCuwkYlSv90l2sZTkbduO9ngRgxoQ/rFeVTAMmP_Q.jpg?size=1090x1096&quality=95&sign=35746ca83421f99b417af64ff4200143&type=album',
  'https://sun9-49.userapi.com/impg/d6-ArzvsHtPipqEod9rJnWfe_C1dpaKuqSiwQg/3KSpfRgx-Us.jpg?size=1096x1110&quality=95&sign=011836759f5f4566029f45a014406b6b&type=album',
  'https://sun9-77.userapi.com/impg/qVpTf9rWkv2dDOtrOiElQeGe-fvB9H7Xia8jqg/8iubOmmeuyY.jpg?size=1920x893&quality=95&sign=a0cc17f080d1d2b38c503d4efee5e7b7&type=album',
  'https://sun9-3.userapi.com/impg/tjU38scsS065lFzRfxgvVsTfzH5kq9YJZoyM3w/w3WzLNgHQus.jpg?size=1200x630&quality=95&sign=dfc918c2ade552c878ce1f34a7fe852b&type=album',
  'https://sun9-57.userapi.com/impg/LF6sL7OmgudLxZGuY-_KhFVnfvuY9TfdrNmzWQ/cTWCfgTBqG4.jpg?size=1920x988&quality=95&sign=366e8ab4f9d9b13436dbe9199922575a&type=album',
  'https://sun9-17.userapi.com/impg/XMiNsfvEK_dl6WvL4XMVFDPf6DaSxdO7F35ctw/_Lmt10Ye6J8.jpg?size=800x500&quality=95&sign=e45ac49eca4637e0999b649c173d7e7e&type=album',
  'https://sun9-85.userapi.com/impg/7O5ZxxaR3KJKprVPI0UfDJze77_NCZAReCg6og/EFr6zPcWjng.jpg?size=1066x466&quality=96&sign=6378b9f08472cabacbc48c985ca8acf2&type=album',
  'https://sun9-85.userapi.com/impg/jSa-uMepzqn8LJScqo8VeQA3_sd7t6hvrpzRdA/BPATsOUl6jg.jpg?size=1860x1332&quality=95&sign=afa837ef8e8a49a0a2601ec614cae478&type=album',
  'https://sun9-77.userapi.com/impg/gqkHRLOXjlztnuT6BVke20sgAuGKzxD9BveyQQ/zCwZThNY5o0.jpg?size=2560x1294&quality=96&sign=789b2e0fb5ccee2c406421f26cf9c1c8&type=album',
  'https://sun9-5.userapi.com/impg/1v5Z1trNc1CUXPwL4nvoHwyHDxL_LSej248R8A/9dAOfjrfEJU.jpg?size=1920x1080&quality=96&sign=b85ce71d236303b86ab32bea3dc490d9&type=album'
]


export default function CreateCard(data) {
  const template = document.querySelector('.card-template').content.cloneNode(true)
  let element = template.querySelector('.card')
  let title = template.querySelector('.card__title')
  let subtitle = template.querySelector('.card__subtitle')
  let body = template.querySelector('.card__description')
  let author = template.querySelector('.card__author')
  let button = template.querySelector('.card__button')
  const img = template.querySelector('.card__img')
  img.src = data.src || randomImages[Math.floor(Math.random() * 10)]

  title.textContent = data.title
  subtitle.textContent = data.subtitle
  body.textContent = data.body
  author.innerHTML = `${data.author.split(' ').slice(0, 2).join(' ')} <span class="card__name">${data.author.split(' ').slice(2, 3).join(' ')}</span> ${data.author.split(' ').slice(3).join(' ')}`;
  return element
}




