<?php
session_start(); 
?>
<!DOCTYPE html>
<html>

<head>
    <!-- Basic -->
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <!-- Mobile Metas -->
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <!-- Site Metas -->
    <meta name="keywords" content="" />
    <meta name="description" content="" />
    <meta name="author" content="" />
    <?php include 'header.php'?>
    <title>Home | SHIPPO ASAHI MOULDS</title>
    <link rel="icon" href="images/samt_icon.png" type="image/png">

    <meta name="keywords"
        content="ชิปโป,ชิปโป อาซาฮี,ชิปโป อาซาฮี โมลด์ส,SAMT,Shippo Asahi Moulds,Shippo Asahi Moulds (Thailand),แม่พิมพ์,แม่พิมพ์อลูมีเนียม,molds,moulds,small hole,core Pin" />
    <meta name="description" content="ผลิตแม่พิมพ์ฉีดอลูมิเนียมและส่งมอบชิ้นส่วนแม่พิมพ์คุณภาพสูงไปทั่วโลก" />

    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-0MNYJHPVF7"></script>
    <script>
    window.dataLayer = window.dataLayer || [];

    function gtag() {
        dataLayer.push(arguments);
    }
    gtag("js", new Date());

    gtag("config", "G-0MNYJHPVF7");
    </script>

</head>
<style>
.transparent-background {
    background-color: rgba(0, 0, 0, 0.5);
    /* black with 50% opacity */
    color: white;
    padding: 20px;
}

.gradient-background {
    background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.1));
    color: white;
    padding: 20px;
    width: fit-content;

}

.gradient-background-shippo {
    background: linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.4));
    /* color: #000000 !important; */
    width: fit-content;
    padding: 20px;
}

.gradient-background-shippo-white {
    background: linear-gradient(rgba(255, 255, 255, 1), rgba(255, 255, 255, 0.8));
    /* color: #000000 !important; */
    width: fit-content;
    padding: 20px;
}
</style>

