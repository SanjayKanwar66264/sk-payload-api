import _ from 'lodash'

function filterData(data){
  return new Promise((resolve, reject)=>{
    const filterList = _.filter(_.filter(data.payload, {'drm': true}), function(item) { return (item.episodeCount > 0)})
    const resultList = _.map(filterList, _.partialRight(_.pick, ['image', 'slug', 'title', 'drm', 'episodeCount' ]))
    const resultObj = {}
    resultObj.response = []
    for(let i = 0; i < resultList.length; i++){
      resultObj.response.push({image:resultList[i].image.showImage, slug: resultList[i].slug, title: resultList[i].title})
      }
    resolve(resultObj)
  })
}

function payload(request, response) {
  return filterData(request.body)
  .then((data)=>{
    const filteredData = data
    response.send(filteredData)
    })
    .catch((err)=>{
      response.send(err)
    })
}

export default { payload }
