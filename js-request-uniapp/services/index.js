import RenRequest from './request/index'
import {
	TIMEOUT
} from './request/config'

export const testRequest = new RenRequest({
	timeout: TIMEOUT
})