import Link from 'next/link';

type TileItem = {
    name: string;
    desc?: string;
    icon: React.ReactNode;
    url?: string;
    classNames?: string;
};

type TilePanelProps = {
    title?: string;
    tiles: TileItem[];
};

export default function TilePanel({ title, tiles }: TilePanelProps) {
    return (
        <div className="container sm:rounded-[20px] bg-neutral-01 py-16">
            <div className="mx-auto px-12">
                {title && <h2 className="text-5xl font-semibold text-center tracking-[-1.5px] text-neutral-04 mb-12">{title}</h2>}
                <div className="grid grid-cols-1 lg:grid-cols-3 items-stretch gap-12">
                    {tiles.map((tile, idx) => {

                        const content = (
                            <div className={`hover:shadow-sm transition bg-white rounded-xl py-8 px-6 sm:mb-4 h-full flex flex-col ${tile.classNames || ''}`}>
                                <div className="w-12 h-12 mb-6">{tile.icon}</div>
                                <h2 className="text-xl font-semibold mb-2">{tile.name}</h2>
                                {tile.desc && <p className="text-neutral-02 leading-relaxed font-light">{tile.desc}</p>}
                            </div>
                        );

                        if (!tile.url) {
                            return <div key={idx} className="h-full">{content}</div>;
                        }

                        const isInternal = tile.url.startsWith('/') || tile.url.startsWith('#');

                        if (isInternal) {
                            return (
                                <Link href={tile.url} key={idx} passHref legacyBehavior>
                                    <a className="block h-full">{content}</a>
                                </Link>
                            );
                        }

                        // External URL or mailto: use plain anchor tag with target="_blank"
                        return (
                            <a
                                href={tile.url}
                                key={idx}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block h-full"
                            >
                                {content}
                            </a>
                        );

                    })}

                </div>
            </div>
        </div>
    );
}
