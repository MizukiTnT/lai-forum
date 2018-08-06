import Mock from 'mockjs'
import articleAPI from './article'
import logginAPI from './login'

// 获取首页文章列表
Mock.mock('/article/list', 'post', articleAPI.getList)
Mock.mock('/article/hot', 'post', articleAPI.getHotBySort)
Mock.mock('/article/byUser', 'post', articleAPI.getListById)

Mock.mock('/login/login', 'post', logginAPI.login)
Mock.mock('/login/getCode', 'get', logginAPI.getSrvCode )
Mock.mock('/login/logout', 'get', logginAPI.logout )

export default Mock