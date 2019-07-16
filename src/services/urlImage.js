import { apiFlashEndPoint } from '../costants/api'

export const getPreview = (url) => fetch(`${apiFlashEndPoint}?access_key=${process.env.REACT_APP_APIFLASH_KEY}&url=${url}`)
.then(res => res.blob())
.then(data => URL.createObjectURL(data))