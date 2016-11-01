import sitemap from 'sitemap';

/**
 * Module for build sitemap by array of paths. Using [sitemap](https://www.npmjs.com/package/sitemap) package.
 * @module sitemapBuilder
 * @param {String} [hostname] The root name of your site
 * @param {Array<String>} [paths] Array of paths
 * @return {Sitemap} Instance of [Sitemap](https://www.npmjs.com/package/sitemap).
 *
 * @example
 * import { sitemapBuilder as buildSitemap } from 'react-router-sitemap';
 *
 * const paths = ['/', 'home', '/contacts'];
 * const hostname = 'http://may-site.ru';
 * const sitemap = buildSitemap(hostname, paths);
 */
export default (hostname = 'http://localhost', paths = []) => {

	return sitemap.createSitemap({
		hostname,
        cacheTime: 60000,
        urls: paths.map(path => ({ url: path, changefreq: 'weekly', priority: 0.5, lastmodISO: '2016-10-29T02:44:12+00:00'})),
	});

};
