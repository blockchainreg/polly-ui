import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Tooltipped from '../../Tooltipped'

const Nav: React.FC = () => {
	return (
		<StyledNav>
			<Tooltipped content="Discord" placement="top">
				<StyledLink target="_blank" href="https://discord.gg/BW3P62vJXT">
					<FontAwesomeIcon icon={['fab', 'discord']} />
				</StyledLink>
			</Tooltipped>
			<Tooltipped content="Twitter (BaoMan)" placement="top">
				<StyledLink target="_blank" href="https://twitter.com/thebaoman">
					<FontAwesomeIcon icon={['fab', 'twitter']} />
				</StyledLink>
			</Tooltipped>
			<Tooltipped content="Medium (BaoMan)" placement="top">
				<StyledLink target="_blank" href="https://thebaoman.medium.com/">
					<FontAwesomeIcon icon={['fab', 'medium']} />
				</StyledLink>
			</Tooltipped>
			<Tooltipped content="Governance Forum" placement="top">
				<StyledLink target="_blank" href="https://gov.bao.finance/">
					<FontAwesomeIcon icon="comments" />
				</StyledLink>
			</Tooltipped>
			<Tooltipped content="Snapshot" placement="top">
				<StyledLink target="_blank" href="https://snapshot.page/#/baovotes.eth">
					<FontAwesomeIcon icon="bolt" />
				</StyledLink>
			</Tooltipped>
			<Tooltipped content="Documentation" placement="top">
				<StyledLink target="_blank" href="https://docs.bao.finance/">
					<FontAwesomeIcon icon="book" />
				</StyledLink>
			</Tooltipped>
			<Tooltipped content="GitHub" placement="top">
				<StyledLink target="_blank" href="https://github.com/baofinance">
					<FontAwesomeIcon icon={['fab', 'github']} />
				</StyledLink>
			</Tooltipped>
		</StyledNav>
	)
}

const StyledNav = styled.nav`
	align-items: center;
	display: flex;
	font-size: 24px;
	margin-bottom: 25px;

	@media (max-width: 414px) {
		flex-direction: column;
	}
`

const StyledLink = styled.a`
	color: ${(props) => props.theme.color.grey[100]};
	padding-left: ${(props) => props.theme.spacing[3]}px;
	padding-right: ${(props) => props.theme.spacing[3]}px;
	text-decoration: none;

	&:hover {
		color: ${(props) => props.theme.color.blue[400]};
	}
`

export default Nav
