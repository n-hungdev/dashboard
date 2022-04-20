const sideMenu = document.querySelector('aside')
const menuBtn = document.querySelector('#menu-btn')
const closeBtn = document.querySelector('#close-btn')
const themToggler = document.querySelector('.theme-toggler')

menuBtn.addEventListener('click', () => {
  sideMenu.classList.add('show-menu')
})

closeBtn.addEventListener('click', () => {
  sideMenu.classList.remove('show-menu')
})

themToggler.addEventListener('click', () => {
  document.body.classList.toggle('dark')
  themToggler.querySelector('i:nth-child(1)').classList.toggle('active')
  themToggler.querySelector('i:nth-child(2)').classList.toggle('active')
})
