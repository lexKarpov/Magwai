import styles from './index.css';
import CreateCard from "../components/Card";
import Slider from "../components/Slider";
import planet from '../images/planet.jpg';
import money from '../images/money.jpg';
import car from '../images/car.jpg';
import card1 from '../images/cards/1.jpg'
import card2 from '../images/cards/2.jpg'
import card3 from '../images/cards/3.jpg'
import card4 from '../images/cards/4.jpg'
import card5 from '../images/cards/5.jpg'
import card6 from '../images/cards/6.jpg'
import card7 from '../images/cards/7.jpg'
import card8 from '../images/cards/8.jpg'
import card9 from '../images/cards/9.jpg'
import card10 from '../images/cards/10.jpg'

const initialCards = [
  {
    title: 'bridge',
    subtitle: 'How to increase your productivity with a Music',
    body: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem santium doloremque laudantium, totam rem sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolo…',
    author: 'Posted by Eugenia, on July  24, 2019',
    src: card1,
  },
  {
    title: 'Water',
    subtitle: 'How to increase your productivity with a Music',
    body: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem santium doloremque laudantium, totam rem sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolo…',
    author: 'Posted by Eugenia, on July  24, 2019',
    src: card2,
  },
  {
    title: 'bridge',
    subtitle: 'How to increase your productivity with a Music',
    body: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem santium doloremque laudantium, totam rem sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolo…',
    author: 'Posted by Eugenia, on July  24, 2019',
    src: card3
  },
  {
    title: 'bridge',
    subtitle: 'How to increase your productivity with a Music',
    body: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem santium doloremque laudantium, totam rem sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolo…',
    author: 'Posted by Eugenia, on July  24, 2019',
    src: card4
  },
  {
    title: 'bridge',
    subtitle: 'How to increase your productivity with a Music',
    body: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem santium doloremque laudantium, totam rem sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolo…',
    author: 'Posted by Eugenia, on July  24, 2019',
    src: card5
  },
  {
    title: 'forest',
    subtitle: 'How to increase your productivity with a Music',
    body: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem santium doloremque laudantium, totam rem sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolo…',
    author: 'Posted by Eugenia, on July  24, 2019',
    src: card6
  },
  {
    title: '',
    subtitle: 'How to increase your productivity with a Music',
    body: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem santium doloremque laudantium, totam rem sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolo…',
    author: 'Posted by Eugenia, on July  24, 2019',
    src: card7
  },
  {
    title: 'nature',
    subtitle: 'How to increase your productivity with a Music',
    body: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem santium doloremque laudantium, totam rem sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolo…',
    author: 'Posted by Eugenia, on July  24, 2019',
    src: card8
  },
  {
    title: 'nature',
    subtitle: 'How to increase your productivity with a Music',
    body: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem santium doloremque laudantium, totam rem sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolo…',
    author: 'Posted by Eugenia, on July  24, 2019',
    src: card9
  },
  {
    title: 'nature',
    subtitle: 'How to increase your productivity with a Music',
    body: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem santium doloremque laudantium, totam rem sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolo…',
    author: 'Posted by Eugenia, on July  24, 2019',
    src: card10
  },
]

const sliderList = [
  {
    id: 0,
    src: planet,
    alt: 'планета',
    title: 'Полет Илона Маска и DOGIE COIN',
    description: 'В прошлый четверг все офигели от полета DOGIE COIN на марс.',
    activeSlide: 'dogie coin',
  },
  {
    id: 1,
    src: car,
    alt: 'машина',
    title: 'DOGIE COIN УПАЛ',
    description: 'Все в шоке, я потерял все деньги',
    activeSlide: 'падение',
  },
  {
    id: 2,
    src: money,
    alt: 'деньги',
    title: 'Эпическое возвращения на хаи',
    description: 'Все в шоке, я снова богат',
    activeSlide: 'возвращение',
  }
]

const slider = document.querySelector('.slider__wrapper')
const moreCards = document.querySelector('.submit__value_type_gallery')
const gallery = document.querySelector('.cards')
const slide0 = document.getElementById('0')
const slide1 = document.getElementById('1')
const slide2 = document.getElementById('2')

function getSlideWidth() {
  return slider.offsetWidth
}

function moveSlider(offset, title) {
  slider.style.right = `${offset}px`

}

sliderList.forEach((el, i) => slider.append(Slider(sliderList[i], changeSlide)))



function changeSlide(id) {
  const width = getSlideWidth()
  switch (id) {
    case 1:
      moveSlider(width)
      document.getElementById('1').classList.add('slider__tumbler_active')
      document.getElementById('2').classList.remove('slider__tumbler_active')
      document.getElementById('0').classList.remove('slider__tumbler_active')
      break;
    case 2:
      moveSlider(width * 2)
      document.getElementById('2').classList.add('slider__tumbler_active')
      document.getElementById('1').classList.remove('slider__tumbler_active')
      document.getElementById('0').classList.remove('slider__tumbler_active')
      break;
    default:
      moveSlider(0)
      document.getElementById('0').classList.add('slider__tumbler_active')
      document.getElementById('2').classList.remove('slider__tumbler_active')
      document.getElementById('1').classList.remove('slider__tumbler_active')
      break;
  }

}

initialCards.forEach(el => {
  gallery.append(CreateCard(el))
})

let coinCards = 10

function addMoreCards() {
  if (coinCards >= 30) {
    moreCards.remove()
    return
  }
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(res => {
      for (let i = 0; i < 5; i++) {
        const dataElement = {
          author: 'Posted by Alex, on May 24, 2022',
          title: res[i].title,
          body: res[i].body,
          subtitle: res[i].body.slice(5, 40)
        }
        gallery.append(CreateCard(dataElement))
      }

    })
    .catch(err => console.log(err))
  coinCards += 5
  console.log(coinCards);

}

moreCards.addEventListener('click', addMoreCards)

slide0.addEventListener('click', (e) => changeSlide(0))
slide1.addEventListener('click', (e) => changeSlide(1))
slide2.addEventListener('click', (e) => changeSlide(2))
