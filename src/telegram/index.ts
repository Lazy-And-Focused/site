import Client from "./bot";

import { ICommand } from "./types/command.type";
import { IInteraction } from "./types/interaction.types";

import Help from "./commands/help.command";
import Member, { sendHelp as mSendHelp } from "./commands/member.command";
import Projects, { sendHelp as pSendHelp } from "./commands/projects.command";
import News, { sendHelp as nSendHelp  } from "./commands/news.command";
import Forward, { sendHelp as fSendHelp } from "./commands/forward.command";
import Start from "./commands/start.command";

import CommandListener from "./listeners/commands.listener";
// import ForwardListener from "./listeners/forward.listener";

const commands = Object.fromEntries(([
  [new Help(), false],
  [new Member(), mSendHelp],
  [new Projects(), pSendHelp],
  [new News(), nSendHelp],
  [new Forward(), fSendHelp],
  [new Start(), false]
] as [ICommand, false|((interaction: IInteraction, prefix?: string) => Promise<any>)][]).map(c => c[1] ? [
  c[0].name, { command: c[0], help: c[1] }
] : [
  c[0].name, { command: c[0], help: false }
])) as {
  [key: string]: {
    command: ICommand<any>,
    help: false | (() => void)
  }
};

const listeners = Object.fromEntries([
  new CommandListener(),
  // new ForwardListener()
].map(l => [l.name, l]));

const client = new Client({
  commands: Object.fromEntries(Object.keys(commands).map(c => [c, commands[c].command])),
  listeners: listeners,
  help: Object.fromEntries(Object.keys(commands).filter(c => !!commands[c].help).map(c => {
    return [c, commands[c].help as any]
  }))
});

let started = false;

const start = () => {
  if (started) return client;

  client.launchListeners();
  client.writeCommands();
  client.execute();

  started = true;

  return client;
};

export {
  commands, listeners, client,
  start
};

export default client;