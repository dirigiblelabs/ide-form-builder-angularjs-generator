var generator = require("template-form-builder-angularjs/template/generate-form-angularjs");
var workspaceManager = require("workspace/v4/manager");

var workspace = __context.get('workspace');
var project = __context.get('project');
var path = __context.get('path');

var modelPath = path.replace(".form", ".html");
var content = generator.generate(workspace, project, path);

if (content !== null) {
    var bytes = require("io/v4/bytes");
    input = bytes.textToByteArray(content);

    if (workspaceManager.getWorkspace(workspace)
        .getProject(project).getFile(path).exists()) {
            workspaceManager.getWorkspace(workspace)
                .getProject(project).createFile(modelPath, input);
    } else {
        workspaceManager.getWorkspace(workspace)
            .getProject(project).getFile(modelPath).setContent(input);
    }
}
