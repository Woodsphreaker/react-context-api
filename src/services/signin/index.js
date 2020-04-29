import api from '../api'

export default ({ loginUser, loginPwd }) => {
  return api().then(() => {
    if (loginPwd !== '123') {
      return {
        error: true,
        message: 'login ou senha incorreta',
      }
    }

    return {
      token: 'dkjadjkhwe9wq798ehjdklasdlksxmc98qq7e398123uejodaskl',
      name: loginUser,
    }
  })
}
