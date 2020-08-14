var generator = require("template-form-builder-angularjs/template/generate-form-angularjs");
var workspaceManager = require("platform/v4/workspace");

var workspace = __context.get('workspace');
var project = __context.get('project');
var path = __context.get('path');

var saveFile = function(workspace, project, path, content) {
    if (content !== null) {
        var bytes = require("io/v4/bytes");
        input = bytes.textToByteArray(content);

        if (workspaceManager.getWorkspace(workspace)
            .getProject(project).getFile(path).exists()) {
                workspaceManager.getWorkspace(workspace)
                    .getProject(project).createFile(path, input);
        } else {
            workspaceManager.getWorkspace(workspace)
                .getProject(project).getFile(path).setContent(input);
        }
    }
}

var viewPath = path.replace(".form", ".html");
var content = generator.generateView(workspace, project, path);
saveFile(workspace, project, viewPath, content);
var controllerPath = path.replace(".form", ".js");
var content = generator.generateController(workspace, project, path);
saveFile(workspace, project, controllerPath, content);

