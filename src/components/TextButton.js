import styled from 'styled-components'

export const TextButton = styled.button`
	display: inline-block;
	background-color: ${({ theme }) => theme.colorTransparent};
	color: ${({ theme }) => theme.colorTextPrimaryText};
	margin: 0;
	padding: 0;
	border: none;
	outline: none;
	line-height: 0;
	text-align: center;
	cursor: pointer;
	transition: 0.2s;
`
