(function() {
    var generator = require("template-form-builder-angularjs/template/generate-form-angularjs");
    return generator.generate(__context.get('workspaceName'), __context.get('projectName'), __context.get('filePath'));
})();