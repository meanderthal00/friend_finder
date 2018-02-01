// parallax logic
$('.parallax').parallax();

// modal logic
$('.modal').modal();

// onclick function for submitting survey answers
$("#survButton").on("click", function (event) {
  event.preventDefault();

  // getting the answers from the survey

  var surveyScores = {
    scores: [
      $("#q1").val().trim(),
      $("#q2").val().trim(),
      $("#q3").val().trim(),
      $("#q4").val().trim(),
      $("#q5").val().trim(),
      $("#q6").val().trim(),
      $("#q7").val().trim(),
      $("#q8").val().trim(),
      $("#q9").val().trim(),
      $("#q10").val().trim(),
    ]
  };
  console.log(surveyScores + " Scores");

  // posting the collected scores
$.post("/api/classes",      ,
 function (data) {

 }
)

})