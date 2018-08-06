import request from '@/utlis/request'

export function login (data) {
  return request({
    url: '/login/loggin',
    method: 'post',
    data: data
  })
}

export function fetchCode (data) {
  return request({
    url: '/login/getCode',
    method: 'post',
    data: data
  })
}

export function logout () {
  return request({
    url: '/login/logout',
    method: 'get'
  })
}