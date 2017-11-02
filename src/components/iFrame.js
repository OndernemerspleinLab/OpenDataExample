const iFrameClassName = 'iframe';

const isChart = src => {
	try {
		const url = new URL(src);

		return url.hostname === 'opendata.ondernemersplein.nl';
	} catch (e) {
		return false;
	}
};

const getContainerClassName = src => {
	if (isChart(src)) {
		return 'chartContainer';
	} else {
		return 'videoContainer';
	}
};

export const fixIframesInElement = el => {
	if (!el) {
		return;
	}
	const iFrames = Array.from(el.querySelectorAll('iframe'));

	iFrames.forEach(iFrame => {
		const container = iFrame.parentElement;
		const src = iFrame.src;
		const containerClassName = getContainerClassName(src);
		iFrame.classList.add(iFrameClassName);
		container.classList.add(containerClassName);
	});
};

export const fixIframes = htmlString => {
	const parser = new DOMParser();
	const doc = parser.parseFromString(htmlString, 'text/html');

	fixIframesInElement(doc.body);

	return doc.body.innerHTML;
};
