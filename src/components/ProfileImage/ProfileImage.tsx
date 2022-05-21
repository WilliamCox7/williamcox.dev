import { useState } from 'react'
import Styled from '@components/ProfileImage/ProfileImage.style'
import HeroImage from '@components/HeroImage/HeroImage';

const ProfileImage = () => {

  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  return (
    <HeroImage>
      <Styled.ImageContainer>
        <Styled.SmallImage src="smallme.png" />
        <Styled.BigImage
          onLoadingComplete={() => setIsLoaded(true)}
          style={{ opacity: isLoaded ? 1 : 0 }}
          src="/bigme.png"
          layout="fill"
          quality={100}
          priority
        />
      </Styled.ImageContainer>
    </HeroImage>
  )
}

export default ProfileImage