<body>
    <?php include 'nav.php'?>
    <script>
    $(document).ready(function() {
        $('#customCarousel1').on('slide.bs.carousel', function(e) {
            var nextIndex = $(e.relatedTarget).index();
            /*  if (nextIndex === 1) { // Check if sliding to the second slide (index 1)
                 $('.hero_area').css('background',
                     'linear-gradient(to bottom, rgba(107, 154, 196, 0.5), rgba(107, 154, 196, 0.1)), url(images/hero-bg.jpg)'
                 );
                 $('.hero_area').css('background-size', 'cover');

             } else  */
            if (nextIndex === 1) { // Check if sliding to the second slide (index 1)
                $('.hero_area').css('background',
                    'linear-gradient(to bottom, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.1)), url(images/acana_cover.png)'
                );

                $('.hero_area').css('background-size', 'cover');

            } else {
                // Reset background image to default or handle other slides as needed
                $('.hero_area').css('background-image', '');
            }
        });
    });
    </script>

    <div class="hero_area">
        <!-- end header section -->
        <!-- slider section -->
        <section class="slider_section">
            <div id="customCarousel1" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <div class="container">
                            <div class="detail-box">
                                <h1 style="color: black;">
                                    <?php 
                                   echo $samt;
                                   ?>

                                </h1><br>
                                <h2 class="color-shippo"><b><?php echo $samt_des; ?></b>
                                </h2>
                                <div class="btn-box">
                                    <a href="about.php" class="btn1">
                                        Read More
                                    </a>
                                    <a href="#contactUs" class="btn2">
                                        Contact Us
                                    </a>

                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- <div class="carousel-item">
                        <div class="container ">
                            <div class="detail-box">
                                <h1 class="text-white">
                                    SHIPPO ASAHI MOULDS
                                </h1>
                                <h2 class="gradient-background-shippo color-shippo"><b>WE ARE THE TOP MANUFACTURING
                                        <br>
                                        OF DIE CASTING MOULDS</b>
                                </h2>
                                <div class="btn-box">
                                    <a href="portfolio.php" class="btn1">
                                        Read More
                                    </a>
                                    <a href="#contactUs" class="btn2">
                                        Contact Us
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div> -->
                    <div class="carousel-item">
                        <div class="container">
                            <div class="detail-box mx-auto gradient-background-shippo-white color-shippo"
                                style=" width:fit-content; padding: 20px;">
                                <h2 class="text-dark">
                                    <b>
                                        What Is? <span class="color-shippo">Acana Stock</span>
                                        <img src="images/arthi2.png" alt="" style="width: 50px;"><br><br>
                                    </b>
                                </h2>
                                <p class="" style="font-size: 1.7vh;">
                                    &nbsp;<?php echo $acana_des; ?>
                                </p>
                                <h4 class="gradient-background-shippo-white">
                                    <?php echo $can_contact; ?>
                                    <a href="https://arcana-onlineshop.com/" target="_blank">
                                        <?php echo $here; ?></a>
                                </h4>
                                <a href="acana_info.php" class="btn btn-info">
                                    <i class="fa-solid fa-arrow-right fa-beat"></i> Read More
                                </a>
                                <!--  <h2 class="color-shippo"><b>ACANA STOCK </b></h2> -->
                            </div>
                        </div>
                    </div>
                </div>
                <div class="carousel_btn-box">
                    <a class="carousel-control-prev" href="#customCarousel1" role="button" data-slide="prev">
                        <i class="fa fa-arrow-left" aria-hidden="true"></i>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#customCarousel1" role="button" data-slide="next">
                        <i class="fa fa-arrow-right" aria-hidden="true"></i>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
            </div>
        </section>
        <!-- end slider section -->
    </div>

    <!-- about section -->

    <section class="about_section layout_padding">
        <div class="container  ">
            <div class="row">
                <div class="col-md-6">
                    <div class="detail-box">
                        <div class="heading_container">
                            <h2>Welcome to <span>SAMT</span></h2>
                        </div>
                        <h5>
                            SAMT เป็นผู้ผลิตแม่พิมพ์ชั้นนำในอุตสาหกรรม
                        </h5>
                        <h5>
                            WE ARE THE TOP MANUFACTURING OF DIE CASTING MOULDS
                        </h5>
                        <h5>
                            お客様にとってのベストバリューを提供いたします
                        </h5>
                        <a href="about.php">
                            Read More
                        </a>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="img-box">
                        <img src="images/m1.jpg" alt="" />
                    </div>
                    <div class="img-box">
                        <img src="images/m2.jpg" alt="" />
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    <img class="img-fluid" src="images/content2.jpg" alt="">
                </div>
                <div class="col-md-6">
                    <div class="heading_container">
                        <h2 style="text-align: start;"><span><?php echo $index_h1; ?></span></h2>
                    </div>
                    <h4><?php echo $index_s1; ?></h4><br>
                    <p>&nbsp;<?php echo $index_des; ?></p>
                </div>
            </div>
            <br>
        </div>
    </section>

    <!-- end about section -->

    <!-- portfolio section -->

    <section class="portfolio_section">
        <div class="container">
            <div class="heading_container heading_center">
                <h2>
                    Our Service
                </h2>
                <h3>
                    <?php echo $smc_service; ?>
                </h3>
            </div>
            <div class="carousel-wrap ">
                <div class="filter_box">
                    <nav class="owl-filter-bar">
                        <a href="#" class="item  active" data-target="#slideWork" data-slide-to="0">1</a>
                        <a href="#" class="item" data-target="#slideWork" data-slide-to="1">2</a>
                        <a href="#" class="item" data-target="#slideWork" data-slide-to="2">3</a>
                        <a href="#" class="item" data-target="#slideWork" data-slide-to="3">4</a>
                    </nav>
                </div>
            </div>
            <script>
            document.addEventListener('DOMContentLoaded', function() {
                const navItems = document.querySelectorAll('.owl-filter-bar .item');
                const carousel = document.getElementById('slideWork');

                // Function to update the active class
                function updateActiveNavItem(index) {
                    navItems.forEach(el => el.classList.remove('active'));
                    if (navItems[index]) {
                        navItems[index].classList.add('active');
                    }
                }

                // Add click event listener to nav items
                navItems.forEach((item, index) => {
                    item.addEventListener('click', function(event) {
                        event.preventDefault();
                        updateActiveNavItem(index);
                        // Change the slide in the carousel
                        $('#slideWork').carousel(index);
                    });
                });

                // Listen to slide change events in the carousel
                $('#slideWork').on('slide.bs.carousel', function(event) {
                    const index = $(event.relatedTarget).index();
                    updateActiveNavItem(index);
                });

                // Optional: Automatically change the active nav item every 2 seconds for testing
                let currentIndex = 0;
                setInterval(() => {
                    currentIndex = (currentIndex + 1) % navItems.length;
                    updateActiveNavItem(currentIndex);
                    $('#slideWork').carousel(currentIndex);
                }, 2000);
            });
            </script>
        </div>
        <div id="slideWork" class="carousel slide m-5" data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#slideWork" data-slide-to="0" class="active"></li>
                <li data-target="#slideWork" data-slide-to="1"></li>
                <li data-target="#slideWork" data-slide-to="2"></li>
                <li data-target="#slideWork" data-slide-to="3"></li>
            </ol>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <div class="row">
                        <div class="col-md-4">
                            <img class="d-block w-100" src="images/cap_drow.jpg" alt="First slide">
                        </div>
                        <div class="col-md-4">
                            <img class="d-block w-100" src="images/liw_work.jpg" alt="Second slide">
                        </div>
                        <div class="col-md-4">
                            <img class="d-block w-100" src="images/machine3.jpg" alt="Third slide">
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="row">
                        <div class="col-md-4">
                            <img class="d-block w-100" src="images/5gan3.jpg" alt="First slide">
                        </div>
                        <div class="col-md-4">
                            <img class="d-block w-100" src="images/edm_water.jpg" alt="Second slide">
                        </div>
                        <div class="col-md-4">
                            <img class="d-block w-100" src="images/machine4.jpg" alt="Third slide">
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="row">
                        <div class="col-md-4">
                            <img class="d-block w-100" src="images/cap_drow.jpg" alt="First slide">
                        </div>
                        <div class="col-md-4">
                            <img class="d-block w-100" src="images/liw_work.jpg" alt="Second slide">
                        </div>
                        <div class="col-md-4">
                            <img class="d-block w-100" src="images/machine3.jpg" alt="Third slide">
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="row">
                        <div class="col-md-4">
                            <img class="d-block w-100" src="images/5gan3.jpg" alt="First slide">
                        </div>
                        <div class="col-md-4">
                            <img class="d-block w-100" src="images/center_pic.jpg" alt="Second slide">
                        </div>
                        <div class="col-md-4">
                            <img class="d-block w-100" src="images/sent_work.jpg" alt="Third slide">
                        </div>
                    </div>
                </div>
                <!-- Add more carousel items as needed -->
            </div>
            <a class="carousel-control-prev" href="#slideWork" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#slideWork" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
        <div class="container heading_container heading_start">
            <h5 class="mb-5">
                &nbsp; <?php echo $work_des; ?>
            </h5>
        </div>
    </section>

    <!-- end portfolio section -->

    <!-- service section -->

    <section class="service_section layout_padding">
        <div class="container">
            <div class="heading_container heading_center">
                <h2>Our <span>Strength</span></h2>
                <br>
                <img class="img-fluid" src="images/content3_1.jpg" alt="">
                <div class="row">
                    <div class="col-sm-6 col-md-4">
                        <div class="box ">
                            <div class="img-box">
                                <img src="images/s4.png" alt="" />
                            </div>
                            <div class="detail-box">
                                <h5>
                                    <?php echo $st_h1; ?>
                                </h5>
                                <p class="text-start">
                                    <?php echo $st_des1; ?>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="col-sm-6 col-md-4">
                        <div class="box ">
                            <div class="img-box">
                                <img src="images/s2.png" alt="" />
                            </div>
                            <div class="detail-box">
                                <h5>
                                    <?php echo $st_h2; ?>
                                </h5>
                                <p class="text-start">
                                    <?php echo $st_des2; ?>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-4">
                        <div class="box ">
                            <div class="img-box">
                                <img src="images/s6.png" alt="" />
                            </div>
                            <div class="detail-box">
                                <h5>
                                    <?php echo $st_h3; ?>
                                </h5>
                                <p class="text-start">
                                    <?php echo $st_des3; ?>
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="btn-box">
                    <a href="product.php">
                        Read More
                    </a>
                </div>
                <div class="container mt-5">
                    <div class="heading_container heading_center">
                        <h2>Our <span>Service</span></h2>
                    </div>
                    <div class="row">
                        <div class="col-sm-6 col-md-4">
                            <div class="box ">
                                <div class="img-box">
                                    <img src="images/icon1.png" alt="" />
                                </div>
                                <div class="detail-box">
                                    <h5>
                                        <?php echo $high_quality; ?>
                                    </h5>
                                    <p>

                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-4">
                            <div class="box ">
                                <div class="img-box">
                                    <img src="images/icon2.png" alt="" />
                                </div>
                                <div class="detail-box">
                                    <h5>
                                        <?php echo $low_price; ?>
                                    </h5>
                                    <p>

                                    </p>
                                </div>
                            </div>
                        </div>

                        <div class="col-sm-6 col-md-4">
                            <div class="box ">
                                <div class="img-box">
                                    <img src="images/icon3.png" alt="" />
                                </div>
                                <div class="detail-box">
                                    <h5>
                                        <?php echo $ontime; ?>
                                    </h5>
                                    <p>

                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="heading_container heading_center mt-4">
                        <h3>
                            <?php echo $numberOne; ?>
                        </h3>
                    </div>
                </div>

            </div>
    </section>

    <!-- end service section -->

    <!-- contact section -->
    <section class="contact_section" id="contactUs">
        <div class="container">
            <div class="heading_container heading_center">
                <h2>Contact <span>Us</span></h2>
            </div>
            <div class="row">
                <div class="col-md-6 px-0">
                    <div class="form_container">
                        <form action="">
                            <div class="form-row">
                                <div class="form-group col">
                                    <input type="text" class="form-control" placeholder="Your Name" />
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="form-group col-lg-6">
                                    <input type="text" class="form-control" placeholder="Phone Number" />
                                </div>
                                <div class="form-group col-lg-6">
                                    <select name="" id="" class="form-control wide">
                                        <option value="">Select Service</option>
                                        <option value="">Service 1</option>
                                        <option value="">Service 2</option>
                                        <option value="">Service 3</option>
                                    </select>
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="form-group col">
                                    <input type="email" class="form-control" placeholder="Email" />
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="form-group col">
                                    <input type="text" class="message-box form-control" placeholder="Message" />
                                </div>
                            </div>
                            <div class="btn_box">
                                <button>
                                    SEND
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="col-md-6 px-0">
                    <div class="map_container">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3878.593487445366!2d100.7929681631413!3d13.560511013788284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d5b67d63b191d%3A0xff34231d8372979b!2sSHIPPO%20ASAHI%20MOULDS(THAILAND)!5e0!3m2!1sth!2sth!4v1604043443675!5m2!1sth!2sth"
                            width="100%" frameborder="0" style="border: 0" allowfullscreen="" aria-hidden="false"
                            tabindex="0"></iframe>
                    </div>
                </div>

            </div>
        </div>
    </section>
    <!-- end contact section -->




    <?php 
    include 'review.php';
    include 'footer.php'; ?>
    <!-- end info section -->



