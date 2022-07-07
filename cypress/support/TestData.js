export class TestData {

    application_url = 'https://demo.saas-3.veriff.me'

    getApplicationURL(item) {
        return this.application_url
    }

}

export const testData = new TestData()
