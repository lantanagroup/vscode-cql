
import * as path from 'path';
import * as net from 'net';
import { StreamInfo, Executable, ExecutableOptions } from 'vscode-languageclient/node';
import { RequirementsData } from './requirements';
import { logger } from './log';

import { ExtensionContext } from 'vscode';

declare var v8debug;
const DEBUG = (typeof v8debug === 'object') || startedInDebugMode();

export function prepareExecutable(requirements: RequirementsData, context: ExtensionContext, workspacePath: string): Executable {
	const executable: Executable = Object.create(null);
	const options: ExecutableOptions = Object.create(null);
	options.env = Object.assign(process.env);
	executable.options = options;
	executable.command = path.resolve(requirements.java_requirements.java_home + '/bin/java');
	executable.args = prepareParams(requirements, context, workspacePath);
	logger.info(`Starting CQL server with: ${executable.command} ${executable.args.join(' ')}`);
	return executable;
}
export function awaitServerConnection(port): Thenable<StreamInfo> {
	const addr = parseInt(port);
	return new Promise((res, rej) => {
		const server = net.createServer(stream => {
			server.close();
			logger.info('CQL LS connection established on port ' + addr);
			res({ reader: stream, writer: stream });
		});
		server.on('error', rej);
		server.listen(addr, () => {
			server.removeListener('error', rej);
			logger.info('Awaiting CQL LS connection on port ' + addr);
		});
		return server;
	});
}

function prepareParams(requirements: RequirementsData, context: ExtensionContext, workspacePath: string): string[] {
	const params: string[] = [];
	if (DEBUG) {
		const port =  1044;
		params.push(`-agentlib:jdwp=transport=dt_socket,server=y,suspend=n,address=${port},quiet=y`);
		// suspend=y is the default. Use this form if you need to debug the server startup code:
		//  params.push('-agentlib:jdwp=transport=dt_socket,server=y,address=1044');
	}

	if (DEBUG) {
		params.push('-Dlog.level=ALL');
	}

	params.push('-cp');
	params.push(path.resolve(requirements.cql_ls_info.cql_ls_jar));
	params.push('org.opencds.cqf.cql.ls.Main');

	// TODO: Add support to the language server to support using the workspace.
	params.push("-workspace");
	params.push(workspacePath);

	return params;
}

function startedInDebugMode(): boolean {
	const args = (process as any).execArgv as string[];
	return hasDebugFlag(args);
}

// If vscode is started with a debug flag this enables the java ls debug as well.
export function hasDebugFlag(args: string[]): boolean {
	if (args) {
		// See https://nodejs.org/en/docs/guides/debugging-getting-started/
		return args.some( arg => /^--inspect/.test(arg) || /^--debug/.test(arg));
	}
	return false;
}