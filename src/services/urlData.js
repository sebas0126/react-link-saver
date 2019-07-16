import { linkPreviewEndPoint } from '../costants/api'

export const getData = (url) => fetch(`${linkPreviewEndPoint}?key=${process.env.REACT_APP_LINKPREVIEW_KEY}&q=${url}`)
.then(res => res.json())
.then(json => json)