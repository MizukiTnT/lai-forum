import Mock from "mockjs";
// import { param2Obj } from '@/utlis'
let count = 200
let list = []

for(let i = 0; i <= count; i++) {
  list.push(Mock.mock({
    id: '@natural()',
    time: +Mock.Random.date('T'),
    content: '@cparagraph(3, 7)',
    click: '@natural(700, 8000)',
    'isTop|1': true,
    'isHot|1': true,
    'isAdmin|1': true,
    reading: '@natural(600, 40000)',
    like: '@natural(500, 2000)',
    name: '@cname',
    title: '@ctitle(3, 6)',
    synopsis: '@cword(6, 13)',
    'isFocus|1': true,
    collection: '@natural(30, 400)',
    comment: '@natural(60, 400)'
  }))
}



export default {
  getList: config => {
    const { type, pagesize = 10, page = 1 } = JSON.parse(config.body)
    let result
    if (type == 0) result = getFocus(page, pagesize)
    if (type == 1) result = getNew(page, pagesize)
    if (type == 2) result = getHot(page, pagesize)
    if (type == 3) result = getTimeHot(page, pagesize)
    return result
  },
  getHotBySort: (config) => {
    const { sort = 0} = JSON.parse(config.body)
    let result
    if (sort === 0) result = list.slice(0, 10)
    if (sort === 1) result = list.slice(10, 20)
    return result
  },
  getListById: (config) => {
    const {userId, type, pagesize = 10, page = 1} = JSON.parse(config.body)
    let result
    if (userId === '') return {error: '无用户信息'}
    if (type == 0) result = getFocus(page, pagesize)
    if (type == 1) result = getNew(page, pagesize)
    if (type == 2) result = getHot(page, pagesize)
    if (type == 3) result = getTimeHot(page, pagesize)
    return result
  }
}


const getFocus = (page, pagesize) => {
  let result
  result = list.filter( i => {return i.isFocus})
  return packData(page, pagesize, result)
}
const getNew = (page, pagesize) => {
  let result
  result = list.sort((a, b) => {
    if (a.time > b.time) {
      return 1
    } else if (a.time === b.time) {
      return 0
    } else {
      return -1
    }
  })
  return packData(page, pagesize, result)
}

const getHot = (page, pagesize) => {
  let result
  result = list.filter(v => {return v.isHot})
  return packData(page, pagesize, result)
}

const getTimeHot = (page, pagesize) => {
  let result, response
  result = list.filter(v => {return v.isHot})
  return packData(page, pagesize, result)
}

const packData = (page, pagesize, result) => {
  let errcode = ''
  let length = result.length
  if (page * pagesize <= result.length) {
    result = result.filter((v, i) => {
      return i > (page - 1) * pagesize && i <= page * pagesize
    })
  } else {
    errcode = '并没有这么多条数据'
    result = []
  }
  return {
    err: errcode,
    toltalCount: length,
    list: result
  }
}

