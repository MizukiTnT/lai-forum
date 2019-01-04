import Mock from "mockjs";

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
    comment: '@natural(60, 400)',
    imgUrl: Mock.Random.image('230x170', '#50B347', '#FFF', Mock.Random.word(5))
  }))
}

export default {
  search (config) {
    let obj = {}
    let { keywords, pagesize = 10, page = 0, title = '' } = JSON.parse(config.body)
    let search =  list.filter(item => {
      return item.title.indexOf(keywords) > -1
    })
    search.forEach(item => {
      let title = item.title.split(keywords)
      let content = item.content.split(keywords)
      item.title = title.join('<em>' + keywords + '</em>')
      item.content = content.join('<em>' + keywords + '</em>')
    })
    obj.length = search.length
    obj.search = search
    console.log(obj)
    return obj
  }
}