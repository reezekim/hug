const orderCta = document.querySelector('.order-cta')
const [orderCtaBookmarkButton, orderCtaBuyButton] = orderCta.children
const orderModal = document.querySelector('.order-form-modal')
const orderModalOverlay = document.querySelector('.overlay')

function openOrderModal() {
  orderModal.classList.add('is-open')
  orderModalOverlay.classList.add('is-active')
}

function closeOrderModal() {
  orderModal.classList.remove('is-open')
  orderModalOverlay.classList.remove('is-active')
}

function toggleOrderCtaBookmark() {
    // 1. 버튼 is-active 클래스
  // 2. icon 클래스 변경 -> 'ic-bookmark' vs. 'ic-bookmark-filled'
  // 3. 카운트 숫자 값을 변경
  const [icon, countSpan] = this.children
  const count = Number(countSpan.innerHTML.replaceAll(',', ''))
  // console.log(count, typeof count);

  let newCount = count

  if(this.classList.contains('is-active')) {
    // NOTE: 활성화가 된 상태이니까 -> 비활성화 아이콘 'ic-bookmark'
    icon.classList.add('ic-bookmark')
    icon.classList.remove('ic-bookmark-filled')
    // 앞으로 비활성화 -1
    newCount = newCount - 1
    
  } else{
    // NOTE: 비활성화가 된 상태이니까 -> 활성화 아이콘 'ic-bookmark-filled'
    icon.classList.add('ic-bookmark-filled')
    icon.classList.remove('ic-bookmark')
    // 앞으로 활성화 +1
    newCount = newCount + 1
  }

  countSpan.innerHTML = newCount.toLocaleString()
  countSpan.setAttribute('aria-label', `북마크 ${newCount.toLocaleString()}회`)
  this.classList.toggle('is-active')
}

orderCtaBuyButton.addEventListener('click', openOrderModal)
orderModalOverlay.addEventListener('click', closeOrderModal)
orderCtaBookmarkButton.addEventListener('click', toggleOrderCtaBookmark)