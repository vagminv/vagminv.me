import $ from 'jquery'
import './style.scss'

let seconds = 0

const updateCounter = () => {
  seconds += 1
  $('#main').html(`You've been on this page for ${seconds} seconds.`)
}

setInterval(updateCounter, 1000)
