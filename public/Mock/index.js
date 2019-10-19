import Mock from 'mockjs'
// const Mock = require('mockjs')

const UserData = [
  { 
    name: '范刚',
    isActive: true,
    img: 'http://dummyimage.com/200x100/a5f279&text=Meipcsm Slrctlcoi Uxyioyng',
    id: '450000198811276626',
    description: '江往体思群细家主等除马然好别据各花元律率劳次特低带定地装就须党说什传目人级标名历写存水有根满研分音时这结传声气达造电千该要门易与千接看局温近相问正性今据还速天过类都委电期到于论几前导里命日太型术最接化。' 
  }
]

const DmallList = []

for(let i = 0; i < 20; i++) {
  DmallList.push({
    name: Mock.Random.cname(3),
    isActive: Mock.Random.boolean(),
    img: Mock.Random.image('200x100', `${Mock.Random.color()}`, `${Mock.Random.title(3)}`),
    id: Mock.Random.id(),
    description: Mock.Random.csentence(100)
  })
}
// console.log(DmallList, 'DmallList')

export default {
  UserData: UserData,
  DmallList: DmallList
}