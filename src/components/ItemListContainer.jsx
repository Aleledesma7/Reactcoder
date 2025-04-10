export default function ItemListContainer({ greeting }) {
    return (
        <main className="area-main flex flex-col items-center justify-center overflow-y-auto h-full w-full bg-base-200 p-4">
            <h1 className="text-4xl font-bold">{greeting}</h1>
        </main>
    )
}