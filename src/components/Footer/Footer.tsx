import React from 'react'
import styled from 'styled-components'
import Nav from './components/Nav'
import Branding from './components/Branding'

const Footer: React.FC = () => (
	<StyledFooter>
		<StyledFooterInner>
			<StyledLogoWrapper></StyledLogoWrapper>
			<StyledNavWrapper>
				<Nav />
			</StyledNavWrapper>
			<StyledBrandingWrapper>
				{/* <img src={baoLogo} height="36" style={{ verticalAlign: 'middle', marginBottom: '25px' }} /> */}
			</StyledBrandingWrapper>
		</StyledFooterInner>
		<Branding />
	</StyledFooter>
)

const StyledFooter = styled.footer`
	margin: 50px auto auto;
	height: 100px;
	bottom: 0;
`
const StyledFooterInner = styled.div`
	margin: auto;
	align-items: center;
	display: flex;
	height: ${(props) => props.theme.topBarSize}px;
	justify-content: space-between;
	max-width: ${(props) => props.theme.siteWidth}px;
	width: 100%;
	margin-bottom: -2em;

	@media (max-width: 414px) {
		flex-direction: column;
	}
`

const StyledNavWrapper = styled.div`
	display: flex;
	flex: 1;
	justify-content: center;
	@media (max-width: 768px) {
		display: none;
	}
`

const StyledBrandingWrapper = styled.div`
	align-items: center;
	display: flex;
	justify-content: flex-end;
	width: 200px;
	@media (max-width: 400px) {
		justify-content: center;
		width: auto;
	}
`

const StyledLogoWrapper = styled.div`
	width: 200px;
	@media (max-width: 768px) {
		width: auto;
	}
`

export default Footer
