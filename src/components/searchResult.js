import React from 'react';

export const SearchResult = props => {
	const { results, searchTerm } = props;

	if (!searchTerm) {
		return null;
	}

	const resultLength = results.length;
	let resultString;

	switch (resultLength) {
		case 1:
			resultString = `1 resultaat`;
			break;
		case 0:
			resultString = `Helaas zijn er geen resultaten`;
			break;
		default:
			resultString = `${resultLength} resultaten`;
	}

	return (
		<p>
			{`${resultString} gevonden voor: `}
			<strong>
				{searchTerm}
			</strong>
		</p>
	);
};
