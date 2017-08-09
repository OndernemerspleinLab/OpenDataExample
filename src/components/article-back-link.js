import React from 'react';
import { Link } from 'react-router-dom';

const ArticleBackLink = ({ children, backLink, className }) =>
	<Link to={backLink} className={className}>
		{children}
	</Link>;

export default ArticleBackLink;
