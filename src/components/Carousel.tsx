import React from 'react';

type CrouselTypes = number|string

interface CarouselProps<T> {
  type: 'number' | 'image'
  data: T[]
  children?: React.ReactElement
}

interface ImageCrouselProps<T> extends CarouselProps<T> {

}
interface NumberCrouselProps<T> extends CarouselProps<T> {

}

const ImageCrousel = (_: ImageCrouselProps<CrouselTypes>) => {
  return null
}
const NumberCrousel = (props: NumberCrouselProps<CrouselTypes>) => {
  const {data} = props
  return <>{data.map(figure => figure)}</>
}

const Carousel = (props: CarouselProps<CrouselTypes>) => {
  const {type, data} = props;

  if(!data || !Array.isArray(data)) return null

  return (
    <div>
      {
        type === 'image' ? <ImageCrousel {...props} /> : <NumberCrousel {...props} /> 
      }
      {props.children}
    </div>
  )
} 

export default Carousel;
