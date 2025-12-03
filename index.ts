import concurrently from 'concurrently';

//Give concurrently an array of commands.
concurrently([
    {
        name: 'server',
        command: 'bun run dev',
        cwd: 'packages/server',
        prefixColor: 'cyan'
    },

    {
        name: 'client',
        command: 'bun run dev',
        cwd: 'packages/client',
        prefixColor: 'green'
    },
]);