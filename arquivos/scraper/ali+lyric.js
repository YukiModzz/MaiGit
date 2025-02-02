const cheerio = require('cheerio');
const google = require('google-it');

function userAgent() {
	oos = [ 'Macintosh; Intel Mac OS X 10_15_7', 'Macintosh; Intel Mac OS X 10_15_5', 'Macintosh; Intel Mac OS X 10_11_6', 'Macintosh; Intel Mac OS X 10_6_6', 'Macintosh; Intel Mac OS X 10_9_5', 'Macintosh; Intel Mac OS X 10_10_5', 'Macintosh; Intel Mac OS X 10_7_5', 'Macintosh; Intel Mac OS X 10_11_3', 'Macintosh; Intel Mac OS X 10_10_3', 'Macintosh; Intel Mac OS X 10_6_8', 'Macintosh; Intel Mac OS X 10_10_2', 'Macintosh; Intel Mac OS X 10_10_3', 'Macintosh; Intel Mac OS X 10_11_5', 'Windows NT 10.0; Win64; x64', 'Windows NT 10.0; WOW64', 'Windows NT 10.0' ];

	return `Mozilla/5.0 (${oos[Math.floor(Math.random() * oos.length)]}) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/${Math.floor(Math.random() * 3) + 87}.0.${Math.floor(Math.random() * 190) + 4100}.${Math.floor(Math.random() * 50) + 140} Safari/537.36`;
}

class LyricsData {
	
	static getHTML(url, config = {}) {
		return new Promise((resolve, reject) => {
			const request = require('request');
			request({
				url,
				...config
			}, (error, res, body) => {
				if (error) return reject(error);
				try {
					body = JSON.parse(body);
				} catch { }
				
				resolve(body);
			});
		});
	}
	
	static replaceData(v) {
		return v?.replaceAll('</p><p>', '\n\n')?.replaceAll('<br>', '\n')?.replace(/<p>|<\/p>/g, '')?.replaceAll(`<div id="pub_22" data-refresh="20" data-intersectionratio="0.40" class="an-between-lyrics with-refresh an-pub" style="display:block;"><div id="pub_22_ad_refresh"><div id="pub_22_ad"></div></div></div>`, '\n').replace(/<span>|<\/span>/g, '')?.trim()
	}
	
	static letras(url) {
		return this.getHTML(url, {
			method: 'GET',
			headers: {
				"User-Agent": userAgent(),
				Cookie: "countryCode=BR; LSGroup=81; countryCode=BR; abtracksession=1; lasub=; lpsub=",
				'Accept': "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
				'Accept-Language': "pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7"
			}
		}).then(html => this.letrasData(html))
	}
    
    static letrasData(html) { /// letras.mus.br
    	try {
    		const $ = cheerio.load(html)
    		const str = JSON.parse($('script[type="application/ld+json"]').eq(1).html())
			const res = JSON.parse(JSON.stringify(str, null, '\t'))
			res.lyricOriginal = (this.replaceData(($('.lyric-original').html() || $('.lyric-translation-left').html())?.trim())?.split(/<\/h3>/g).pop()?.trim() || '')?.replaceAll('\n\n\n', '\n\n')
			res.lyricTranslated = (this.replaceData($('.lyric-translation-right').html())?.split(/<\/h3>/g).pop()?.trim() || '')?.replaceAll('\n\n\n', '\n\n')
    		return Promise.resolve(res);
    	} catch (error) {
    		return Promise.reject(error);
    	}
    }
    
    static vagalume(url) {
    	const getDate = String(Date.now()).slice(0, 10)
    	return this.getHTML(url, {
			method: 'GET',
			headers: {
				"User-Agent": userAgent(),
				Cookie: `AMP_TOKEN=%24NOT_FOUND; _ga=GA1.3.1169049570.${getDate}; _gid=GA1.3.1870140445.${getDate}; _gat=1; _gat_ubem=1`,
				'Accept': "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
				'Accept-Language': "pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7"
			}
		}).then(html => this.vagalumeData(html))
    }
    
