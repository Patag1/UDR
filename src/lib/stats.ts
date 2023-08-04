export const visits = () => {
  if (typeof localStorage !== 'undefined') {
    let visits = localStorage.getItem('visitCounter')

    if (!visits) {
      visits = '1'
    }

    localStorage.setItem('visitCounter', visits)

    return visits
  }

  return 'Error!'
}

export const likes = () => {
  if (typeof localStorage !== 'undefined') {
    return localStorage.getItem('likeCounter')
  }

  return 'Error!'
}

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
