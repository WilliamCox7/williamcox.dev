import { useState, useEffect, useRef } from 'react'
import Styled from '@components/ProfileImage/ProfileImage.style'
import HeroImage from '@components/HeroImage/HeroImage';

const ProfileImage = () => {

  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  const loadRef = useRef<boolean>(true);
  const imageRef = useRef<HTMLImageElement>(null);
  
  useEffect(() => {
    if (loadRef.current && imageRef?.current?.complete) {
      loadRef.current = false;
      handleLoad();
    }
  }, [imageRef?.current?.complete])

  const handleLoad = () => {
    setTimeout(() => setIsLoaded(true), 500);
  }

  return (
    <HeroImage>
      <Styled.SmallImage src="smallme.png" />
      <Styled.BigImage
        ref={imageRef}
        style={{ opacity: isLoaded ? 1 : 0 }}
        src="bigme.png"
      />
    </HeroImage>
  )
}

export default ProfileImage