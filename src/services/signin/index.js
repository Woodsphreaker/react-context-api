import api from '../api'

export default () => {
  return api().then(() => ({
    token: 'dkjadjkhwe9wq798ehjdklasdlksxmc98qq7e398123uejodaskl',
    name: 'woods',
  }))
}
