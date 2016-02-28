var showError = function(error){
    var errorElem = $('.template .error').clone();
    var errorText = '<p>' + error + '</p>';
    errorElem.append(errorText);
};

var showSearchResults = function(query, resultNum) {
    var results = resultNum + ' results for <strong>' + query + '</strong>';
    return results;
};

var getJobs = function(description, location){

// the parameters we need to pass in our request to GitHub Jobs API
    
    var request = {
        location: location,
        description: description
    };

    $.ajax(
    {
        url: "http://jobs.github.com/positions.json",
        data: request,
        dataType: "jsonp",
        type: "GET",
        page: 2
    })
    .done(function(result){ //this waits for the ajax to return with a succesful promise object
        if(!request.description){
            var searchResults = showSearchResults('Location: ' + request.location, result.length);
        }
        else if (!request.location){
            var searchResults = showSearchResults('Description: ' + request.description, result.length);
        }
        else{
            var searchResults = showSearchResults('Description: ' 
            + request.description +' + Location: ' + request.location, result.length);
        }
        

        $('.search-results').html(searchResults);

        $.each(result, function(i, item) {
            var job = showJob(item);
            $('#results').append(job);
        });
    })
    .fail(function(jqXHR, error){ //this waits for the ajax to return with an error promise object
        var errorElem = showError(error);
        $('#results').append(errorElem);
    });
};

var showJob = function(item){
    var jobItem = $('.template .result-job').clone();
    // console.log(item);
    
    var jobTitle = jobItem.find('.title a');
    jobTitle.attr('href', item.url);
    jobTitle.text(item.title);
    //console.log(jobTitle.val());

    var created = jobItem.find('.created-date');
    //var date = new Date(1000*item.created_at);
    created.text(item.created_at);

    var jobLocation = jobItem.find('.location');
    jobLocation.text(item.location);

    var jobType = jobItem.find('.type');
    jobType.text(item.type);

    var jobDescription = jobItem.find('.description');
    jobDescription.append(item.description.substr(0,300)+'...');

    var jobCompany = jobItem.find('.company');
    jobCompany.text(item.company);
    
    return jobItem;
};

$(document).ready(function(){
    $('#search-form').submit(function(event){
        event.preventDefault();
        $('#results').html('');
        var description = $(this).find("input[name='search-term']").val();
        var location = $(this).find("input[name='search-location']").val();
        getJobs(description, location);
    });
});