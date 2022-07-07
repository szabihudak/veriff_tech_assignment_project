export class TestData {

    application_url = 'https://demo.saas-3.veriff.me'
    integration_url = 'https://magic.saas-3.veriff.me'
    sessions_api_url = 'https://magic.saas-3.veriff.me/api/v2/sessions'

    request_body =
        {
            "full_name": "Szabi",
            "lang": "de",
            "document_country": "AL",
            "document_type": "ID_CARD",
            "additionalData": {
                "isTest": false
            }
        }

    request_body_empty_field =
        {
            "full_name": "",
            "lang": "de",
            "document_country": "AL",
            "document_type": "ID_CARD",
            "additionalData": {
                "isTest": false
            }
        }

    request_body_invalid_field =
        {
            "full_name": "Szabi",
            "lang": "xYzert9120345678",
            "document_country": "AL",
            "document_type": "ID_CARD",
            "additionalData": {
                "isTest": false
            }
        }

    invalid_token = 'Axcvnb56.tre456666666690'

    getApplicationURL(item) {
        return this.application_url
    }

    getRequests(request_id) {
        let reqest
        switch (request_id) {
            case 'request_body':
                reqest = this.request_body
                break
            case 'request_body_empty_field':
                reqest = this.request_body_empty_field
                break
            case 'request_body_invalid_field':
                reqest = this.request_body_invalid_field
                break
            case 'invalid_token':
                reqest = this.invalid_token
                break
            default:
                reqest = ""
        }
        return reqest
    }

}

export const testData = new TestData()
