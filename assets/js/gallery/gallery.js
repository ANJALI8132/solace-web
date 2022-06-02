 /*-------------------------
            magnific popup activation
    -------------------------*/
    $('.video-play-btn,.video-popup,.small-vide-play-btn').magnificPopup({
        type: 'video',
        removalDelay: 260,
        mainClass: 'mfp-zoom-in',
    });

/*-------------------------------
        Portfolio filter 
---------------------------------*/
    var $Container = $('.gallery-masonry');
    if ($Container.length > 0) {
        $('.gallery-masonry').imagesLoaded(function () {
            var festivarMasonry = $Container.isotope({
                itemSelector: '.masonry-item', // use a separate class for itemSelector, other than .col-
                masonry: {
                    gutter: 0
                }
            });
            $(document).on('click', '.gallery-menu li', function () {
                var filterValue = $(this).attr('data-filter');
                festivarMasonry.isotope({
                    filter: filterValue
                });
            });
        });
        $(document).on('click','.gallery-menu li' , function () {
            $(this).siblings().removeClass('active');
            $(this).addClass('active');
        });
    }

    /* -------------------------------------------------------------
        Image Gallery Popup
    ------------------------------------------------------------- */
    function riyaqas_image_popup(selector){
        if ($(selector).length){
            $(selector).magnificPopup({
                delegate: 'a',
                type: 'image',
                gallery: { enabled: true },
                removalDelay: 500,
                callbacks: {
                    beforeOpen: function() {
                        this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
                        this.st.mainClass = this.st.el.attr('data-effect');
                    }
                },
                closeOnContentClick: true,
                midClick: true
            });
        }
    }
    /* ------- Gallery image Popup--------- */
    riyaqas_image_popup('.gallery-masonry .masonry-item');