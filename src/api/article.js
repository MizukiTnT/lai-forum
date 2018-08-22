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

export function fetchComment (data) {
  return request({
    url: '/article/comment',
    method: 'post',
    data: data
  })
}

export function fetchArticleById (data) {
  return request({
    url: '/article/article',
    method: 'post',
    data: data
  })
}

export function fetchRecColumn (data) {
  return request({
    url: '/article/column',
    method: 'post',
    data: data
  })
}