<!-- Code injected by live-server -->
<script>
	// <![CDATA[  <-- For SVG support
	if ('WebSocket' in window) {
		(function () {
			function refreshCSS() {
				var sheets = [].slice.call(document.getElementsByTagName("link"));
				var head = document.getElementsByTagName("head")[0];
				for (var i = 0; i < sheets.length; ++i) {
					var elem = sheets[i];
					var parent = elem.parentElement || head;
					parent.removeChild(elem);
					var rel = elem.rel;
					if (elem.href && typeof rel != "string" || rel.length == 0 || rel.toLowerCase() == "stylesheet") {
						var url = elem.href.replace(/(&|\?)_cacheOverride=\d+/, '');
						elem.href = url + (url.indexOf('?') >= 0 ? '&' : '?') + '_cacheOverride=' + (new Date().valueOf());
					}
					parent.appendChild(elem);
				}
			}
			var protocol = window.location.protocol === 'http:' ? 'ws://' : 'wss://';
			var address = protocol + window.location.host + window.location.pathname + '/ws';
			var socket = new WebSocket(address);
			socket.onmessage = function (msg) {
				if (msg.data == 'reload') window.location.reload();
				else if (msg.data == 'refreshcss') refreshCSS();
			};
			if (sessionStorage && !sessionStorage.getItem('IsThisFirstTime_Log_From_LiveServer')) {
				console.log('Live reload enabled.');
				sessionStorage.setItem('IsThisFirstTime_Log_From_LiveServer', true);
			}
		})();
	}
	else {
		console.error('Upgrade your browser. This Browser is NOT supported WebSocket for Live-Reloading.');
	}
	// ]]>
</script>
</body>

</html>