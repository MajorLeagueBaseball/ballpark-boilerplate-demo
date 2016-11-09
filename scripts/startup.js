(function () {

    var mascotVote = {};

    mascotVote.results = function (data) {
        var votes = data.Items;
        var tally = {
            'Mr. Met': 0,
            'Phillie Phanatic': 0,
            'Swinging Friar': 0
        };


        for (var prop in votes) {
            var vote = votes[prop].vote;

            switch (vote) {
                case 1:
                    tally['Mr. Met']++;
                    break;
                case 2:
                    tally['Phillie Phanatic']++;
                    break;
                case 3:
                    tally['Swinging Friar']++;
                    break;
                default:
                    console.log("Sorry, mascot not found");
            }
        }

        console.log("final tally", tally);

        for (property in tally) {
            var percentage = parseInt(tally[property], 10);
            var counter = '<p>' + property + '</p><div class="progress"><div class="progress-bar" role="progressbar" aria-valuenow="' + percentage + '" aria-valuemin="0" aria-valuemax="100" style="width: ' + percentage + '%;"><span class="sr-only">' + percentage + '%</span></div></div>';
            $("#data").append(counter);
        }

    };

    mascotVote.init = function () {

        $('#voteForm').on('submit', function () {

            // Stop form from submitting normally
            event.preventDefault();

            // Get some values from elements on the page:
            var $form = $('#voteForm');
            var url = $form.attr("action");

            var payload = {
                "TableName": "fed-baseball-bootcamp",
                "Item": {
                    "guid": bamHeaders['x-mlbam-guid'] || 'TEST',
                    "vote": parseInt($("input[name=radio]:checked").val(), 10)
                }
            };


            // Send the data using post
            var posting = $.ajax({
                url: url,
                type: 'POST',
                crossDomain: true,
                contentType: 'application/json',
                data: JSON.stringify(payload),
                dataType: 'json'
            });


            // Put the results in a div
            posting.done(function (data, textStatus, jqXHR ) {

                $("#submit-vote").button('loading');

                $.ajax({
                    url: url + '?TableName=fed-baseball-bootcamp'
                }).done(function (data) {
                    $('.vote').hide();
                    $('.results').show();
                    mascotVote.results(data);
                });

            });

            posting.error(function (xhr, ajaxOptions, thrownError) {
                console.log(xhr, ajaxOptions, thrownError);
            })

        });

        $('#go-back-to-app').on('click', function () {
            console.log("use hook");
            BamHooks.goBack();
        });
    };

    mascotVote.init();


})();