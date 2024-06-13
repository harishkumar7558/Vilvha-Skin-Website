

export default function Nav2() {

    return (
        <>
            <nav class="navbar navbar-expand-lg bg-light">
                <div class="container-fluid">
                    <img class="me-5" src="./Images/nav.avif" width={"8%"}/>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav ms-5">
                            <li class="nav-item ms-2">
                                <a class="nav-link" aria-current="page" href="#">Best Sellers</a>
                            </li>
                            <li class="nav-item ms-2">
                                <a class="nav-link" href="#">Hair</a>
                            </li>
                            <li class="nav-item ms-2">
                                <a class="nav-link" href="#">Face</a>
                            </li>
                            <li class="nav-item ms-2">
                                <a class="nav-link" href="#">Body</a>
                            </li>
                            <li class="nav-item ms-2">
                                <a class="nav-link" href="#">Milk Range</a>
                            </li>
                            <li class="nav-item ms-2">
                                <a class="nav-link" href="#">Combos & Gifting</a>
                            </li>
                            <li class="nav-item ms-2">
                                <a class="nav-link" href="#">About Us</a>
                            </li>
                            <li class="nav-item ms-2 me-5">
                                <a class="nav-link" href="#">Blog</a>
                            </li>
                            <li class="nav-item ms-5">
                                <a class="nav-link" href="#">🔍</a>
                            </li>
                            <li class="nav-item ms-1">
                                <a class="nav-link" href="#">👤</a>
                            </li>
                            <li class="nav-item ms-1">
                                <a class="nav-link" href="#">🛒</a>
                            </li>
                            
                            {/* <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown link
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}