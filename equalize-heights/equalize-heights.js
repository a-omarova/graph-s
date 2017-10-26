export default function equalizeHeights(parent, selector) {
	const $root = document.querySelectorAll(parent);

	for (let i = 0; i < $root.length; i++) {
		const elements = [].slice.call($root[i].querySelectorAll(selector));
		const tallest = Math.max.apply(null, elements.map(ele => ele.offsetHeight));

		elements.forEach(elem => {
			elem.style.minHeight = tallest + 'px';
		});
	}
}
