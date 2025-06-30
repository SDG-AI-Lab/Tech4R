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
    <div className="container rounded-lg bg-gray-100 py-12 mb-8">
        <div className="max-w-6xl mx-auto px-4">
            {title && <h2 className="text-5xl font-semibold mb-8 text-center">{title}</h2>}

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                {tiles.map((tile, idx) => {

                    const content = (
                        <div className={`bg-white rounded-lg shadow p-4 sm:mb-4 hover:shadow-md transition ${tile.classNames || ''}`}>
                            <div className="text-color-01 text-2xl mb-2">{tile.icon}</div>
                            <div className="text-sm font-semibold">{tile.name}</div>
                            {tile.desc && <p className="text-xs text-neutral-02 mt-1">{tile.desc}</p>}
                        </div>
                    );
                                        
                    if (!tile.url) {
                        return <div key={idx}>{content}</div>;
                    }

                    const isInternal = tile.url.startsWith('/') || tile.url.startsWith('#');

                    if (isInternal) {
                        return (
                        <Link href={tile.url} key={idx} passHref legacyBehavior>
                            <a>{content}</a>
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
                            className="block"
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
