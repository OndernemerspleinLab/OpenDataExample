import { PartType } from './part-type';
import { ArticleType } from './article-type';

export type ArticlePart = {
	additionalType: ArticleType,
	headLine: string,
	identifier: string,
	partType: PartType,
	url: string,
};
