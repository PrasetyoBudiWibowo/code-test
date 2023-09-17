export function getTokenJwt() {
  let token = localStorage.getItem('jwtToken')
  return token
}

export function formatNumber(number) {
  const numbers = Number(number)
  const numberFormatter = Intl.NumberFormat('en-US')
  const formatted = numberFormatter.format(numbers)

  return formatted
}
