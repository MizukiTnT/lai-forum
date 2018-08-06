import request from '@/utlis/request'

export function fetchArticle (data) {
  return request({
    url: '/article/list',
    method: 'post',
    data: data
  })
}
export function fetchArticleByUserId (data) {
  return request({
    url: '/article/byUser',
    method: 'post',
    data: data
  })
}


export function fetchHot (data) {
  return request({
    url: '/article/hot',
    method: 'post',
    data: data
  })
}