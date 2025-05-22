const tabNavigation = document.querySelector('.tab__navigation')
const tabContents = document.querySelector('.tab__contents')
function deleteTabs(tabs, cls) {
  for (let tab of tabs) {
    tab.classList.remove(cls)
  }
}
for (let i=0; i < tabNavigation.children.length; i += 1) {
  tabNavigation.children[i].onclick = function(event) {
    deleteTabs(tabNavigation.children, 'tab_active')
    event.target.classList.add('tab_active')
    for (let tabContent of tabContents.children) {
      tabContent.classList.remove('tab__content_active')
    }
    tabContents.children[i].classList.add('tab__content_active')
  }
}