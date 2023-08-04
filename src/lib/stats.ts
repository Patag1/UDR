export const visits = () => {
  let visits = localStorage.getItem('visitCounter')

  if (!visits) {
    visits = '1'
  } else {
    visits = `${parseInt(visits) + 1}`
  }

  localStorage.setItem('visitCounter', visits)

  return visits
}

export const likes = () => localStorage.getItem('likeCounter') ?? '0'

export const toLike = (type: '+' | '-') => {
  let likes = localStorage.getItem('likeCounter')

  if (!likes) {
    likes = '0'
  } else {
    type === '+'
      ? (likes = `${parseInt(likes) + 1}`)
      : (likes = `${parseInt(likes) - 1}`)
  }

  localStorage.setItem('likeCounter', likes)

  return likes
}

export const shares = () => localStorage.getItem('shareCounter')

export const toShare = () => {
  let shares = localStorage.getItem('shareCounter')

  if (!shares) {
    shares = '0'
  } else {
    shares = `${parseInt(shares) + 1}`
  }

  localStorage.setItem('shareCounter', shares)

  return shares
}
