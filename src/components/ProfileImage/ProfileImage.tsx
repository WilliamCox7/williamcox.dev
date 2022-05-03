import { useState, useEffect, useRef } from 'react'
import Styled from '@components/ProfileImage/ProfileImage.style'
import dateDifference from '@utils/date-difference'

const ProfileImage = () => {

  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  const loadRef = useRef<boolean>(true);
  const dateRef = useRef<Date>(new Date());
  const imageRef = useRef<HTMLImageElement>(null);
  
  useEffect(() => {
    if (loadRef.current && imageRef?.current?.complete) {
      loadRef.current = false;
      handleLoad();
    }
  }, [imageRef?.current?.complete])

  const handleLoad = () => {
    const now = new Date();
    const difference = dateDifference(now, dateRef.current, 'mil');
    const duration = difference > 500 ? 500 : difference > 0 ? 500 - difference : 0;
    return setTimeout(() => setIsLoaded(true), duration);
  }

  return (
    <Styled.Section>
      <Styled.Border>
        <Styled.ImageContainer>
          <Styled.SmallImage src="smallme.png" />
          <Styled.BigImage
            ref={imageRef}
            style={{ opacity: isLoaded ? 1 : 0 }}
            src="bigme.png"
          />
        </Styled.ImageContainer>
      </Styled.Border>
    </Styled.Section>
  )
}

export default ProfileImage