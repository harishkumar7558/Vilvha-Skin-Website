import "./Foot.css";
export default function Foot() {

  return (
    <>

      <footer class="backs">
        
        <div class="container-fluid d-flex">
        <div class="asserts">
          <img src="./Images/whitelogo.webp" alt="" width={"55%"} />
          <img src="./Images/foot.png" alt="" width={"10%"} />
          <img src="./Images/footapple.png" alt="" width={"10%"} />


          <section class="mb-4">
            <p>
            Sign up to get 10% off on your first order
            </p>
          </section>
          <section class="">
            <form action="">

              <div class=" d-flex justify-content-center">


                <div class="d-flex">

                  <div data-mdb-input-init class="form-outline mb-3">
                    <input type="email" placeholder="email" id="form5Example24" class="form-control w-100" />
                  </div>

                  <button data-mdb-ripple-init type="submit" class="btn btn-outline-dark mb-4 ms-2">
                    Join
                  </button>
                </div>
              </div>

            </form>
          </section>
          <div>
          <a data-mdb-ripple-init class="btn btn-outline btn-floating m-1" href="#!" role="button"
                ><i class="fa fa-facebook"></i></a>


                <a data-mdb-ripple-init class="btn btn-outline btn-floating m-1" href="#!" role="button"
                ><i class="fa fa-twitter"></i
                ></a>


                <a data-mdb-ripple-init class="btn btn-outline btn-floating m-1" href="#!" role="button"
                ><i class="fa fa-google"></i
                ></a>


                <a data-mdb-ripple-init class="btn btn-outline btn-floating m-1" href="#!" role="button"
                ><i class="fa fa-instagram"></i
                ></a>


                <a data-mdb-ripple-init class="btn btn-outline btn-floating m-1" href="#!" role="button"
                ><i class="fa fa-linkedin"></i></a>


                <a data-mdb-ripple-init class="btn btn-outline btn-floating m-1" href="#!" role="button"
                ><i class="fa fa-github"></i
                ></a>

          </div>
          </div>
          

          <section class=" mt-5 ms-5">

            <div class="row">

              <div class="col-lg-3 col-md-6 mb-4 mb-md-0 p-4">
                <h6 class="text-uppercase">TOP CATEGORIES</h6>

                <ul class="list-unstyled mb-0">
                  <li>
                    <a class="text-body" href="#!">Milk Range</a>
                  </li>
                  <li>
                    <a class="text-body" href="#!">Combos</a>
                  </li>
                  <li>
                    <a class="text-body" href="#!">Hair Care</a>
                  </li>
                  <li>
                    <a class="text-body" href="#!">Body Care </a>
                  </li>
                  <li>
                    <a class="text-body" href="#!">Face Care</a>
                  </li>
                </ul>
              </div>

              <div class="col-lg-3 col-md-6 mb-4 mb-md-0 p-4">
                <h6 class="text-uppercase">POLICIES</h6>

                <ul class="list-unstyled mb-0">
                  <li>
                    <a class="text-body" href="#!">Privacy Policy</a>
                  </li>
                  <li>
                    <a class="text-body" href="#!">Terms & Conditions</a>
                  </li>
                  <li>
                    <a class="text-body" href="#!">Shipping & Cancellation</a>
                  </li>
                  <li>
                    <a class="text-body" href="#!">Returns & Refund</a>
                  </li>
                </ul>
              </div>

              <div class="col-lg-3 col-md-6 mb-4 mb-md-0 p-4">
                <h6 class="text-uppercase">BEST SELLERS</h6>

                <ul class="list-unstyled mb-0"> 
                  <li>
                    <a class="text-body" href="#!">Goatmilk Shampoo</a>
                  </li>
                  <li>
                    <a class="text-body" href="#!">Aloevera Gel</a>
                  </li>
                  <li>
                    <a class="text-body" href="#!">Brightening Serum</a>
                  </li>
                  <li>
                    <a class="text-body" href="#!">Face Mask</a>
                  </li>
                  <li>
                    <a class="text-body" href="#!">Hair Serum</a>
                  </li>
                  <li>
                    <a class="text-body" href="#!">Hair Growth Oil</a>
                  </li>
                </ul>
              </div>

              <div class="col-lg-3 col-md-6 mb-4 mb-md-0 p-4">
                <h6 class="text-uppercase">INFO</h6>

                <ul class="list-unstyled mb-0">
                  <li>
                    <a class="text-body" href="#!">Our Story</a>
                  </li>
                  <li>
                    <a class="text-body" href="#!">Contact Us</a>
                  </li>
                  <li>
                    <a class="text-body" href="#!">Track Your Order</a>
                  </li>
                  <li>
                    <a class="text-body" href="#!">FAQs</a>
                  </li>
                </ul>
              </div>

            </div>

          </section>

        </div>


        <div class="text-center p-3" style={{ "background-color": "rgba(0, 0, 0, 0.05);" }}>
          © 2020 Copyright:
          <a class="text-reset fw-bold" href="https://mdbootstrap.com/">MDBootstrap.com</a>
        </div>

      </footer>

    </>
  )
}