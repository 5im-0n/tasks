module.exports = {
	'checking if remove works' : function (browser) {
		browser
			.url(browser.launchUrl, function() {
				console.log('Testing ' + browser.launchUrl);
			})
			.waitForElementVisible('#add-task', 10000)
			.setValue('#task', 'comprare pasticcini')
			.click('#add-task')
			.waitForElementVisible('.remove-task', 10000)
			.assert.containsText('#task-list', 'comprare pasticcini')
			.execute(function() {
				document.querySelector('.remove-task').click()
			})
			.waitForElementNotPresent('.remove-task', 10000)
			.end();
	}
};