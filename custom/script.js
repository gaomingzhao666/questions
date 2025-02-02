window.addEventListener('DOMContentLoaded', (e) => {
  const ua = window.navigator.userAgent
  const isIE = /MSIE|Trident/.test(ua)

  if (isIE) {
    alert(
      'このページはIEで閲覧することができません。クローム、またはエージでアクセスしてください。'
    )
  }
})
