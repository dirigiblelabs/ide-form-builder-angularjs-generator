exports.getTemplate = function() {
	    var template = {
            "name":"AngularJS Generator from Form Model",
            "description":"AngularJS Form Model generator template",
            "extension":"form",
            "sources": 
                [
                    {
                       "location": "/template-form-builder-angularjs/template/angularjs.html.template", 
                       "action": "generate",
                       "rename": "{{fileNameBase}}.html",
                       "engine": "javascript",
                       "handler": "/template-form-builder-angularjs/template/generator.js"
		                }
                ]
        };
        return template;
}