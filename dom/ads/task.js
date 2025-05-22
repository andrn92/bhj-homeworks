const listRotatorCase = document.querySelectorAll('.rotator__case')
let i = 0
let timerId = setTimeout(function changeAnnouncement() {
  listRotatorCase[i].classList.remove('rotator__case_active')
  if (i < listRotatorCase.length - 1) {
    i += 1
  } else {
    i = 0
  }
  listRotatorCase[i].classList.add('rotator__case_active')
  timerId = setTimeout(changeAnnouncement, 1000)
}, 1000)