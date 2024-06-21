$(document).ready(function () {
    $(".alert").hide();
    $('#btn').click(function () {
        $(this).css({
            'border': '2px solid yellow'
        });
        var sy = [3, 9, 5, 8];
        var mt = [4, 2, 6];
        var num = [1, 7, 0];
        var input = $('#input').val();
        // check counet number
        if (input.length != 10) {
            $('#error_text').text();
            $('.error').fadeIn().delay(2000).fadeOut(1500);
        } else {
            // creat array
            for (var i = 0; i < input.length; i++) {
                var arr = [];
                arr.push(input[i]);
            }
            if (input[0] != 0) {
                $('#other_text').text("(The First Number must be (0))");
                $('.other').fadeIn().delay(2000).fadeOut(1500);
            } else {
                if (input[1] != 9) {
                    $('#other_text').text("(The second Number must be  (9))");
                    $('.other').fadeIn().delay(2000).fadeOut(1500);

                } else {
                    // check your type number(sy/mtn/other)
                    for (var j = 0; j < sy.length; j++) {
                        if (input[2] == sy[j]) {
                            $('#syritel_text').text();
                            $('.syritel').fadeIn().delay(2000).fadeOut(1500);
                        }
                    }
                    for (var z = 0; z < mt.length; z++) {
                        if (input[2] == mt[z]) {
                            $('#mtn_text').text();
                            $('.mtn').fadeIn().delay(2000).fadeOut(1500);
                        }
                    }
                    for (var n = 0; n < num.length; n++) {
                        if (input[2] == num[n]) {
                            $('#other_text').text("This number is incorrect");
                            $('.other').fadeIn().delay(2000).fadeOut(1500);
                        }
                    }
                }
            }
        }
    })
})