$(document).ready(function () {
        // .click & .hide & .show
        $('#clickP').hide();
        $('#click').click(function () {
                $('#clickP').show();
        });

        // .toggle
        $('#toggle').click(function () {
                $('#toggleImg').toggle("slow");
        });
        // .slideDown
        $('#slideDown').click(function () {
                $('#slideDownImg').slideDown();
        })
        // .slideUp
        $('#slideUp').click(function () {
                $('#slideDownImg').slideUp();
        });
        // .slideToggle
        $('#slideToggleBtn').click(function () {
                $('#slideToggleImg').slideToggle("slow");
        });
        // .fadeIn & .fadeOut
        $('#fadeJoke').hide();
        $('#fadeIn').click(function () {
                $('#fadeJoke').fadeIn();
        })
        $('#fadeOut').click(function () {
                $('#fadeJoke').fadeOut();
        })

        // .addClass
        $('#addClass').hover(
                function () {
                        $('#addClass').addClass('yellow')
                },
                function () {
                        $('#addClass').removeClass('yellow')
                }
        );
        // .before
        $('#beforeBtn').click(function () {
                $('#spanTwo').before($('#spanOne'));
                $('#code').show();
        });
        // .after
        $('#afterBtn').click(function () {
                $('#afterP').after("<span>s of my sweet cat Olive :P</span>");
        });
        // .append
        $('#appendBtn').click(function () {
                $('#append').append("<span>Nom! Nom! Nom!</span>")
        })
        // .html
        $('#htmlBtn').click(function() {
                $('#htmlDiv').html("<p>Hello</p>");
        });
        // .attr
        $('#attrBtn').click(function() {
                var attrDes = $('#attrImg').attr("description");
                $('#attrDiv').text(attrDes);
        })
        // .val & .text
        $('#valBtn').click(function() {  
        var value = $('#valInput').val();
        $('#valP').text(value);
        });
});