    static vagalumeData(html) {
    	try {
    		const $ = cheerio.load(html)
			const parse = JSON.parse($('script[type="application/ld+json"]').eq(0).html())
			const res = JSON.parse(JSON.stringify(parse, null, '\t'))
			const str = LyricsData.replaceData($('.col1-2 > .col1-2-1 > div').html()) || ''
			if (/<div/.test(str)) {
				res.lyricOriginal = ''
				res.lyricTranslated = ''
				$(html).find('.trad').each((i, eleme) => {
					if (!/songTitle/.test(eleme.attribs.class)) {
						const text = $(eleme).html()?.trim()
						res.lyricTranslated += text || '\n'
					}
				})
				res.lyricTranslated = res.lyricTranslated.replaceAll(/<\/p><p>/g, '\n').replaceAll(/<\/p>|<p>/g, '').replaceAll(/<br>/g, '').trim()
				$(html).find('.orig').each((i, eleme) => {
					if (!/songTitle/.test(eleme.attribs.class)) {
						const text = $(eleme).html()?.trim()
						res.lyricOriginal += text || '\n'
					}
				})
				res.lyricOriginal = res.lyricOriginal.replaceAll(/<\/p><p>/g, '\n').replaceAll(/<\/p>|<p>/g, '').replaceAll(/<br>/g, '').trim().replaceAll('\n\n\n', '\n\n')
			} else {
				res.lyricOriginal = str?.replaceAll('\n\n\n', '\n\n')
				res.lyricTranslated = ''
			}
			return Promise.resolve(res)
		} catch (error) {
			return Promise.reject(error);
		}
    }
    
    static maistocadas() {
    	return new Promise((resolve, reject) => {
    		this.getHTML("https://www.musicasmaistocadas.mus.br/musicas-mais-tocadas-radios-momento/").then(html => {
    			const destaque = []; // Destaque da Semana;
    			const tocada = []; // Músicas Mais Tocadas;
    			const $ = cheerio.load(html);
    			$('.listing-item').map((_, v) => {
					const $2 = cheerio.load(v)
					const title = $2('a').text()
					const url = $2('a').attr('href')
					const findTitle = destaque.find(i => i.title == title)
					if (!findTitle) {
						destaque.push({ title, url });
					}
				});
				$('.wpp-list > li').map((_, v) => {
					const $2 = cheerio.load(v)
					const title = $2('a.wpp-post-title').html()
					const url = $2('a').attr('href')
					const findTitle = tocada.find(i => i.title == title)
					if (!findTitle) {
						tocada.push({ title, url });
					}
				});
				resolve({ destaque, tocada });
    		}).catch(reject);
    	});
    }
    
    static Aliexpress(id) {
		const user = userAgent()
		return this.getHTML("https://global.cainiao.com/global/detail.json?mailNos="+id+"&lang=pt-BR&language=pt-BR", {
			method: 'GET',
			headers: {
				"User-agent": user,
				accept: "application/json, text/plain, */*",
				'accept-language': "pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7"
			}
		}).then(async ({ module, success }) => {
			if (!success) return Promise.reject('Sem sucesso.');
			
			const cidade = await this.getHTML("https://global.cainiao.com/global/getCity.json?mailNo="+id+"&lang=pt-BR&language=pt-BR", {
				method: 'GET',
				headers: {
					"User-agent": user,
					accept: "application/json, text/plain, */*",
					'accept-language': "pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7"
				}
			}).then(i => i.success && i.module)
			return Promise.resolve({
				type: 'Aliexpress',
				status: success,
				cidade,
				pedidos: module
			});
		});
	}
    
}

class Lyrics {
	constructor(query) {
		this.query = query
		this.mus = 'letras.mus.br/';
		this.letter = 'letras.com/';
		this.letterbr = 'letras.com.br/';
		this.vagalume = 'vagalume.com.br/';
		this.https = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/;
		this.isUrl = (url) => {
			if (!this.https.test(url)) return null
			
			return url.includes(this.mus) || url.includes(this.letter) || url.includes(this.letterbr) || url.includes(this.vagalume)
		}
	}
	get(query = this.query) {
	    query = query+" Letra"
		return google({
			query, noDisplay: true, disableConsole: true,
			options: {
				"User-Agent": userAgent(),
				'Accept': "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
				'Accept-Language': "pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7"
			}
		}).then((data) => {
			const url = data.map(i => i.link).find(i => this.isUrl(i))
			if (!url) return Promise.reject('Não foi encontrado!');
				
			return this.getBasicLyrics(url)
		})
	}
	
	async getBasicLyrics(url) {
		let type = null
		if (
			url.includes(this.mus) ||
			url.includes(this.letter) ||
			url.includes(this.letterbr)
		) {
			type = 'letra'
		} else if (url.includes(this.vagalume)) {
			type = 'vaga'
		}
		if (type == 'letra') return LyricsData.letras(url);
		if (type == 'vaga') return LyricsData.vagalume(url);
		return Promise.reject("Não foi encontrado a letra da música.");
	}
	
	maistocadas() {
		return LyricsData.maistocadas();
	}
	
}

module.exports = {
	Lyrics,
	aliexpress: (id) => LyricsData.Aliexpress(id)
}

/*
	const { Lyrics, aliexpress } => require("xxxx")
	const ly = new Lyrics("Lil Chainz Holofotes")
	ly.get().then(console.log).catch(console.error);
	aliexpress(id).then(console.log).catch(console.error);
*/