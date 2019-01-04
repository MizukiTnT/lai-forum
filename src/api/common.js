import request from '../utlis/request'

export function search(data) {
  return request({
    url: '/common/search',
    method: 'post',
    data: data
  })
}