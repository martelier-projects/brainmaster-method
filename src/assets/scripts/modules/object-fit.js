import objectFitImages from 'object-fit-images'

export const enhancer = element => {
  if ('objectFit' in document.documentElement.style === false) {
    objectFitImages(element)
  }
}
