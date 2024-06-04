import {
	BASE_URL
} from './config.js'

class RenRequest {
	constructor(config) {
		this.config = config

		// 响应拦截
		uni.addInterceptor('request', {
			// 请求拦截
			invoke(args) {
				// console.log(args)

				// 请求地址
				args.url = BASE_URL + args.url

				// 请求头
				// args.header = {
				// 	...args.header,
				// 	"Content-Type": "application/x-www-form-urlencoded",
				// }

				// token处理
			},
			// 响应拦截
			success(args) {
				// 
			}
		})
	}

	request(options) {
		return new Promise((resolve, reject) => {
			uni.request({
				...this.config,
				header: {
					"Content-Type": "application/x-www-form-urlencoded"
				},
				...options,
				success: (res) => {
					resolve(res.data)
				},
				fail: (err) => {
					reject(err)
				}
			})
		})
	}
	get(options) {
		return this.request({
			...options,
			method: 'get'
		})
	}
	post(options) {
		return this.request({
			...options,
			method: 'post'
		})
	}
}

export default RenRequest