export default function Topics() {
    return (
        <div className="px-10 pt-10 pb-5 flex flex-col w-5/12">
            <h1 className=" font-montserrat text-4xl text-orange pb-4" >Topics</h1>
            <div className="bg-light shadow-md rounded-lg border-t-4 border-orange">
                <ul className="px-5 py-5">
                    <li className="py-3 text-xl font-montserrat text-blue">Machine Learning</li>
                    <li className="py-3 text-xl font-montserrat text-blue">Artificial Intelligence</li>
                    <li className="py-3 text-xl font-montserrat text-blue">Web Development</li>
                    <li className="py-3 text-xl font-montserrat text-blue">Crypto</li>
                </ul>
            </div>
        </div>
    )
}