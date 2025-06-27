import styled from "styled-components";

import Banner from "@images/banner_homepage.svg";
import TrustpilotLogo from "@images/icons/trustpilot_icon.svg"

import { Button} from "@shared/ui/button/Button";
import { useNavigate } from "react-router-dom";

import { useAppSelector } from '@shared/hooks/useAppSelector';
import { RootState } from '@store/store';



const HeroSection = styled.section`
    padding: 100px 120px 140px;
    background-color: var(--color-bg--main);
    position: relative;
    z-index: 1;
    overflow: hidden;

  &::before {
  content: "";
  position: absolute;
  inset: 0;
  z-index: -1;

  background-color: var(--figure-bg-color); 

  mask-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='1440' height='820' viewBox='0 0 1440 820'><path d='M1440 0H0L175.973 553.961L1440 820V0Z' fill='black'/></svg>");
  mask-repeat: no-repeat;
  mask-size: cover;
  mask-position: center;
}

`;

const HeroContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const HeroTextBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  max-width: 600px;
`;

const HeroImageBlock = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  max-width: 600px;
`;

const HeroTitle = styled.h2`
  color: var(--color-text-title-dark);
  font-size: 3.125rem;
  font-weight: 400;
  line-height: 3.75rem;
  letter-spacing: 1.8px;
  margin-bottom: 1.68rem;
  max-width: 519px;
  font-family: 'Inter', sans-serif;
`;

const HeroDescription = styled.p`
  color: var(--color-text-paragraph);
  font-size: 1.125rem;
  font-weight: 400;
  line-height: 1.5075rem;
  letter-spacing: 0.36px;
  margin-bottom: 3.31rem;
  max-width: 539px;
  font-family: 'Inter', sans-serif;
`;

const HighlightText = styled.span`
  color: var(--color-accent-primary);
`;

const RatingBlock = styled.div`
  margin-top: 1.875rem;
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
`;

const StarsImage = styled.img`
  width: 110px;
  height: 27px;
`;

const ReviewText = styled.p`
  color: var(--color-text-title-dark);
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.25rem;
  font-family: 'Inter', sans-serif;
`;

export const HomePage = () => {
    const navigate = useNavigate();

    const user = useAppSelector((state: RootState) => state.auth.user)

    const handleOrderClick = () => {
        if (user) {
            navigate("/menu");
        } else {
            navigate("/login");
        }
    }
    return (
        <HeroSection>
            <HeroContentWrapper>
                <HeroTextBlock>
                    <HeroTitle>
                        Beautiful food & takeaway, <HighlightText>delivered</HighlightText> to your door.
                    </HeroTitle>
                    <HeroDescription>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500.
                    </HeroDescription>
                    <Button onClick={handleOrderClick}>Place an order</Button>
                    <RatingBlock>
                        <StarsImage src={TrustpilotLogo} alt="Trustpilot" />
                        <ReviewText>
                            <HighlightText>4.8 out of 5</HighlightText> based on 2000+ reviews
                        </ReviewText>
                    </RatingBlock>
                </HeroTextBlock>
                <HeroImageBlock>
                    <img src={Banner} alt="Banner" />
                </HeroImageBlock>
            </HeroContentWrapper>
        </HeroSection>
    );
};

