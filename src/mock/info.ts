import Mock from 'mockjs'

const info = (option:object)=>{
  const userInfo = {
    id:'4291d7da9005377ec9aec4a71ea837f',
    name:'Admin',
    firstName:'firstName',
    lastName:'lastName',
    email:'email@email.com'
  }
  const responseBody = {
    code:200,
    message:"success",
    data:userInfo
  }
  return responseBody
}


Mock.mock(/\/user\/info/,'get',info)