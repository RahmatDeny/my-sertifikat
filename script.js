$(document).ready(function() {
    $(".sertifikat").click(function() {
        // Hentikan animasi yang sedang berlangsung
        $(".sertifikat-container").stop();

        // Reset ukuran dan efek blur pada semua sertifikat
        $(".sertifikat").css({
            "width": "100%",
            "filter": "blur(0)"
        });

        // Atur ukuran lebih besar, efek blur, dan zoom pada sertifikat yang dipilih
        $(this).css({
            "width": "120%",
            "transform": "scale(1.2)" // Atur faktor zoom sesuai keinginan
        });

        // Hitung posisi tengah container
        var containerWidth = $("#sertifikatSection").width();
        var containerLeft = $("#sertifikatSection").offset().left;

        // Hitung offset untuk geser sertifikat yang dipilih ke tengah
        var selectedSertifikat = $(this).parent();
        var offset = containerLeft + containerWidth / 2 - selectedSertifikat.offset().left - selectedSertifikat.outerWidth() / 2;

        // Geser sertifikat yang dipilih ke samping
        $(".sertifikat-container").animate({
            "left": `+=${offset}px`
        }, 500);
    });
});
