export const STYLE = {
    SECTION:
        'flex min-h-screen w-full flex-col items-center justify-center px-6 py-14 lg:px-8',
    CONTAINER:
        'mx-auto flex max-w-7xl flex-col gap-16 px-6 md:gap-14 lg:px-8',
    HEADER: 'max-w-xl',
    TITLE:
        'text-pretty text-3xl font-semibold tracking-tight text-base-content sm:text-4xl',
    DESCRIPTION: 'mt-6 text-lg/8 text-base-content/40',
    LIST: [
        'grid w-full max-w-7xl grid-cols-1',
        'justify-items-center gap-x-4 gap-y-12 p-4',
        'md:grid-cols-2 xl:grid-cols-3',
    ].join(' '),
    LIST_ITEM: 'flex h-max w-full min-w-[20em] items-stretch',
} as const;