import format from 'date-fns/format';
import localeNL from 'date-fns/locale/nl';

export const formatDate = date =>
	format(date, 'DD MMMM YYYY', { locale: localeNL });
