import { existy } from './functional';
import { searchInputId } from '../components/article-filter';

export const getQueryFromForm = formElement => {
	// If FormData api is fully supported, use it to get the query
	if (typeof FormData === 'function' && existy(FormData.prototype.get)) {
		const formData = new FormData(formElement);

		return formData.get(searchInputId) || '';
	}

	const searchInputElement = document.getElementById(searchInputId);

	if (searchInputElement) {
		return searchInputElement.value;
	}

	return '';
};
