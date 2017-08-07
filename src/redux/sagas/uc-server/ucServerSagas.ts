import nprogress from 'nprogress'
import { message } from 'antd'

import { race, call , take} from 'redux-saga/effects'
import CONST from '../../const'
import UC_CONFIG from '../../../../uc-config/urlConfig'


const delay = (ms: number) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('timeout')
    }, ms)
  })
}

nprogress.configure({ showSpinner: false })

let fetch;

fetch = window.fetch;


// function* get(url: string, params) {
//   nprogress.start()
//   let inter = setInterval(() => {
//     nprogress.inc()
//   }, 50)
//   let headers
//   let keyCode = window.localStorage.getItem('uc-token')
//   if (params) {
//     url += '?'
//     for (let attr in params) {
//       if (params.hasOwnProperty(attr)) {
//         url += attr + '=' + params[attr] + '&'
//       }
//     }
//     url = url.replace(/&$/, '')
//   }
//   if (keyCode) {
//     headers = new window.Headers({})
//     headers.set('Authorization', keyCode)
//   }
//   const { res } = yield race({
//     res: call(fetch, url, {
//       method: 'GET',
//       headers
//     }),
//     timeout: call(delay, 20000)
//   })
//   window.clearInterval(inter)
//   nprogress.done()
//   if (res) {
//     return yield res.json()
//   } else {
//     message.error('Server error')
//   }
// }

function* post(url: string, params): any {
  nprogress.start()
  let inter = setInterval(() => {
    nprogress.inc()
  }, 50)
  let keyCode = window.localStorage.getItem('uc-token')
  const {res} = yield race({
    res: call(fetch, url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        'Authorization': keyCode
      },
      body: JSON.stringify(params)
    }),
    timeout: call(delay, 20000)
  })
  window.clearInterval(inter)
  console.log('done')
  nprogress.done()
  if (res) {
    return yield res.json()
  } else {
    message.error('Server error')
  }
}

function* callPost (...args) {
  try {
    let res = yield call(post, ...args)
    return res
  } catch (e) {
    nprogress.done()
    throw e
  }
}

// function* callGet (...args) {
//   try {
//     let res = yield call(get, ...args)
//     return res
//   } catch (e) {
//     nprogress.done()
//     throw e
//   }
// }

export function* signUp () {
  while (true) {
    console.log('监听')
    let { payload } = yield take(CONST.REGISTERSERVER.REGISTER)
    try {
      let response = yield call(callPost, UC_CONFIG.SIGNUP, payload)
      console.log(`response == ${JSON.stringify(response)}`)
      if ( response.code === '0' ) {
        console.log('注册成功')
      }
    } catch (e) {
      console.log(e)
    }
  }
}