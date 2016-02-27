var results = [
  {
    "id": "7e0fcb34-dbff-11e5-89f4-08dbf5ad7fb8",
    "created_at": "Thu Feb 25 20:41:11 UTC 2016",
    "title": "Application Developer",
    "location": "Mountain View, CA",
    "type": "Full Time",
    "description": "<p>OUR MISSION IS TO BRING THE CERTAINTY OF SCIENCE TO THE ART OF BRAND MA…",
    "how_to_apply": "<p><a href=\"http://grnh.se/yxfkp6\">http://grnh.se/yxfkp6…",
    "company": "Tremor Video",
    "company_url": "http://www.tremorvideo.com/en",
    "company_logo": null,
    "url": "http://jobs.github.com/positions/7e0fcb34-dbff-11e5-89f4-08dbf5ad7fb8"
  },
  {
    "id": "812851d0-c393-11e5-85d4-7fd519e2facb",
    "created_at": "Thu Feb 25 17:27:34 UTC 2016",
    "title": "Software Engineer",
    "location": "San Francisco ",
    "type": "Full Time",
    "description": "<p>1-Page is expanding our engineering team in San Francisco, where you’ll…",
    "how_to_apply": "<p><a href=\"https://boards.greenhouse.io/1page/jobs/152683#.VqZse…",
    "company": "1-Page",
    "company_url": "http://1-page.com",
    "company_logo": null,
    "url": "http://jobs.github.com/positions/812851d0-c393-11e5-85d4-7fd519e2facb"
  }
];

var getJobs = function(results){
$.each(results, function(index, value){
            
            var job = showJob(value);
            $('#results').append(job);
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
    jobDescription.append(item.description);

    var jobCompany = jobItem.find('.company');
    jobCompany.text(item.company);
    
    return jobItem;
};

$(document).ready(function(){
    /* $('#search-form').submit(function(event){
        event.preventDefault();
        $('#results').html('');
        var description = $(this).find("input[name='search-term']").val();
        var location = $(this).find("input[name='search-location']").val();
        getJobs(description, location);
        */
        getJobs(results);
    });