import * as vscode from "vscode";

export const activate = (_context: vscode.ExtensionContext): void => {
    console.log("kove VS Code extenstion is active.");
}

export const deactivate = (): void => {
    // cleanup
}