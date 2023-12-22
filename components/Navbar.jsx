import Image from "next/image";

const Navbar = ({session}) => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">MyList</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Trending</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Popular</a>
                            </li>
                        </ul>
                        <div className="nav-item">
                            <Image alt="user" src={session?.user?.image} width={30} height={30}></Image>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;