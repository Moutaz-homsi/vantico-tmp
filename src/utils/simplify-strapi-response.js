export default function simplifyStrapiResponse(obj) {
  if (Array.isArray(obj)) {
    // Process each item in the array
    return obj.map((item) => simplifyStrapiResponse(item))
  } else if (obj !== null && typeof obj === "object") {
    // Flatten objects
    if (obj.hasOwnProperty("data")) {
      if (Array.isArray(obj.data)) {
        return obj.data.map((dataItem) => simplifyStrapiResponse(dataItem))
      } else {
        return simplifyStrapiResponse(obj.data)
      }
    }
    let newObj = {}
    for (let key in obj) {
      if (key === "attributes") {
        Object.assign(newObj, simplifyStrapiResponse(obj[key]))
      } else {
        newObj[key] = simplifyStrapiResponse(obj[key])
      }
    }
    return newObj
  }
  return obj
}
