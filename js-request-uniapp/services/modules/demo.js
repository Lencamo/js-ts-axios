import {
	testRequest
} from '../index'


export function getDemoList() {
	return testRequest.get({
		url: '/demo'
	})
}